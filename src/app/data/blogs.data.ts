import { Blog } from './blog.model';
import { generateSlug } from '../utils/slug.util';

export const BLOGS: Blog[] = [
  {
    id: 1,
    slug: generateSlug('30 Summer Nail Ideas You\'ll Be Obsessed With 2026'),
    title: '30 Summer Nail Ideas You\'ll Be Obsessed With',
    fullTitle: '30 Summer Nail Ideas You\'ll Be Obsessed With (2026)',
    date: 'June 15\'',
    badge: '🔥 Trending',
    category: '~ SUMMER / MINIMAL / FLORAL',
    imageUrl: '/assets/blog-1/1-soft-yellow-floral-almond-nails-summer.png',
    cardImage: '/assets/blog-1/1-soft-yellow-floral-almond-nails-summer.png',
    nailName: '30 Summer Nail Ideas',
    nailDescription: 'From soft florals to bold stilettos — here are 30 summer nail designs you\'ll want to screenshot immediately!',
    content: `
      <p>You know that moment when your nails look so good you randomly start talking with your hands more? Yeah… this list is exactly that kind of dangerous 😄</p>
        <p>I went through all these designs, and trust me—picking just one feels impossible.</p>
        
        <div class="nail-ideas-list">
          <div class="nail-idea-item">
            <h3>1. Soft Yellow Floral Almond Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/1-soft-yellow-floral-almond-nails-summer.png" alt="Soft Yellow Floral Almond Nails">
            <p>These nails feel like summer in the softest way possible. The pale yellow base with tiny floral details looks super fresh without trying too hard. I love how they stay minimal but still have personality. Ever wanted something cute but not childish? This hits that balance perfectly.</p>
          </div>

          <div class="nail-idea-item">
            <h3>2. Pastel Mixed Color Nails with Gold Rings</h3>
            <img class="blog-img"  src="/assets/blog-1/2-pastel-mixed-color-nails-with-gold-rings.png" alt="Pastel Mixed Color Nails">
            <p>Each nail has its own pastel shade, but somehow everything still feels cohesive. That's the magic here. It's playful, but not chaotic. Honestly, if you can't choose one color… why even try?</p>
          </div>

          <div class="nail-idea-item">
            <h3>3. Nude Nails with Mini Flower Design</h3>
            <img class="blog-img"  src="/assets/blog-1/3-nude-nails-with-mini-flower-design.png" alt="Nude Nails with Flowers">
            <p>Clean nude base, tiny flowers, done. These nails give that "effortlessly put together" vibe. I always notice how designs like this look simple at first, but then you keep staring at the details.</p>
          </div>

          <div class="nail-idea-item">
            <h3>4. Pink Ombre Beach Glossy Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/4-pink-ombre-beach-glossy-nails.png" alt="Pink Ombre Beach Nails">
            <p>The soft fade from nude to pink looks amazing in sunlight. These nails basically glow at the beach. If you've ever taken a hand pic in golden hour, you already know this will look insane.</p>
          </div>

          <div class="nail-idea-item">
            <h3>5. Short Pink Floral Summer Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/5-short-pink-floral-summer-nails.png" alt="Short Pink Floral Nails">
            <p>Short nails but still super cute? Yes, please. The soft pink with floral accents makes them feel wearable every day. Perfect if you want something pretty without going full drama.</p>
          </div>

          <div class="nail-idea-item">
            <h3>6. Sunset Flame Stiletto Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/6-sunset-flame-stiletto-summer-nails.png" alt="Sunset Flame Stiletto Nails">
            <p>These are bold. Like… really bold. The fiery gradient gives major sunset energy, and the long shape makes them impossible to ignore. Not your "quiet girl" nails, that's for sure.</p>
          </div>

          <div class="nail-idea-item">
            <h3>7. Pink 3D Flower Glam Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/7-pink-3d-flower-glam-nails.png" alt="Pink 3D Flower Nails">
            <p>These nails don't just look good—they stand out physically. The 3D flowers add texture and make everything feel extra. I tried something similar once and couldn't stop looking at my hands… slightly distracting, not gonna lie.</p>
          </div>

          <div class="nail-idea-item">
            <h3>8. Tropical Mix Pattern Summer Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/8-tropical-mix-pattern-summer-nails.png" alt="Tropical Mix Pattern Nails">
            <p>This set mixes colors, patterns, and details all in one. It sounds like chaos, but it actually works. If you get bored easily, this is your perfect match.</p>
          </div>

          <div class="nail-idea-item">
            <h3>9. Beige Chrome Minimal Summer Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/9-beige-chrome-minimal-summer-nails.png" alt="Beige Chrome Nails">
            <p>Soft beige with a chrome finish gives that quiet luxury vibe. Nothing loud, nothing extra—just clean and glossy. Sometimes simple really wins.</p>
          </div>

          <div class="nail-idea-item">
            <h3>10. Yellow French Tip Floral Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/10-yellow-french-tip-floral-nails.png" alt="Yellow French Tip Floral Nails">
            <p>A soft twist on the classic French manicure. The yellow tips with tiny flowers feel fresh and summery. It's subtle, but definitely not boring.</p>
          </div>

          <div class="nail-idea-item">
            <h3>11. Nude Almond Nails Clean Aesthetic</h3>
            <img class="blog-img"  src="/assets/blog-1/11-nude-almond-nails-clean-aesthetic.png" alt="Nude Almond Nails">
            <p>These nails rely on shape and shine instead of design. And honestly? That's enough. They feel classy without trying to prove anything.</p>
          </div>

          <div class="nail-idea-item">
            <h3>12. Peach Nude Gradient Summer Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/12-peach-nude-gradient-summer-nails.png" alt="Peach Nude Gradient Nails">
            <p>Warm peach tones blending into nude create a soft glow effect. These nails look especially good in natural light. Ever noticed how warm tones just flatter everything?</p>
          </div>

          <div class="nail-idea-item">
            <h3>13. Pink Floral Detailed Glossy Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/13-pink-floral-detailed-glossy-nails.png" alt="Pink Floral Detailed Nails">
            <p>The floral details here are more noticeable, but still soft. It gives romantic, slightly dreamy vibes. Perfect for those "cute but still polished" days.</p>
          </div>

          <div class="nail-idea-item">
            <h3>14. Nude Nails with Gold Rings Aesthetic</h3>
            <img class="blog-img"  src="/assets/blog-1/14-nude-nails-gold-rings-aesthetic.png" alt="Nude Nails with Gold Rings">
            <p>These nails prove one thing—styling matters. The nude base looks 10x better with gold rings. Sometimes it's not just the nails, it's the whole look.</p>
          </div>

          <div class="nail-idea-item">
            <h3>15. Pastel Multicolor Glossy Summer Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/15-pastel-multicolor-glossy-summer-nails.png" alt="Pastel Multicolor Nails">
            <p>Different colors on each nail, but all soft and glossy. It feels fun without being overwhelming. You get variety without losing the aesthetic.</p>
          </div>

          <div class="nail-idea-item">
            <h3>16. Nude Nails Tattoo Aesthetic Style</h3>
            <img class="blog-img"  src="/assets/blog-1/16-nude-nails-tattoo-aesthetic-style.png" alt="Nude Nails with Tattoo">
            <p>Minimal nails paired with tattoos create a strong contrast. The design itself stays simple, but the overall vibe feels bold. It's more about attitude than detail.</p>
          </div>

          <div class="nail-idea-item">
            <h3>17. Minimal Pink Short Clean Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/17-minimal-pink-short-clean-nails.png" alt="Minimal Pink Short Nails">
            <p>Short, glossy, pink—done. These are the nails you get when you don't want to think too much but still want to look put together.</p>
          </div>

          <div class="nail-idea-item">
            <h3>18. Green Floral Nails Outdoor Aesthetic</h3>
            <img class="blog-img"  src="/assets/blog-1/18-green-floral-nails-outdoor-aesthetic.png" alt="Green Floral Nails">
            <p>The green tones mixed with floral elements feel super fresh. These nails give calm, nature-inspired energy. Almost like a mini escape on your hands.</p>
          </div>

          <div class="nail-idea-item">
            <h3>19. Nude Glossy Nails Coffee Aesthetic</h3>
            <img class="blog-img"  src="/assets/blog-1/19-nude-glossy-nails-coffee-aesthetic.png" alt="Nude Glossy Coffee Nails">
            <p>Simple nude nails styled with a cozy drink shot. Not complicated, but very aesthetic. Honestly, this is peak Instagram energy.</p>
          </div>

          <div class="nail-idea-item">
            <h3>20. Nude Nails Gold Jewelry Combo</h3>
            <img class="blog-img"  src="/assets/blog-1/20-nude-nails-gold-jewelry-combo.png" alt="Nude Nails with Gold Jewelry">
            <p>Again, minimal nails—but elevated with accessories. The gold adds richness instantly. Proof that small details make a big difference.</p>
          </div>

          <div class="nail-idea-item">
            <h3>21. White Minimal Almond Summer Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/21-white-minimal-almond-summer-nails.png" alt="White Minimal Almond Nails">
            <p>Clean white nails always look fresh. The almond shape keeps them elegant. This is one of those styles that never fails.</p>
          </div>

          <div class="nail-idea-item">
            <h3>22. Classic French Tip Street Style Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/22-classic-french-tip-street-style-nails.png" alt="Classic French Tip Nails">
            <p>You already know this one. French tips stay timeless for a reason. They just work with everything—no thinking required.</p>
          </div>

          <div class="nail-idea-item">
            <h3>23. Bright Red Bold Summer Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/23-bright-red-bold-summer-nails.png" alt="Bright Red Bold Nails">
            <p>Red nails always make a statement. These feel confident, strong, and a little dramatic. Perfect when you want attention (in a good way).</p>
          </div>

          <div class="nail-idea-item">
            <h3>24. Soft Yellow Minimal Gloss Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/24-soft-yellow-minimal-gloss-nails.png" alt="Soft Yellow Minimal Nails">
            <p>Simple yellow with a glossy finish. That's it. But somehow it still feels very summery. Funny how color alone can do all the work.</p>
          </div>

          <div class="nail-idea-item">
            <h3>25. Nude and Red Accent Summer Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/25-nude-and-red-accent-summer-nails.png" alt="Nude and Red Accent Nails">
            <p>This red feels even more intense—super clean and shiny. No distractions, just bold color. Sometimes that's all you need.</p>
          </div>

          <div class="nail-idea-item">
            <h3>26. Soft Yellow Summer Minimal Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/26-soft-yellow-summer-minimal-nails.png" alt="Soft Yellow Summer Nails">
            <p>A softer version of yellow, more muted and calm. It feels warm but not loud. Great if you want color without going full neon.</p>
          </div>

          <div class="nail-idea-item">
            <h3>27. Blue Glossy Fresh Summer Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/27-blue-glossy-fresh-summer-nails.png" alt="Blue Glossy Nails">
            <p>Blue brings that cool, refreshing vibe. It's different from the usual pinks and nudes. Ever felt like switching things up? This is your sign.</p>
          </div>

          <div class="nail-idea-item">
            <h3>28. Pink Glossy Fresh Summer Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/28-pink-glossy-fresh-summer-nails.png" alt="Pink Glossy Nails">
            <p>This is your safe choice—but in a good way. Pink glossy nails always look good, no matter what. Reliable and pretty.</p>
          </div>

          <div class="nail-idea-item">
            <h3>29. Cozy Nude Minimal Lifestyle Nails</h3>
            <img class="blog-img"  src="/assets/blog-1/29-cozy-nude-minimal-lifestyle-nails.png" alt="Cozy Nude Minimal Nails">
            <p>Soft nude nails with cozy styling just feel comforting. No drama, no effort—just clean beauty. Sometimes that's exactly what you need.</p>
          </div>

          <div class="nail-idea-item">
            <h3>30. Milky White Short Clean Nails</h3>
            <img class="blog-img" src="/assets/blog-1/30-milky-white-short-clean-nails.png" alt="Milky White Short Nails">
            <p>Short, milky white nails look super neat and polished. They give that fresh, clean aesthetic. Ever noticed how simple nails sometimes look the most expensive?</p>
          </div>
        </div>

        <div class="final-thoughts">
          <p><strong>So… how many did you already fall in love with? Be honest 😄</strong></p>
          <p>Summer 2026 nails are all about freedom—you can go bold, minimal, colorful, or mix everything together.</p>
          <p><strong>The only rule?</strong> Pick what feels like <em>you</em>.</p>
          <p>And if you change your mind next week… honestly, that's part of the fun.</p>
        </div>
    `
  },
  {
    "id": 2,
    "nailName": "38 Classy May Nails Ideas",
    "nailDescription": "Soft pastels, delicate details, and clean luxury vibes for the perfect transition from spring to summer.",
    "slug": generateSlug('38 Classy May Nails Ideas for Late Spring 2026'),
    "title": "38 Classy May Nails Ideas",
    "fullTitle": "38 Classy May Nails Ideas for Late Spring (2026)",
    "date": "May 20'",
    "badge": "🌸 Spring edit",
    "category": "~ SPRING / CLASSY / PASTEL",
    "imageUrl": "/assets/blog-2/1-pink-rhinestone-flower-nails-elegant.png",
    "cardImage": "/assets/blog-2/36-gold-accent-jewelry-match-nails.png",
    "content": `
      <p>You know that awkward moment when your winter nails feel too dark, but your summer vibe hasn't fully kicked in yet? Yeah… that's exactly where May sits. And honestly, it's the perfect excuse to experiment with classy, soft, slightly playful nail designs that don't scream—but definitely get noticed.</p>
      <p>I went through your inspo (and yes, I <em>actually</em> paid attention this time 😄), and these designs lean heavily into <strong>soft pinks, delicate details, tiny accents, and clean luxury vibes</strong>. So if you're aiming for that "effortlessly put-together" look… you're in the right place.</p>
      
      <div class="nail-ideas-list">
        <div class="nail-idea-item">
          <h3>1. Warm Nude Glow Nails</h3>
          <img class="blog-img" src="/assets/blog-2/34-warm-nude-glow-natural-nails.png" alt="Warm Nude Glow Nails">
          <p>Nude base with a slightly sun-kissed tone. Perfect for late spring lighting.</p>
        </div>

        <div class="nail-idea-item">
          <h3>2. Gold Jewelry Matching Nails</h3>
          <img class="blog-img" src="/assets/blog-2/36-gold-accent-jewelry-match-nails.png" alt="Gold Jewelry Matching Nails">
          <p>Designed to complement rings and accessories. Honestly, this combo always wins.</p>
        </div>

        <div class="nail-idea-item">
          <h3>3. Ultimate Clean Girl Nails</h3>
          <img class="blog-img" src="/assets/blog-2/38-neutral-glam-bold-elegant-nails.png" alt="Ultimate Clean Girl Nails">
          <p>Glossy, nude, perfectly shaped. No art, no extras—just perfection.</p>
        </div>

        <div class="nail-idea-item">
          <h3>4. Minimal White Accent Nails</h3>
          <img class="blog-img" src="/assets/blog-2/19-minimal-white-accent-modern-nails.png" alt="Minimal White Accent Nails">
          <p>White base with a single small detail—like a dot or line. Very modern.</p>
        </div>

        <div class="nail-idea-item">
          <h3>5. Nude Nails with Micro Art</h3>
          <img class="blog-img" src="/assets/blog-2/21-nude-nails-with-micro-art-design.png" alt="Nude Nails with Micro Art">
          <p>Tiny designs—almost invisible unless you look closely. Subtle, but super intentional.</p>
        </div>

        <div class="nail-idea-item">
          <h3>6. Almond Nude Nails with Shine</h3>
          <img class="blog-img" src="/assets/blog-2/16-almond-nude-glossy-clean-nails.png" alt="Almond Nude Nails with Shine">
          <p>Slightly elongated almond shape with a natural glossy finish. Clean, sharp, and elegant.</p>
        </div>

        <div class="nail-idea-item">
          <h3>7. Gold Ring-Inspired Nude Nails</h3>
          <img class="blog-img" src="/assets/blog-2/9-nude-nails-with-gold-jewelry-accent.png" alt="Gold Ring-Inspired Nude Nails">
          <p>Soft nude base paired with gold accents that match jewelry. Ever matched your nails to your rings? Game changer.</p>
        </div>

        <div class="nail-idea-item">
          <h3>8. White & Pink Subtle Art Nails</h3>
          <img class="blog-img" src="/assets/blog-2/5-white-pink-delicate-art-nails.png" alt="White & Pink Subtle Art Nails">
          <p>A mix of white and pink tones with soft detailing. It feels airy and fresh, like late spring mornings. Clean girl aesthetic, but upgraded.</p>
        </div>

        <div class="nail-idea-item">
          <h3>9. Pink & Blue French with Berry Accents</h3>
          <img class="blog-img" src="/assets/blog-2/3-pink-blue-french-berry-accent-nails.png" alt="Pink & Blue French with Berry Accents">
          <p>Now this one stands out. A mix of pink and blue French tips with tiny fruit-like details creates a playful but still polished look. It's cute—but not childish.</p>
        </div>

        <div class="nail-idea-item">
          <h3>10. Minimal Baby Pink with Micro Details</h3>
          <img class="blog-img" src="/assets/blog-2/2-soft-baby-pink-minimal-detail-nails.png" alt="Minimal Baby Pink with Micro Details">
          <p>This design keeps things super clean—light pink with tiny accents that almost feel hidden. I love how it looks simple at first glance, but then you notice the details. It's giving quiet luxury.</p>
        </div>

        <div class="nail-idea-item">
          <h3>11. Pink Nails with Rhinestone Flowers</h3>
          <img class="blog-img" src="/assets/blog-2/1-pink-rhinestone-flower-nails-elegant.png" alt="Pink Nails with Rhinestone Flowers">
          <p>Soft pink base with tiny crystal flowers? This one feels straight-up elegant. The sparkle stays subtle, but those little stones catch the light in the prettiest way. Ever wanted something feminine without going overboard? This nails it.</p>
        </div>

        <div class="nail-idea-item">
          <h3>12. Soft Pink Glossy Nails</h3>
          <img class="blog-img" src="/assets/blog-2/4-glossy-soft-pink-classy-nails.png" alt="Soft Pink Glossy Nails">
          <p>No crazy design here—just perfectly shaped, glossy pink nails. And honestly? That's the whole point. Sometimes simplicity wins.</p>
        </div>

        <div class="nail-idea-item">
          <h3>13. Peachy Neutral Minimal Nails</h3>
          <img class="blog-img" src="/assets/blog-2/6-peach-neutral-minimal-spring-nails.png" alt="Peachy Neutral Minimal Nails">
          <p>Warm peach tones with a glossy finish. These sit right between nude and color, which makes them insanely wearable.</p>
        </div>

        <div class="nail-idea-item">
          <h3>14. Peach Nails with Tiny Art Accents</h3>
          <img class="blog-img" src="/assets/blog-2/7-peach-nails-with-subtle-art-details.png" alt="Peach Nails with Tiny Art Accents">
          <p>Same base, but with small details—tiny lines or dots. It adds personality without ruining the softness.</p>
        </div>

        <div class="nail-idea-item">
          <h3>15. Peach & White Combo Nails</h3>
          <img class="blog-img" src="/assets/blog-2/8-peach-white-combination-classy-nails.png" alt="Peach & White Combo Nails">
          <p>A mix of peach and white designs across nails. This one feels curated but still relaxed.</p>
        </div>

        <div class="nail-idea-item">
          <h3>16. Nude Nails with Gold Foil Touches</h3>
          <img class="blog-img" src="/assets/blog-2/10-nude-gold-foil-luxury-nails.png" alt="Nude Nails with Gold Foil Touches">
          <p>Random gold foil pieces on a neutral base. Slightly messy—in a good way. It looks expensive without trying.</p>
        </div>

        <div class="nail-idea-item">
          <h3>17. Pastel Mix with Soft Shine</h3>
          <img class="blog-img" src="/assets/blog-2/11-pastel-mix-soft-glossy-nails.png" alt="Pastel Mix with Soft Shine">
          <p>Light pastel tones with a glossy finish. Each nail feels slightly different, but the overall vibe stays cohesive.</p>
        </div>

        <div class="nail-idea-item">
          <h3>18. Pink Ombre Fade Nails</h3>
          <img class="blog-img" src="/assets/blog-2/12-pink-ombre-fade-almond-nails.png" alt="Pink Ombre Fade Nails">
          <p>A soft gradient from natural to pink. It blends so smoothly, it almost looks airbrushed.</p>
        </div>

        <div class="nail-idea-item">
          <h3>19. Daisy Floral Accent Nails</h3>
          <img class="blog-img" src="/assets/blog-2/13-daisy-floral-spring-accent-nails.png" alt="Daisy Floral Accent Nails">
          <p>Tiny daisy details over pink or nude. It gives that spring garden energy—light, fresh, and super wearable.</p>
        </div>

        <div class="nail-idea-item">
          <h3>20. Beige & Pink Combo Nails</h3>
          <img class="blog-img" src="/assets/blog-2/14-beige-pink-soft-combo-nails.png" alt="Beige & Pink Combo Nails">
          <p>Neutral beige mixed with soft pink creates balance. Not too warm, not too cool—just right.</p>
        </div>

        <div class="nail-idea-item">
          <h3>21. Soft Glam Pink Nails (Influencer Style)</h3>
          <img class="blog-img" src="/assets/blog-2/15-soft-glam-pink-influencer-nails.png" alt="Soft Glam Pink Nails">
          <p>Polished pink with a slightly glam finish. These feel very "Instagram-ready," but still classy.</p>
        </div>

        <div class="nail-idea-item">
          <h3>22. Pink Nails with Tiny White Flowers</h3>
          <img class="blog-img" src="/assets/blog-2/17-pink-nails-with-tiny-white-flowers.png" alt="Pink Nails with Tiny White Flowers">
          <p>Small floral details scattered across nails. It's delicate and feminine without feeling busy.</p>
        </div>

        <div class="nail-idea-item">
          <h3>23. Long Pink Glitter Nails</h3>
          <img class="blog-img" src="/assets/blog-2/18-long-pink-glitter-shine-nails.png" alt="Long Pink Glitter Nails">
          <p>Soft pink base with glitter layered in. Not too loud, but definitely noticeable when light hits.</p>
        </div>

        <div class="nail-idea-item">
          <h3>24. Coral Pink Nails</h3>
          <img class="blog-img" src="/assets/blog-2/20-coral-pink-bright-spring-nails.png" alt="Coral Pink Nails">
          <p>A warmer pink shade that leans slightly coral. It instantly brightens your whole look.</p>
        </div>

        <div class="nail-idea-item">
          <h3>25. Soft French with a Twist</h3>
          <img class="blog-img" src="/assets/blog-2/22-soft-french-tip-modern-twist-nails.png" alt="Soft French with a Twist">
          <p>Classic French, but with softer lines or slight color variation. A small change, big difference.</p>
        </div>

        <div class="nail-idea-item">
          <h3>26. Pink with Green Contrast Nails</h3>
          <img class="blog-img" src="/assets/blog-2/23-pink-green-contrast-spring-nails.png" alt="Pink with Green Contrast Nails">
          <p>That unexpected combo actually works. The green pops just enough against the pink.</p>
        </div>

        <div class="nail-idea-item">
          <h3>27. Strawberry-Inspired Nails</h3>
          <img class="blog-img" src="/assets/blog-2/24-strawberry-inspired-cute-nails.png" alt="Strawberry-Inspired Nails">
          <p>Tiny fruit details—cute but surprisingly stylish. Ever thought fruit nails could look classy? Now you know.</p>
        </div>

        <div class="nail-idea-item">
          <h3>28. Clean White Square Nails</h3>
          <img class="blog-img" src="/assets/blog-2/25-clean-white-square-classy-nails.png" alt="Clean White Square Nails">
          <p>Pure white, sharp shape. Bold in the simplest way possible.</p>
        </div>

        <div class="nail-idea-item">
          <h3>29. Multi-Color Minimal Nails</h3>
          <img class="blog-img" src="/assets/blog-2/26-multicolor-minimal-soft-tone-nails.png" alt="Multi-Color Minimal Nails">
          <p>Different soft shades on each nail. It feels playful but still controlled.</p>
        </div>

        <div class="nail-idea-item">
          <h3>30. Nude & Gold Layered Nails</h3>
          <img class="blog-img" src="/assets/blog-2/27-nude-gold-layered-elegant-nails.png" alt="Nude & Gold Layered Nails">
          <p>Layered textures with gold accents. Slightly more detailed, but still elegant.</p>
        </div>

        <div class="nail-idea-item">
          <h3>31. Soft Pink with Face-Framing Pose Style</h3>
          <img class="blog-img" src="/assets/blog-2/28-soft-pink-selfie-aesthetic-nails.png" alt="Soft Pink Selfie Nails">
          <p>You know those nails that look good in every selfie? Yeah, these.</p>
        </div>

        <div class="nail-idea-item">
          <h3>32. Glossy Pink Everyday Nails</h3>
          <img class="blog-img" src="/assets/blog-2/29-glossy-everyday-pink-simple-nails.png" alt="Glossy Pink Everyday Nails">
          <p>Simple, wearable, and goes with literally everything. No stress choice.</p>
        </div>

        <div class="nail-idea-item">
          <h3>33. Soft Yellow & Pink Combo Nails</h3>
          <img class="blog-img" src="/assets/blog-2/30-yellow-pink-soft-spring-nails.png" alt="Soft Yellow & Pink Combo Nails">
          <p>Light yellow mixed with pink creates a soft spring palette. Fresh and underrated.</p>
        </div>

        <div class="nail-idea-item">
          <h3>34. White Nails with Tiny Black Details</h3>
          <img class="blog-img" src="/assets/blog-2/31-white-nails-with-black-minimal-details.png" alt="White Nails with Tiny Black Details">
          <p>Minimal contrast that adds edge without losing class.</p>
        </div>

        <div class="nail-idea-item">
          <h3>35. Pink & White Marble Nails</h3>
          <img class="blog-img" src="/assets/blog-2/32-pink-white-marble-effect-nails.png" alt="Pink & White Marble Nails">
          <p>Swirled marble effect in soft tones. Each nail looks slightly different—like mini art pieces.</p>
        </div>

        <div class="nail-idea-item">
          <h3>36. Classic White Almond Nails</h3>
          <img class="blog-img" src="/assets/blog-2/33-classic-white-almond-clean-nails.png" alt="Classic White Almond Nails">
          <p>Clean, sharp, and timeless. You can never go wrong here.</p>
        </div>

        <div class="nail-idea-item">
          <h3>37. Soft Pink Glam Nails</h3>
          <img class="blog-img" src="/assets/blog-2/35-soft-pink-glam-shiny-nails.png" alt="Soft Pink Glam Nails">
          <p>A bit more shine, a bit more polish. Still classy, just elevated.</p>
        </div>

        <div class="nail-idea-item">
          <h3>38. Peach Gloss Almond Nails</h3>
          <img class="blog-img" src="/assets/blog-2/37-peach-glossy-almond-classy-nails.png" alt="Peach Gloss Almond Nails">
          <p>Peach tone with a smooth almond shape. Soft, flattering, and super wearable.</p>
        </div>
      </div>

      <div class="final-thoughts">
        <p><strong>So… be honest—how many of these are already saved in your head? 😏</strong></p>
        <p>Late spring nails hit different because they sit right in that sweet spot between fresh and fun. You don't need neon chaos, and you don't want winter drama either. You just want something that feels <strong>put-together, soft, and a little addictive</strong>.</p>
        <p><strong>My advice?</strong> Pick one that matches your current mood—not your future Pinterest board. You can always switch next week anyway. That's the whole point.</p>
        <p>Now go ahead… choose your favorite and pretend you're not about to change it again in 10 days 🙂</p>
      </div>
    `
  },
  {
  id: 3,
  slug: generateSlug('24 Elegant Old Money Nails for Summer 2026'),
  title: '24 Elegant Old Money Nails',
  fullTitle: '24 Elegant Old Money Nails for Summer (2026)',
  date: 'June 20\'',
  badge: '💎 Luxury Edit',
  category: '~ OLD MONEY / LUXURY / MINIMAL',
  imageUrl: '/assets/blog-3/1-soft-pink-luxe-chest.png',
  cardImage: '/assets/blog-3/1-soft-pink-luxe-chest.png',
  nailName: '24 Elegant Old Money Nails',
  nailDescription: 'Soft pinks, creamy nudes, glossy finishes—quiet luxury that speaks volumes without saying a word.',
  content: `
    <p>Let’s be honest—<strong>old money nails don’t scream for attention… they quietly own it</strong>. Soft pinks, creamy nudes, glossy finishes—effortless, but undeniably expensive-looking.</p>
    <p>The secret? <strong>It’s not just the nails—it’s the styling, the details, the vibe</strong>. That’s why some nude nails look luxurious, while others fall flat.</p>
    <p>Here are 24 old money nail ideas that capture that understated, elegant energy.</p>

    <div class="nail-ideas-list">
      <div class="nail-idea-item">
        <h3>1. Soft Pink Luxe Chest Pose</h3>
        <img class="blog-img" src="/assets/blog-3/1-soft-pink-luxe-chest.png" alt="Soft Pink Luxe Chest Pose">
        <p>Soft pink glossy nails paired with delicate gold jewelry create a look that feels effortlessly refined and quietly luxurious. The relaxed chest pose adds a natural, almost candid touch, making the entire composition feel intimate rather than staged. This style captures the essence of old money beauty—nothing feels forced, yet everything looks perfectly put together. If you want nails that whisper elegance instead of shouting trends, this is exactly where you start.</p>
      </div>

      <div class="nail-idea-item">
        <h3>2. French Tip Shoulder Elegance</h3>
        <img class="blog-img" src="/assets/blog-3/2-french-tip-shoulder-elegance.png" alt="French Tip Shoulder Elegance">
        <p>Classic French tips rest gently against the shoulder, creating a composition that feels timeless and undeniably chic. The clean white tips contrast softly against warm skin tones, giving that polished, just-stepped-out-of-a-salon finish. There's a reason this style never goes out of fashion—it adapts to every outfit, every season, and still looks expensive without trying. Honestly, if old money had a uniform, this manicure would be part of it.</p>
      </div>

      <div class="nail-idea-item">
        <h3>3. Glossy Pink Layered Jewelry Look</h3>
        <img class="blog-img" src="/assets/blog-3/3-glossy-pink-layered-rings.png" alt="Glossy Pink Layered Jewelry Look">
        <p>Glossy pink nails combined with layered gold rings create a perfectly balanced visual between simplicity and richness. The shine of the nails catches the light just enough to draw attention, while the jewelry adds depth and character without overpowering the look. It feels curated, but not calculated—like someone who naturally understands style without needing to prove it. This is the kind of manicure that looks good from every angle, whether you notice it or not.</p>
      </div>

      <div class="nail-idea-item">
        <h3>4. Almond Nude Street Style</h3>
        <img class="blog-img" src="/assets/blog-3/4-almond-nude-street-style.png" alt="Almond Nude Street Style">
        <p>Almond-shaped nude nails photographed in natural light bring out a soft, polished finish that feels both relaxed and elevated. The street-style setting adds a touch of realism, proving that luxury doesn't have to live in perfect studio conditions. Instead, it thrives in everyday moments when details come together effortlessly. This look feels like someone who always looks put together, even on their most casual day.</p>
      </div>

      <div class="nail-idea-item">
        <h3>5. Minimal Dot Accent Nails</h3>
        <img class="blog-img" src="/assets/blog-3/5-minimal-dot-accent-nails.png" alt="Minimal Dot Accent Nails">
        <p>A neutral base paired with tiny dot accents creates a subtle design that adds personality without disrupting the clean aesthetic. The minimal detailing feels intentional, like a quiet nod to creativity while still respecting the boundaries of elegance. It's proof that you don't need bold patterns or loud colors to stand out. Sometimes, the smallest details make the strongest impression.</p>
      </div>

      <div class="nail-idea-item">
        <h3>6. Milky White Collarbone Pose</h3>
        <img class="blog-img" src="/assets/blog-3/6-milky-white-collarbone.png" alt="Milky White Collarbone Pose">
        <p>Milky white nails paired with soft skin tones create a fresh, almost ethereal look that feels effortlessly feminine. The collarbone pose adds a delicate, editorial touch, enhancing the overall softness of the composition. This style leans heavily into purity and simplicity, making it perfect for anyone who prefers a clean, polished finish. It's quiet, refined, and undeniably luxurious.</p>
      </div>

      <div class="nail-idea-item">
        <h3>7. Sleek Hair Touch Nude Nails</h3>
        <img class="blog-img" src="/assets/blog-3/7-sleek-hair-touch-nude.png" alt="Sleek Hair Touch Nude Nails">
        <p>A soft nude manicure captured mid hair-touch creates a moment that feels natural and unposed, yet visually striking. The movement adds life to the image, while the nails remain perfectly polished and understated. This balance between effortlessness and control defines the old money aesthetic. It's the kind of detail you notice without realizing why it looks so good.</p>
      </div>

      <div class="nail-idea-item">
        <h3>8. Cream Knit Neutral Nails</h3>
        <img class="blog-img" src="/assets/blog-3/8-cream-knit-neutral.png" alt="Cream Knit Neutral Nails">
        <p>Neutral nails paired with cozy knit textures create a warm, inviting look that still feels elevated and refined. The softness of the fabric contrasts beautifully with the clean manicure, adding depth and dimension to the overall composition. This style proves that luxury doesn't always mean formal—it can feel comfortable, relaxed, and still incredibly polished. Honestly, this is everyday elegance done right.</p>
      </div>

      <div class="nail-idea-item">
        <h3>9. Clean White Shirt Nails</h3>
        <img class="blog-img" src="/assets/blog-3/9-white-shirt-minimal-nails.png" alt="Clean White Shirt Nails">
        <p>A crisp white shirt combined with simple nude nails creates a look that feels effortlessly clean and sophisticated. The sharpness of the fabric enhances the softness of the manicure, resulting in a perfectly balanced aesthetic. It's minimal, timeless, and incredibly versatile. If you ever feel unsure about what to choose, this combination never fails.</p>
      </div>

      <div class="nail-idea-item">
        <h3>10. Black & Blush Contrast Nails</h3>
        <img class="blog-img" src="/assets/blog-3/10-black-blush-contrast.png" alt="Black & Blush Contrast Nails">
        <p>The contrast between soft blush tones and deep black polish creates a bold yet controlled visual statement. While it steps slightly outside the traditional old money palette, it maintains elegance through clean shapes and glossy finishes. This look feels confident and intentional, like someone who understands the rules and knows exactly when to bend them. It's daring—but in a refined way.</p>
      </div>

      <div class="nail-idea-item">
        <h3>11. Soft Pink with Accessories Grip</h3>
        <img class="blog-img" src="/assets/blog-3/11-soft-pink-accessory-grip.png" alt="Soft Pink with Accessories Grip">
        <p>Soft pink nails wrapped around everyday accessories create a candid yet polished look that feels effortlessly stylish. The grip adds a sense of movement and realism, while the manicure remains perfectly neat and glossy. It's the kind of detail that elevates even the simplest moment. Luxury, in this case, feels completely natural.</p>
      </div>

      <div class="nail-idea-item">
        <h3>12. Dark Gloss Statement Nails</h3>
        <img class="blog-img" src="/assets/blog-3/12-dark-gloss-statement.png" alt="Dark Gloss Statement Nails">
        <p>Deep, glossy tones paired with a sharp almond shape create a bold and confident manicure that still feels elegant. The richness of the color adds intensity, while the smooth finish keeps everything refined and controlled. This style stands out without looking excessive, which is exactly the balance you want. Strong, polished, and undeniably chic.</p>
      </div>

      <div class="nail-idea-item">
        <h3>13. Face Frame Nude Elegance</h3>
        <img class="blog-img" src="/assets/blog-3/13-face-frame-nude.png" alt="Face Frame Nude Elegance">
        <p>Nude nails gently framing the face create a soft, intimate composition that highlights natural beauty. The simplicity of the manicure allows the overall look to feel clean and effortless. It blends seamlessly into the aesthetic without drawing too much attention to itself. This is subtle luxury at its finest.</p>
      </div>

      <div class="nail-idea-item">
        <h3>14. Denim Contrast Soft Pink Nails</h3>
        <img class="blog-img" src="/assets/blog-3/14-denim-soft-pink.png" alt="Denim Contrast Soft Pink Nails">
        <p>Soft pink nails paired with denim textures create a relaxed yet polished look that feels modern and wearable. The contrast between casual fabric and refined nails adds depth without losing elegance. It's the perfect balance between everyday comfort and elevated style. Effortless, but still intentional.</p>
      </div>

      <div class="nail-idea-item">
        <h3>15. Crossed Hands Classic Nude</h3>
        <img class="blog-img" src="/assets/blog-3/15-crossed-hands-classic-nude.png" alt="Crossed Hands Classic Nude">
        <p>Layered hands with classic nude nails create a composed and balanced visual that feels timeless. The positioning adds structure, while the manicure remains clean and understated. Nothing feels excessive, yet everything looks carefully considered. This is old money energy in its purest form.</p>
      </div>

      <div class="nail-idea-item">
        <h3>16. Blazer Chic Neutral Nails</h3>
        <img class="blog-img" src="/assets/blog-3/16-blazer-chic-neutral.png" alt="Blazer Chic Neutral Nails">
        <p>Neutral nails styled with a structured blazer create a sharp, polished aesthetic that feels both professional and fashionable. The clean lines of the outfit enhance the simplicity of the manicure. Together, they create a look that feels powerful without being loud. It's confidence, but understated.</p>
      </div>

      <div class="nail-idea-item">
        <h3>17. Barely There Pink Gloss</h3>
        <img class="blog-img" src="/assets/blog-3/17-barely-there-pink-gloss.png" alt="Barely There Pink Gloss">
        <p>An ultra-light pink gloss creates a manicure that almost disappears into the natural nail, enhancing rather than transforming it. The result feels clean, fresh, and incredibly refined. This style relies entirely on precision and finish rather than color or design. It's minimalism at its most luxurious.</p>
      </div>

      <div class="nail-idea-item">
        <h3>18. Hidden Face Luxury Pose</h3>
        <img class="blog-img" src="/assets/blog-3/18-hidden-face-luxury.png" alt="Hidden Face Luxury Pose">
        <p>Soft pink nails partially covering the face create a mysterious, editorial look that feels effortlessly high-end. The pose adds intrigue, while the manicure keeps everything polished and cohesive. It's subtle, yet visually striking in a quiet way. Exactly what old money aesthetics aim for.</p>
      </div>

      <div class="nail-idea-item">
        <h3>19. Summer Glow Pink Nails</h3>
        <img class="blog-img" src="/assets/blog-3/19-summer-glow-pink.png" alt="Summer Glow Pink Nails">
        <p>Glossy pink nails captured in warm sunlight create a radiant, healthy glow that feels fresh and feminine. The light enhances the shine, making the manicure look even more polished. It's simple, but incredibly effective. This is summer elegance at its best.</p>
      </div>

      <div class="nail-idea-item">
        <h3>20. Minimal Gold Ring Nude Nails</h3>
        <img class="blog-img" src="/assets/blog-3/20-gold-ring-nude-minimal.png" alt="Minimal Gold Ring Nude Nails">
        <p>Short nude nails paired with delicate gold rings create a refined, understated look that feels effortlessly put together. The simplicity allows every detail to shine without overwhelming the composition. It's clean, balanced, and quietly luxurious. Nothing more, nothing less.</p>
      </div>

      <div class="nail-idea-item">
        <h3>21. Elegant Nude Nails with Designer Bag</h3>
        <img class="blog-img" src="/assets/blog-3/21-nude-nails-designer-bag-style.png" alt="Elegant Nude Nails with Designer Bag">
        <p>Neutral nails styled with a structured designer bag create a composition that feels unmistakably luxurious. The textures and tones work together to enhance the overall aesthetic without competing for attention. This look fully embodies the old money lifestyle—refined, effortless, and intentional.</p>
      </div>

      <div class="nail-idea-item">
        <h3>22. Deep Red Classic Luxury Nails</h3>
        <img class="blog-img" src="/assets/blog-3/22-deep-red-classic-luxury.png" alt="Deep Red Classic Luxury Nails">
        <p>Rich red nails paired with gold accents create a timeless and powerful look that never goes out of style. The deep tone adds sophistication, while the glossy finish keeps it polished and refined. It's bold, but always elegant. A true classic.</p>
      </div>

      <div class="nail-idea-item">
        <h3>23. Soft Bracelet Touch Nude Nails</h3>
        <img class="blog-img" src="/assets/blog-3/23-bracelet-touch-nude.png" alt="Soft Bracelet Touch Nude Nails">
        <p>Natural nude nails styled with delicate bracelet details create a soft, intimate composition that feels personal and refined. The subtle movement adds life to the image, while the manicure remains clean and polished. It's quiet luxury captured in a single moment.</p>
      </div>

      <div class="nail-idea-item">
        <h3>24. Soft Pink Tote Bag Elegance</h3>
        <img class="blog-img" src="/assets/blog-3/24-soft-pink-tote-bag.png" alt="Soft Pink Tote Bag Elegance">
        <p>Glossy almond-shaped soft pink nails styled against a neutral canvas tote create a perfect balance between casual and refined. The relaxed setting makes the look feel approachable, while the polished manicure elevates it instantly. It captures that off-duty elegance that feels effortless but still intentional. This is everyday luxury, done right.</p>
      </div>
    </div>

    <div class="final-thoughts">
      <p><strong>Here's the truth—anyone can do complicated nails, but not everyone can make simple look expensive.</strong></p>
      <p>That's the real flex.</p>
      <p>So next time you choose a nail design, ask yourself: <strong>"Does this feel effortless… or does it try too hard?"</strong></p>
      <p>If it feels effortless—you already understand the assignment 😉</p>
      <p>Now go ahead and pick your favorite. And remember—sometimes the quietest nails make the loudest statement.</p>
    </div>
  `
}
];