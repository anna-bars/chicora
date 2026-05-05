import { Blog } from './blog.model';

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: '30 Summer Nail Ideas You\'ll Be Obsessed With',
    fullTitle: '30 Summer Nail Ideas You\'ll Be Obsessed With (2026)',
    date: 'June 15\'',
    badge: '🔥 Trending',
    category: '~ SUMMER / MINIMAL / FLORAL',
    imageUrl: '/assets/blog-1/1-soft-yellow-floral-almond-nails-summer.png',
    cardImage: '/assets/blog-1-img.png',
    nailName: '30 Summer Nail Ideas',
    nailDescription: 'From soft florals to bold stilettos — here are 30 summer nail designs you\'ll want to screenshot immediately!',
    content: `
      <p>You know that moment when your nails look so good you randomly start talking with your hands more? Yeah… this list is exactly that kind of dangerous 😄</p>

      <div class="nail-ideas-list">
        <div class="nail-idea-item">
          <h3>1. Soft Yellow Floral Almond Nails</h3>
          <img class="blog-img" src="/assets/blog-1/1-soft-yellow-floral-almond-nails-summer.png" alt="Soft Yellow Floral Almond Nails">
          <p>These nails feel like summer in the softest way possible...</p>
        </div>
        <!-- մնացած 29-ը նույն կերպ -->
      </div>

      <div class="final-thoughts">
        <p><strong>So… how many did you already fall in love with? Be honest 😄</strong></p>
      </div>
    `
  },

  {
    id: 2,
    title: '20 Classy May Nails Ideas For Late Spring',
    fullTitle: '20 Classy May Nails Ideas For Late Spring',
    date: 'May 20\'',
    badge: '🌸 Spring edit',
    category: '~ SPRING / CLASSY / PASTEL',
    imageUrl: '/assets/blog-2-img.png',
    nailName: 'Spring Elegance',
    nailDescription: 'Soft pastels and delicate designs for the perfect transition from spring to summer.',
    content: `<p>Late spring calls for elegant, soft tones...</p>`
  },

  // ← ՆՈՐ ԲԼՈԳ ԱՎԵԼԱՑՆԵԼԻՍ ուղղակի copy-paste անում ես այս կաղապարը:
  {
    id: 7,  // ← հաջորդ id
    title: 'Բլոգի կարճ անունը (grid-ում)',
    fullTitle: 'Բլոգի լրիվ անունը (բլոգի էջում)',
    date: 'July 15\'',
    badge: '✨ New',
    category: '~ CATEGORY / TAGS',
    imageUrl: '/assets/blog-X-img.png',
    nailName: 'Nail Set Name',
    nailDescription: 'Կարճ նկարագրություն բլոգի վերևում',
    content: `<p>Բլոգի HTML կոնտենտը...</p>`
  },
];