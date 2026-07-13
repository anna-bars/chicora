// blog.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { BLOGS } from '../../data/blogs.data';
import { Blog } from '../../data/blog.model';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    standalone: false
})
export class BlogComponent implements OnInit {
  
  // Angular 21-ի նոր inject() ֆունկցիան (ավելի լավ է, քան constructor-ը)
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private meta = inject(Meta);
  private titleService = inject(Title);

  menuOpen = false;
  currentBlog: Blog | null = null;
  suggestedBlogs: Blog[] = [];

  // baseUrl-ը ապագայի համար, երբ տեղափոխես Supabase
  private baseUrl = 'https://chicora.vercel.app';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loadBlog(params['slug']);
    });
  }

  loadBlog(slug: string): void {
    this.currentBlog = BLOGS.find(b => b.slug === slug) ?? null;
    
    if (this.currentBlog) {
      // 1. Թարմացնում ենք suggested blogs-ը
      this.suggestedBlogs = BLOGS
        .filter(b => b.slug !== slug)
        .slice(0, 3);
      
      // 2. Ավելացնում ենք Meta Tags (SEO + Pinterest-ի համար)
      this.updateMetaTags(this.currentBlog);
      
      // 3. Փակում ենք մենյուն, եթե բաց էր
      this.menuOpen = false;
      document.body.style.overflow = '';
      
    } else {
      // Եթե բլոգը չի գտնվել, redirect ենք անում գլխավոր էջ
      this.router.navigate(['/']);
    }
  }

  /**
   * Թարմացնում է բոլոր կարևոր meta tags-երը
   * Աշխատում է և՛ browser-ում, և՛ SSR-ի ժամանակ
   */
  private updateMetaTags(blog: Blog): void {
    // Title
    this.titleService.setTitle(blog.fullTitle);

    // Basic Meta Tags
    this.meta.updateTag({ name: 'description', content: blog.nailDescription });
    this.meta.updateTag({ name: 'keywords', content: `${blog.category}, nail art, summer nails, nail design` });

    // Open Graph (Facebook, Pinterest, LinkedIn)
    this.meta.updateTag({ property: 'og:title', content: blog.fullTitle });
    this.meta.updateTag({ property: 'og:description', content: blog.nailDescription });
    this.meta.updateTag({ property: 'og:image', content: `${this.baseUrl}${blog.imageUrl}` });
    this.meta.updateTag({ property: 'og:url', content: `${this.baseUrl}/blog/${blog.slug}` });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'ChicOra' });

    // Twitter Cards
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: blog.fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: blog.nailDescription });
    this.meta.updateTag({ name: 'twitter:image', content: `${this.baseUrl}${blog.imageUrl}` });

    // Article-specific (կարևոր է Google-ի համար)
    this.meta.updateTag({ property: 'article:published_time', content: blog.date });
    this.meta.updateTag({ property: 'article:section', content: blog.category });
    
    // Canonical URL (կարևոր է կրկնօրինակ բովանդակությունից խուսափելու համար)
    this.meta.updateTag({ property: 'og:url', content: `${this.baseUrl}/blog/${blog.slug}` });
    
    // Robots (թույլ է տալիս ինդեքսավորումը)
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
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

  // Օժանդակ մեթոդ Pinterest-ի համար (կարող ես կանչել HTML-ից)
  shareOnPinterest(blog: Blog): void {
    const url = `https://www.pinterest.com/pin/create/button/?url=${this.baseUrl}/blog/${blog.slug}&media=${this.baseUrl}${blog.imageUrl}&description=${encodeURIComponent(blog.fullTitle)}`;
    window.open(url, '_blank');
  }
}