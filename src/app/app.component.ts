// app.component.ts - հեռացրեք ավելորդ կոդը
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blogs = [
    { id: 1, title: 'May Nails That Feel Just Right On Time For Spring', date: 'June 24\'', badge: '🔥 Trending', category: '~ SUMMER / FRENCH / MINIMAL' },
    { id: 2, title: 'The Ultimate Guide To This Summer\'s Aesthetics', date: 'June 28\'', badge: '📌 Editor\'s pick', category: '~ SUMMER / FRENCH / MINIMAL' },
    { id: 3, title: 'May Nails That Feel Just Right On Time For Spring', date: 'June 24\'', badge: '💎 Must read', category: '~ SUMMER / FRENCH / MINIMAL' },
    { id: 4, title: 'The Viral Nail Trend Taking Over TikTok', date: 'July 1\'', badge: '✨ New', category: '~ TRENDING / SUMMER / VIRAL' },
    { id: 5, title: '10 Minimal Nail Designs You\'ll See Everywhere', date: 'July 5\'', badge: '🌟 Popular', category: '~ MINIMAL / GLOSSY / TREND' },
    { id: 6, title: 'How To Keep Your Nails Healthy All Summer', date: 'July 8\'', badge: '💡 Tips', category: '~ CARE / HEALTH / NAILS' }
  ];

  constructor(private router: Router) {}

  navigateToBlog(blogId: number): void {
    this.router.navigate(['/blog', blogId]);
  }
}