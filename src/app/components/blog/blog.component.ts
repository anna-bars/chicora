import { Component, OnInit, OnDestroy, AfterViewInit, HostListener, inject, Renderer2, Inject } from '@angular/core';
import { DOCUMENT, DecimalPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { BLOGS } from '../../data/blogs.data';
import { Blog } from '../../data/blog.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, AfterViewInit, OnDestroy {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private meta = inject(Meta);
  private titleService = inject(Title);
  private renderer = inject(Renderer2);

  // Դինամիկ schema script-ի reference
  private schemaScript: HTMLScriptElement | null = null;
  private observer: IntersectionObserver | null = null;

  menuOpen = false;
  currentBlog: Blog | null = null;
  suggestedBlogs: Blog[] = [];
  private baseUrl = 'https://chicora.vercel.app';

  // ★ Social proof state
  savesCount = 0;
  viewsCount = 0;
  isSaved = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadBlog(params['slug']);
    });
  }

  ngAfterViewInit(): void {
    this.setupScrollReveal();
  }

  loadBlog(slug: string): void {
    this.currentBlog = BLOGS.find(b => b.slug === slug) ?? null;

    if (this.currentBlog) {
      this.suggestedBlogs = BLOGS
        .filter(b => b.slug !== slug)
        .slice(0, 3);

      // ★ deterministic pseudo social-proof numbers, based on slug
      // (replace with real analytics data once available on the backend)
      const seed = this.currentBlog.slug
        .split('')
        .reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

      this.savesCount = 800 + (seed * 37) % 1600;
      this.viewsCount = 4000 + (seed * 91) % 9000;
      this.isSaved = false;

      this.updateMetaTags(this.currentBlog);
      this.addJsonLdSchema(this.currentBlog);

      this.menuOpen = false;
      document.body.style.overflow = '';

      // re-run scroll reveal for the newly loaded content
      setTimeout(() => this.setupScrollReveal(), 0);
    } else {
      this.router.navigate(['/']);
    }
  }

  /**
   * Reading time estimate based on plain-text word count (~200 wpm)
   */
  get readingTime(): number {
    if (!this.currentBlog?.content) return 3;
    const words = this.currentBlog.content.replace(/<[^>]*>/g, '').trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  }

  toggleSave(): void {
    this.isSaved = !this.isSaved;
    this.savesCount += this.isSaved ? 1 : -1;
  }

  /**
   * Reading progress bar — updates width on scroll
   */
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
    // On desktop the blog-container scrolls internally; on mobile the window/body scrolls.
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

  /**
   * Scroll reveal for nail idea sections
   */
  private setupScrollReveal(): void {
    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    const items = this.document.querySelectorAll('.nail-idea-item');
    items.forEach(el => this.observer!.observe(el));
  }

  /**
   * JSON-LD Structured Data Generator
   * Ստեղծում է Article, BreadcrumbList, Organization, WebSite schema-ներ
   */
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
  }
}