import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BLOGS } from '../data/blogs.data';
import { Blog } from '../data/blog.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  menuOpen = false;
  blogs: Blog[] = BLOGS;

  constructor(private router: Router) {}

  navigateToBlog(slug: string): void {
    this.router.navigate(['/blog', slug]);
  }
  
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }
}