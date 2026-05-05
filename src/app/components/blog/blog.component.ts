import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BLOGS } from '../../data/blogs.data';
import { Blog } from '../../data/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  menuOpen = false;
  currentBlog: Blog | null = null;
  suggestedBlogs: Blog[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.loadBlog(+params['id']));
  }

  loadBlog(id: number): void {
    this.currentBlog = BLOGS.find(b => b.id === id) ?? null;
    if (this.currentBlog) {
      this.suggestedBlogs = BLOGS.filter(b => b.id !== id).slice(0, 3);
    } else {
      this.router.navigate(['/']);
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  navigateToBlog(id: number): void {
    this.router.navigate(['/blog', id]);
    this.loadBlog(id);
    window.scrollTo(0, 0);
  }
}