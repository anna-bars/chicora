import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { BlogService } from '../services/blog.service';
import { Blog } from '../data/blog.model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private router = inject(Router);
  private meta = inject(Meta);
  private titleService = inject(Title);
  private blogService = inject(BlogService);

  menuOpen = false;
  blogs: Blog[] = [];
  private baseUrl = 'https://chicora.vercel.app';

  async ngOnInit(): Promise<void> {
    this.updateHomepageMetaTags();
    this.blogs = await this.blogService.getBlogsLight();
  }
 
  private updateHomepageMetaTags(): void {
    this.titleService.setTitle('ChicOra - Daily Nail Edit | Your Next Nail Obsession Starts Here');

    this.meta.updateTag({ 
      name: 'description', 
      content: 'Curated nail art inspiration for girls who notice details. Discover the latest trends in summer nails, French tips, old money aesthetics and more.' 
    });
    
    this.meta.updateTag({ 
      name: 'keywords', 
      content: 'nail art, nail designs, summer nails, French tips, old money nails, nail inspiration, ChicOra' 
    });

    this.meta.updateTag({ 
      property: 'og:title', 
      content: 'ChicOra - Daily Nail Edit | Your Next Nail Obsession Starts Here' 
    });
    
    this.meta.updateTag({ 
      property: 'og:description', 
      content: 'Curated nail art inspiration for girls who notice details. Discover the latest trends in summer nails, French tips, old money aesthetics and more.' 
    });
    
    this.meta.updateTag({ 
      property: 'og:image', 
      content: `${this.baseUrl}/assets/logo/logo-dark.svg` 
    });
    
    this.meta.updateTag({ 
      property: 'og:url', 
      content: this.baseUrl 
    });
    
    this.meta.updateTag({ 
      property: 'og:type', 
      content: 'website' 
    });
    
    this.meta.updateTag({ 
      property: 'og:site_name', 
      content: 'ChicOra' 
    });

    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });

    this.meta.updateTag({ 
      name: 'twitter:card', 
      content: 'summary_large_image' 
    });
    
    this.meta.updateTag({ 
      name: 'twitter:title', 
      content: 'ChicOra - Daily Nail Edit | Your Next Nail Obsession Starts Here' 
    });
    
    this.meta.updateTag({ 
      name: 'twitter:description', 
      content: 'Curated nail art inspiration for girls who notice details. Discover the latest trends in summer nails, French tips, old money aesthetics and more.' 
    });
    
    this.meta.updateTag({ 
      name: 'twitter:image', 
      content: `${this.baseUrl}/assets/logo/logo-dark.svg` 
    });

    this.meta.updateTag({ 
      name: 'robots', 
      content: 'index, follow' 
    });
  }

    navigateToBlog(slug: string): void {
    this.router.navigate(['/blog', slug]);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
}