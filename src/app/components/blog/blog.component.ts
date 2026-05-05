import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  menuOpen = false;
  
  // Ընթացիկ բլոգը
  currentBlog: any = null;
  
  // Բոլոր բլոգները
  blogs = [
    { 
      id: 1, 
      title: 'May Nails That Feel Just Right On Time For Spring',
      fullTitle: 'May Nails That Feel Just Right On Time For Spring',
      date: 'June 24\'',
      badge: '🔥 Trending',
      category: '~ SUMMER / FRENCH / MINIMAL',
      content: `
        <p>Spring is finally here, and with it comes the perfect opportunity to refresh your nail game. This season, we're seeing a beautiful blend of soft pastels, delicate florals, and minimalist designs that capture the essence of renewal and growth.</p>
        
        <h2>The Rise of Soft Minimalism</h2>
        <p>Gone are the days of overly complicated nail art. This spring, it's all about embracing simplicity with a touch of elegance. Think sheer nudes, barely-there pinks, and subtle French tips that elongate the fingers and complement any outfit.</p>
        
        <img src="/assets/blog-detail-1.jpg" alt="Minimal nail design" class="blog-detail-img">
        
        <h2>Color Palette of the Season</h2>
        <p>The standout colors for May include:</p>
        <ul>
          <li><strong>Butter Yellow</strong> - Soft, cheerful, and unexpectedly versatile</li>
          <li><strong>Lavender Mist</strong> - A dreamy purple that feels both calming and romantic</li>
          <li><strong>Matcha Green</strong> - Earthy yet refreshing, perfect for nature lovers</li>
          <li><strong>Peach Blossom</strong> - Warm and inviting with a vintage feel</li>
        </ul>
        
        <h2>Nail Care Tips for Spring</h2>
        <p>As we transition from winter to spring, your nails might need some extra TLC. The fluctuating temperatures can leave them brittle and prone to breakage. Here's what we recommend:</p>
        <ul>
          <li>Hydrate your cuticles daily with jojoba oil</li>
          <li>Use a strengthening base coat before applying color</li>
          <li>Take breaks between gel manicures to let your nails breathe</li>
          <li>Incorporate biotin supplements into your routine</li>
        </ul>
        
        <img src="/assets/blog-detail-2.jpg" alt="Nail care products" class="blog-detail-img">
        
        <h2>Top 5 Nail Designs for May</h2>
        <p>If you're heading to the salon this month, here are the designs we're loving:</p>
        <ol>
          <li><strong>The Micro French</strong> - A super thin tip that creates the illusion of longer nails</li>
          <li><strong>Glazed Donut Nails</strong> - Hailey Bieber's iconic look, now in spring tones</li>
          <li><strong>Negative Space Accents</strong> - Modern and artistic, leaving strategic areas bare</li>
          <li><strong>Dried Flower Inclusions</strong> - Pressed flowers encapsulated in clear gel</li>
          <li><strong>Milky White with Gold Flakes</strong> - Ethereal and luxe</li>
        </ol>
        
        <p>Which design will you be trying first? Let us know in the comments below, and don't forget to tag us in your nail pics on Pinterest!</p>
      `,
      imageUrl: '/assets/blog-1-img.png',
      nailName: 'Spring Blossom',
      nailDescription: 'A delicate mix of soft pink and white with subtle floral accents that capture the essence of spring mornings.'
    },
    { 
      id: 2, 
      title: 'The Ultimate Guide To This Summer\'s Aesthetics',
      fullTitle: 'The Ultimate Guide To This Summer\'s Nail Aesthetics',
      date: 'June 28\'',
      badge: '📌 Editor\'s pick',
      category: '~ SUMMER / FRENCH / MINIMAL',
      content: `<p>Summer is approaching, and we've curated the ultimate guide to this season's hottest nail aesthetics...</p>`,
      imageUrl: '/assets/blog-3-img.png',
      nailName: 'Sunset Ombré',
      nailDescription: 'A gradient of warm oranges, pinks, and yellows that mimic the perfect summer sunset.'
    },
    { 
      id: 3, 
      title: 'May Nails That Feel Just Right On Time For Spring',
      fullTitle: 'May Nails That Feel Just Right On Time For Spring',
      date: 'June 24\'',
      badge: '💎 Must read',
      category: '~ SUMMER / FRENCH / MINIMAL',
      content: `<p>Another take on spring nails with fresh perspectives and unique color combinations...</p>`,
      imageUrl: '/assets/blog-2-img.png',
      nailName: 'Pearl Essence',
      nailDescription: 'Iridescent pearl finish that catches the light beautifully, perfect for any occasion.'
    },
    { 
      id: 4, 
      title: 'The Viral Nail Trend Taking Over TikTok',
      fullTitle: 'The Viral Nail Trend Taking Over TikTok',
      date: 'July 1\'',
      badge: '✨ New',
      category: '~ TRENDING / SUMMER / VIRAL',
      content: `<p>TikTok has done it again! The latest viral nail trend is taking the beauty world by storm...</p>`,
      imageUrl: '/assets/blog-1-img.png',
      nailName: 'Liquid Chrome',
      nailDescription: 'A mirror-like finish that shifts colors as you move your hands.'
    },
    { 
      id: 5, 
      title: '10 Minimal Nail Designs You\'ll See Everywhere',
      fullTitle: '10 Minimal Nail Designs You\'ll See Everywhere This Season',
      date: 'July 5\'',
      badge: '🌟 Popular',
      category: '~ MINIMAL / GLOSSY / TREND',
      content: `<p>Minimalism continues to dominate the nail world. Here are 10 designs you'll be seeing everywhere...</p>`,
      imageUrl: '/assets/blog-3-img.png',
      nailName: 'Barely There',
      nailDescription: 'A sheer, natural look that enhances your nail\'s natural beauty.'
    },
    { 
      id: 6, 
      title: 'How To Keep Your Nails Healthy All Summer',
      fullTitle: 'How To Keep Your Nails Healthy All Summer Long',
      date: 'July 8\'',
      badge: '💡 Tips',
      category: '~ CARE / HEALTH / NAILS',
      content: `<p>Summer activities can take a toll on your nails. Here's how to keep them strong and healthy...</p>`,
      imageUrl: '/assets/blog-2-img.png',
      nailName: 'Ocean Breeze',
      nailDescription: 'Cool blue tones with subtle white marbling, reminiscent of ocean waves.'
    }
  ];

  // Առաջարկվող բլոգներ (բացի ընթացիկից)
  suggestedBlogs: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadBlog(id);
    });
  }

  loadBlog(id: number): void {
    this.currentBlog = this.blogs.find(blog => blog.id === id);
    
    if (this.currentBlog) {
      // Ստանալ առաջարկվող բլոգները (բացի ընթացիկից)
      this.suggestedBlogs = this.blogs
        .filter(blog => blog.id !== id)
        .slice(0, 3); // Վերցնել 3 առաջարկվող բլոգ
    } else {
      // Եթե բլոգը չի գտնվել, վերադառնալ գլխավոր էջ
      this.router.navigate(['/']);
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  navigateToBlog(blogId: number): void {
    this.router.navigate(['/blog', blogId]);
    this.loadBlog(blogId);
    window.scrollTo(0, 0);
  }
}