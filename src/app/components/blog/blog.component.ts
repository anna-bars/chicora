import { Component, OnInit, OnDestroy, AfterViewInit, HostListener, inject, Renderer2, Inject } from '@angular/core';
import { DOCUMENT, DecimalPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../data/blog.model';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit, OnDestroy {
  private blogService = inject(BlogService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private meta = inject(Meta);
  private titleService = inject(Title);
  private renderer = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private schemaScript: HTMLScriptElement | null = null;
  private observer: IntersectionObserver | null = null;

  menuOpen = false;
  currentBlog: Blog | null = null;
  suggestedBlogs: Blog[] = [];
  isLoading = true;
  private baseUrl = 'https://chicora.vercel.app';

  savesCount = 0;
  viewsCount = 0;
  isSaved = false;

  nailPreviewImages: { src: string; alt: string; originalIndex: number }[] = [];
  activePreviewIndex = 0;
  private previewObserver: IntersectionObserver | null = null;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadBlog(params['slug']);
    });
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.setupScrollReveal();
  }

  async loadBlog(slug: string): Promise<void> {
    this.isLoading = true;
    this.currentBlog = await this.blogService.getBlog(slug);

    if (this.currentBlog) {
      this.suggestedBlogs = await this.blogService.getBlogs();
      this.suggestedBlogs = this.suggestedBlogs
        .filter(b => b.slug !== slug)
        .slice(0, 3);

      const seed = this.currentBlog.slug
        .split('')
        .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

      this.savesCount = 800 + (seed * 37) % 1600;
      this.viewsCount = 4000 + (seed * 91) % 9000;
      this.isSaved = false;

      this.updateMetaTags(this.currentBlog);
      this.addJsonLdSchema(this.currentBlog);
      this.nailPreviewImages = this.extractNailPreviewImages(this.currentBlog);
      this.activePreviewIndex = 0;

      this.menuOpen = false;
      if (this.isBrowser) {
        document.body.style.overflow = '';
      }

      this.isLoading = false;

      if (this.isBrowser) {
        setTimeout(() => {
          this.setupScrollReveal();
          this.insertNewsletterSignup();
          this.setupPreviewObserver();
        }, 0);
      }
    } else {
      this.isLoading = false;
      this.router.navigate(['/']);
    }
  }

  get readingTime(): number {
    if (!this.currentBlog?.nailItems?.length) return 3;

    const words = this.currentBlog.nailItems
      .map(item => item.description || '')
      .join(' ')
      .trim()
      .split(/\s+/)
      .length;

    return Math.max(1, Math.round(words / 200));
  }

  toggleSave(): void {
    this.isSaved = !this.isSaved;
    this.savesCount += this.isSaved ? 1 : -1;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollEl = this.getScrollContainer();
    const h = scrollEl.scrollHeight - scrollEl.clientHeight;
    const percent = h > 0 ? (scrollEl.scrollTop / h) * 100 : 0;
    const bar = this.document.querySelector('.reading-progress') as HTMLElement;
    if (bar) {
      bar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
    }
  }

  private getScrollContainer(): { scrollTop: number; scrollHeight: number; clientHeight: number } {
    const blogContainer = this.document.querySelector('.blog-container') as HTMLElement | null;
    if (blogContainer && window.innerWidth > 768) {
      return blogContainer;
    }
    return {
      scrollTop: window.scrollY,
      scrollHeight: this.document.documentElement.scrollHeight,
      clientHeight: window.innerHeight
    };
  }

  private setupScrollReveal(): void {
    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          this.observer!.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    const items = this.document.querySelectorAll('.nail-idea-item');
    items.forEach(el => this.observer!.observe(el));
  }

  private extractNailPreviewImages(blog: Blog): { src: string; alt: string; originalIndex: number }[] {
    let imgSrcs: string[] = [];

    if (blog.content) {
      const temp = this.document.createElement('div');
      temp.innerHTML = blog.content;
      imgSrcs = Array.from(temp.querySelectorAll('img'))
        .map(img => img.getAttribute('src') || '')
        .filter(Boolean);
    } else if (blog.nailItems && blog.nailItems.length > 0) {
      imgSrcs = blog.nailItems.flatMap(item => item.images || []);
    }

    if (imgSrcs.length === 0) return [];

    const maxCount = 8;
    let selectedIndexes: number[];
    if (imgSrcs.length <= maxCount) {
      selectedIndexes = imgSrcs.map((_, i) => i);
    } else {
      const step = imgSrcs.length / maxCount;
      selectedIndexes = Array.from({ length: maxCount }, (_, i) => Math.floor(i * step));
    }

    return selectedIndexes.map(i => ({
      src: imgSrcs[i],
      alt: `Nail look ${i + 1}`,
      originalIndex: i
    }));
  }

  private setupPreviewObserver(): void {
    if (this.previewObserver) {
      this.previewObserver.disconnect();
    }
    if (this.nailPreviewImages.length === 0) return;

    const imgs = this.document.querySelectorAll('.blog-content img');

    this.previewObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = Number((entry.target as HTMLElement).getAttribute('data-preview-idx'));
          if (!isNaN(idx)) this.activePreviewIndex = idx;
        }
      });
    }, { threshold: 0.5, rootMargin: '-15% 0px -45% 0px' });

    this.nailPreviewImages.forEach((item, i) => {
      const el = imgs[item.originalIndex] as HTMLElement | undefined;
      if (el) {
        el.setAttribute('data-preview-idx', String(i));
        this.previewObserver!.observe(el);
      }
    });
  }

  scrollToImage(originalIndex: number): void {
    const imgs = this.document.querySelectorAll('.blog-content img');
    const target = imgs[originalIndex] as HTMLElement | undefined;
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  private insertNewsletterSignup(): void {
    const existing = this.document.querySelector('.inline-newsletter-signup');
    if (existing) existing.remove();

    const contentEl = this.document.querySelector('.blog-content');
    if (!contentEl) return;

    const headers = Array.from(contentEl.querySelectorAll('h2'));
    const anchor = headers.length > 1 ? headers[Math.floor(headers.length / 2)] : null;

    const box = this.renderer.createElement('div') as HTMLElement;
    this.renderer.addClass(box, 'inline-newsletter-signup');
    box.innerHTML = `
      <div class="newsletter-pin">📌</div>
      <p class="newsletter-eyebrow">Save this, but don't lose it</p>
      <h4 class="newsletter-heading">Get new nail looks before they hit Pinterest</h4>
      <p class="newsletter-sub">One email a week. No spam, just the good sets.</p>
      <form class="newsletter-form">
        <input type="email" class="newsletter-input" placeholder="you@email.com" required />
        <button type="submit" class="newsletter-btn">Subscribe</button>
      </form>
      <p class="newsletter-success">✓ You're in — check your inbox soon.</p>
    `;

    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(box, anchor.nextSibling);
    } else {
      contentEl.appendChild(box);
    }

    const form = box.querySelector('.newsletter-form') as HTMLFormElement | null;
    form?.addEventListener('submit', (e: Event) => {
      e.preventDefault();
      const emailInput = form.querySelector('.newsletter-input') as HTMLInputElement | null;
      const email = emailInput?.value ?? '';
      console.log('Newsletter signup:', email);
      box.classList.add('is-submitted');
    });
  }

  private addJsonLdSchema(blog: Blog): void {
    this.removeJsonLdSchema();

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${this.baseUrl}/blog/${blog.slug}#article`,
          'headline': blog.fullTitle,
          'description': blog.nailDescription,
          'image': `${this.baseUrl}${blog.imageUrl}`,
          'datePublished': this.formatDateToISO(blog.date),
          'dateModified': this.formatDateToISO(blog.date),
          'author': {
            '@type': 'Person',
            'name': 'ChicOra Team',
            'url': `${this.baseUrl}/about`
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'ChicOra',
            'logo': {
              '@type': 'ImageObject',
              'url': `${this.baseUrl}/assets/logo.png`
            }
          },
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `${this.baseUrl}/blog/${blog.slug}`
          },
          'articleSection': blog.category || 'Nail Art'
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${this.baseUrl}/blog/${blog.slug}#breadcrumb`,
          'itemListElement': [
            { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': this.baseUrl },
            { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${this.baseUrl}/blog` },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': blog.category || 'Nail Art',
              'item': `${this.baseUrl}/blog?category=${blog.category?.toLowerCase() || 'nail-art'}`
            },
            { '@type': 'ListItem', 'position': 4, 'name': blog.fullTitle, 'item': `${this.baseUrl}/blog/${blog.slug}` }
          ]
        },
        {
          '@type': 'Organization',
          '@id': `${this.baseUrl}#organization`,
          'name': 'ChicOra',
          'url': this.baseUrl,
          'logo': {
            '@type': 'ImageObject',
            'url': `${this.baseUrl}/assets/logo.png`
          },
          'sameAs': [
            'https://www.pinterest.com/chicora',
            'https://www.instagram.com/chicora'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': `${this.baseUrl}#website`,
          'url': this.baseUrl,
          'name': 'ChicOra - Nail Art & Beauty',
          'description': 'Discover trendy nail art designs, tutorials, and inspiration',
          'publisher': { '@id': `${this.baseUrl}#organization` }
        }
      ]
    };

    this.schemaScript = this.renderer.createElement('script');
    this.schemaScript!.type = 'application/ld+json';
    this.schemaScript!.text = JSON.stringify(schema, null, 2);
    this.renderer.appendChild(this.document.head, this.schemaScript);
  }

  private removeJsonLdSchema(): void {
    if (this.schemaScript) {
      this.renderer.removeChild(this.document.head, this.schemaScript);
      this.schemaScript = null;
    }
    const existingScripts = this.document.querySelectorAll(
      'script[type="application/ld+json"]:not([data-permanent])'
    );
    existingScripts.forEach(script => script.remove());
  }

  private formatDateToISO(dateString: string): string {
    try {
      if (dateString.includes('T')) {
        return dateString;
      }

      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toISOString();
      }

      const months: { [key: string]: number } = {
        'january': 1, 'february': 2, 'march': 3, 'april': 4,
        'may': 5, 'june': 6, 'july': 7, 'august': 8,
        'september': 9, 'october': 10, 'november': 11, 'december': 12
      };

      const parts = dateString.toLowerCase().match(/(\w+)\s+(\d+),?\s*(\d{4})/);
      if (parts) {
        const month = months[parts[1]];
        const day = parseInt(parts[2]);
        const year = parseInt(parts[3]);

        if (month && day && year) {
          const parsedDate = new Date(Date.UTC(year, month - 1, day));
          return parsedDate.toISOString();
        }
      }

      console.warn('Could not parse date:', dateString);
      return dateString;
    } catch (error) {
      console.error('Date parsing error:', error);
      return dateString;
    }
  }

  private updateMetaTags(blog: Blog): void {
    this.titleService.setTitle(blog.fullTitle);

    this.meta.updateTag({ name: 'description', content: blog.nailDescription });
    this.meta.updateTag({ name: 'keywords', content: `${blog.category}, nail art, summer nails, nail design, ChicOra` });

    this.meta.updateTag({ property: 'og:title', content: blog.fullTitle });
    this.meta.updateTag({ property: 'og:description', content: blog.nailDescription });
    this.meta.updateTag({ property: 'og:image', content: `${this.baseUrl}${blog.imageUrl}` });
    this.meta.updateTag({ property: 'og:url', content: `${this.baseUrl}/blog/${blog.slug}` });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'ChicOra' });

    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: blog.fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: blog.nailDescription });
    this.meta.updateTag({ name: 'twitter:image', content: `${this.baseUrl}${blog.imageUrl}` });

    this.meta.updateTag({
      property: 'article:published_time',
      content: this.formatDateToISO(blog.date)
    });
    this.meta.updateTag({ property: 'article:section', content: blog.category });

    this.addOrUpdateLinkTag('canonical', `${this.baseUrl}/blog/${blog.slug}`);

    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  private addOrUpdateLinkTag(rel: string, href: string): void {
    const existingLink = this.document.querySelector(`link[rel="${rel}"]`);
    if (existingLink) {
      existingLink.remove();
    }

    const link: HTMLLinkElement = this.renderer.createElement('link');
    link.rel = rel;
    link.href = href;
    this.renderer.appendChild(this.document.head, link);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  navigateToBlog(slug: string): void {
    this.router.navigate(['/blog', slug]);
    this.loadBlog(slug);
    window.scrollTo(0, 0);
  }

  shareOnPinterest(blog: Blog): void {
    const url = `https://www.pinterest.com/pin/create/button/?url=${this.baseUrl}/blog/${blog.slug}&media=${this.baseUrl}${blog.imageUrl}&description=${encodeURIComponent(blog.fullTitle)}`;
    window.open(url, '_blank');
  }

  ngOnDestroy(): void {
    this.removeJsonLdSchema();
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.previewObserver) {
      this.previewObserver.disconnect();
    }
  }
}