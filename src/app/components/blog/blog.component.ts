import { Component, OnInit, inject, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { BLOGS } from '../../data/blogs.data';
import { Blog } from '../../data/blog.model';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private meta = inject(Meta);
  private titleService = inject(Title);
  private renderer = inject(Renderer2);

  // Դինամիկ schema script-ի reference
  private schemaScript: HTMLScriptElement | null = null;

  menuOpen = false;
  currentBlog: Blog | null = null;
  suggestedBlogs: Blog[] = [];
  private baseUrl = 'https://chicora.vercel.app';

  // Փոխիր constructor-ը
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadBlog(params['slug']);
    });
  }

  loadBlog(slug: string): void {
    this.currentBlog = BLOGS.find(b => b.slug === slug) ?? null;
    
    if (this.currentBlog) {
      this.suggestedBlogs = BLOGS
        .filter(b => b.slug !== slug)
        .slice(0, 3);
      
      this.updateMetaTags(this.currentBlog);
      this.addJsonLdSchema(this.currentBlog); // ✅ Ավելացրու schema
      
      this.menuOpen = false;
      document.body.style.overflow = '';
      
    } else {
      this.router.navigate(['/']);
    }
  }

  /**
   * JSON-LD Structured Data Generator
   * Ստեղծում է Article, BreadcrumbList, Organization, WebSite schema-ներ
   */
  private addJsonLdSchema(blog: Blog): void {
    // 1. Հեռացնում ենք հին schema-ն, եթե կա
    this.removeJsonLdSchema();

    // 2. Ստեղծում ենք ամբողջական @graph schema
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        // === ARTICLE ===
        {
          '@type': 'Article',
          '@id': `${this.baseUrl}/blog/${blog.slug}#article`,
          'headline': blog.fullTitle,
          'description': blog.nailDescription,
          'image': `${this.baseUrl}${blog.imageUrl}`,
          'datePublished': this.formatDateToISO(blog.date),
          'dateModified': this.formatDateToISO(blog.date), // Կարող ես updated date ավելացնել
          'author': {
            '@type': 'Person',
            'name': 'ChicOra Team', // Կամ actual author name
            'url': `${this.baseUrl}/about`
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'ChicOra',
            'logo': {
              '@type': 'ImageObject',
              'url': `${this.baseUrl}/assets/logo.png` // Փոխիր actual logo path-ով
            }
          },
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `${this.baseUrl}/blog/${blog.slug}`
          },
          'articleSection': blog.category || 'Nail Art'
        },
        
        // === BREADCRUMBLIST ===
        {
          '@type': 'BreadcrumbList',
          '@id': `${this.baseUrl}/blog/${blog.slug}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': this.baseUrl
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Blog',
              'item': `${this.baseUrl}/blog`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': blog.category || 'Nail Art',
              'item': `${this.baseUrl}/blog?category=${blog.category?.toLowerCase() || 'nail-art'}`
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'name': blog.fullTitle,
              'item': `${this.baseUrl}/blog/${blog.slug}`
            }
          ]
        },
        
        // === ORGANIZATION (E-E-A-T signal) ===
        {
          '@type': 'Organization',
          '@id': `${this.baseUrl}#organization`,
          'name': 'ChicOra',
          'url': this.baseUrl,
          'logo': {
            '@type': 'ImageObject',
            'url': `${this.baseUrl}/assets/logo.png` // Փոխիր actual logo path-ով
          },
          'sameAs': [
            'https://www.pinterest.com/chicora', // Փոխիր actual social links-ով
            'https://www.instagram.com/chicora'
            // Ավելացրու այլ social media
          ]
        },
        
        // === WEBSITE ===
        {
          '@type': 'WebSite',
          '@id': `${this.baseUrl}#website`,
          'url': this.baseUrl,
          'name': 'ChicOra - Nail Art & Beauty',
          'description': 'Discover trendy nail art designs, tutorials, and inspiration', // Փոխիր actual description-ով
          'publisher': {
            '@id': `${this.baseUrl}#organization`
          }
        }
      ]
    };

    // 3. Inject ենք schema script-ը head-ի մեջ
    this.schemaScript = this.renderer.createElement('script');
    this.schemaScript!.type = 'application/ld+json';
    this.schemaScript!.text = JSON.stringify(schema, null, 2);
    this.renderer.appendChild(this.document.head, this.schemaScript);
  }

  /**
   * Ջնջում է նախորդ schema script-ը
   */
  private removeJsonLdSchema(): void {
    if (this.schemaScript) {
      this.renderer.removeChild(this.document.head, this.schemaScript);
      this.schemaScript = null;
    }
    // Նաև ջնջում ենք հին schema-ները, եթե ID-ով չենք գտել
    const existingScripts = this.document.querySelectorAll(
      'script[type="application/ld+json"]:not([data-permanent])'
    );
    existingScripts.forEach(script => {
      script.remove();
    });
  }

  /**
   * Format-ավորում է ամսաթիվը ISO 8601 format-ի
   * Input: "June 15, 2024" կամ "2024-06-15"
   * Output: "2024-06-15T00:00:00+00:00"
   */
  private formatDateToISO(dateString: string): string {
    try {
      // Եթե արդեն ISO format-ով է
      if (dateString.includes('T')) {
        return dateString;
      }
      
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date.toISOString();
      }
      
      // Fallback - manual parsing (եթե date format-ը "June 15, 2024")
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
          const date = new Date(Date.UTC(year, month - 1, day));
          return date.toISOString();
        }
      }
      
      // Եթե ոչ մի format չի աշխատում, վերադարձնում ենք original-ը
      console.warn('Could not parse date:', dateString);
      return dateString;
    } catch (error) {
      console.error('Date parsing error:', error);
      return dateString; // Fallback
    }
  }

  private updateMetaTags(blog: Blog): void {
    // === TITLE ===
    this.titleService.setTitle(blog.fullTitle);

    // === BASIC META TAGS ===
    this.meta.updateTag({ name: 'description', content: blog.nailDescription });
    this.meta.updateTag({ name: 'keywords', content: `${blog.category}, nail art, summer nails, nail design, ChicOra` });

    // === OPEN GRAPH (Pinterest, Facebook, Twitter) ===
    this.meta.updateTag({ property: 'og:title', content: blog.fullTitle });
    this.meta.updateTag({ property: 'og:description', content: blog.nailDescription });
    this.meta.updateTag({ property: 'og:image', content: `${this.baseUrl}${blog.imageUrl}` });
    this.meta.updateTag({ property: 'og:url', content: `${this.baseUrl}/blog/${blog.slug}` });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'ChicOra' });
    
    // ✅ Pinterest Rich Pins
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });

    // === TWITTER CARDS ===
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: blog.fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: blog.nailDescription });
    this.meta.updateTag({ name: 'twitter:image', content: `${this.baseUrl}${blog.imageUrl}` });

    // === ARTICLE META TAGS (Ուղղված date format) ===
    // ✅ Սա ավտոմատ կդառնա ISO 8601
    this.meta.updateTag({ 
      property: 'article:published_time', 
      content: this.formatDateToISO(blog.date) 
    });
    this.meta.updateTag({ property: 'article:section', content: blog.category });
    
    // === CANONICAL URL (Ավելացված) ===
    this.addOrUpdateLinkTag('canonical', `${this.baseUrl}/blog/${blog.slug}`);
    
    // === ROBOTS ===
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  /**
   * Dynamic link tag-եր ավելացնելու համար (canonical, alternate, etc.)
   */
  private addOrUpdateLinkTag(rel: string, href: string): void {
    // Ջնջում ենք հին canonical link-ը
    const existingLink = this.document.querySelector(`link[rel="${rel}"]`);
    if (existingLink) {
      existingLink.remove();
    }
    
    // Ստեղծում ենք նորը
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

  // ✅ Destroy-ի ժամանակ մաքրում ենք schema-ն
  ngOnDestroy(): void {
    this.removeJsonLdSchema();
  }
}