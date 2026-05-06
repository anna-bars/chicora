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
    cardImage: '/assets/blog-1-img.png',
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
    id: 2,
     nailName: '38 Classy May Nails Ideas',
    nailDescription: 'Soft pastels, delicate details, and clean luxury vibes for the perfect transition from spring to summer.',
    slug: generateSlug('38 Classy May Nails Ideas for Late Spring 2026'),
    title: '38 Classy May Nails Ideas',
    fullTitle: '38 Classy May Nails Ideas for Late Spring (2026)',
    date: 'May 20\'',
    badge: '🌸 Spring edit',
    category: '~ SPRING / CLASSY / PASTEL',
    imageUrl: '/assets/blog-2/1-pink-rhinestone-flower-nails-elegant.png',
    cardImage: '/assets/blog-2-img.png',
    content: `
      <p>You know that awkward moment when your winter nails feel too dark, but your summer vibe hasn’t fully kicked in yet? Yeah… that’s exactly where May sits. And honestly, it’s the perfect excuse to experiment with classy, soft, slightly playful nail designs that don’t scream—but definitely get noticed.</p>
      <p>I went through your inspo (and yes, I <em>actually</em> paid attention this time 😄), and these designs lean heavily into <strong>soft pinks, delicate details, tiny accents, and clean luxury vibes</strong>. So if you’re aiming for that “effortlessly put-together” look… you’re in the right place.</p>
      
      <div class="nail-ideas-list">
        <div class="nail-idea-item">
          <h3>1. Pink Nails with Rhinestone Flowers</h3>
          <img class="blog-img" src="/assets/blog-2/1-pink-rhinestone-flower-nails-elegant.png" alt="Pink Nails with Rhinestone Flowers">
          <p>Soft pink base with tiny crystal flowers? This one feels straight-up elegant. The sparkle stays subtle, but those little stones catch the light in the prettiest way. Ever wanted something feminine without going overboard? This nails it.</p>
        </div>

        <div class="nail-idea-item">
          <h3>2. Minimal Baby Pink with Micro Details</h3>
          <img class="blog-img" src="/assets/blog-2/2-soft-baby-pink-minimal-detail-nails.png" alt="Minimal Baby Pink with Micro Details">
          <p>This design keeps things super clean—light pink with tiny accents that almost feel hidden. I love how it looks simple at first glance, but then you notice the details. It's giving quiet luxury.</p>
        </div>

        <div class="nail-idea-item">
          <h3>3. Pink & Blue French with Berry Accents</h3>
          <img class="blog-img" src="/assets/blog-2/3-pink-blue-french-berry-accent-nails.png" alt="Pink & Blue French with Berry Accents">
          <p>Now this one stands out. A mix of pink and blue French tips with tiny fruit-like details creates a playful but still polished look. It's cute—but not childish.</p>
        </div>

        <div class="nail-idea-item">
          <h3>4. Soft Pink Glossy Nails</h3>
          <img class="blog-img" src="/assets/blog-2/4-glossy-soft-pink-classy-nails.png" alt="Soft Pink Glossy Nails">
          <p>No crazy design here—just perfectly shaped, glossy pink nails. And honestly? That's the whole point. Sometimes simplicity wins.</p>
        </div>

        <div class="nail-idea-item">
          <h3>5. White & Pink Subtle Art Nails</h3>
          <img class="blog-img" src="/assets/blog-2/5-white-pink-delicate-art-nails.png" alt="White & Pink Subtle Art Nails">
          <p>A mix of white and pink tones with soft detailing. It feels airy and fresh, like late spring mornings. Clean girl aesthetic, but upgraded.</p>
        </div>

        <div class="nail-idea-item">
          <h3>6. Peachy Neutral Minimal Nails</h3>
          <img class="blog-img" src="/assets/blog-2/6-peach-neutral-minimal-spring-nails.png" alt="Peachy Neutral Minimal Nails">
          <p>Warm peach tones with a glossy finish. These sit right between nude and color, which makes them insanely wearable.</p>
        </div>

        <div class="nail-idea-item">
          <h3>7. Peach Nails with Tiny Art Accents</h3>
          <img class="blog-img" src="/assets/blog-2/7-peach-nails-with-subtle-art-details.png" alt="Peach Nails with Tiny Art Accents">
          <p>Same base, but with small details—tiny lines or dots. It adds personality without ruining the softness.</p>
        </div>

        <div class="nail-idea-item">
          <h3>8. Peach & White Combo Nails</h3>
          <img class="blog-img" src="/assets/blog-2/8-peach-white-combination-classy-nails.png" alt="Peach & White Combo Nails">
          <p>A mix of peach and white designs across nails. This one feels curated but still relaxed.</p>
        </div>

        <div class="nail-idea-item">
          <h3>9. Gold Ring-Inspired Nude Nails</h3>
          <img class="blog-img" src="/assets/blog-2/9-nude-nails-with-gold-jewelry-accent.png" alt="Gold Ring-Inspired Nude Nails">
          <p>Soft nude base paired with gold accents that match jewelry. Ever matched your nails to your rings? Game changer.</p>
        </div>

        <div class="nail-idea-item">
          <h3>10. Nude Nails with Gold Foil Touches</h3>
          <img class="blog-img" src="/assets/blog-2/10-nude-gold-foil-luxury-nails.png" alt="Nude Nails with Gold Foil Touches">
          <p>Random gold foil pieces on a neutral base. Slightly messy—in a good way. It looks expensive without trying.</p>
        </div>

        <div class="nail-idea-item">
          <h3>11. Pastel Mix with Soft Shine</h3>
          <img class="blog-img" src="/assets/blog-2/11-pastel-mix-soft-glossy-nails.png" alt="Pastel Mix with Soft Shine">
          <p>Light pastel tones with a glossy finish. Each nail feels slightly different, but the overall vibe stays cohesive.</p>
        </div>

        <div class="nail-idea-item">
          <h3>12. Pink Ombre Fade Nails</h3>
          <img class="blog-img" src="/assets/blog-2/12-pink-ombre-fade-almond-nails.png" alt="Pink Ombre Fade Nails">
          <p>A soft gradient from natural to pink. It blends so smoothly, it almost looks airbrushed.</p>
        </div>

        <div class="nail-idea-item">
          <h3>13. Daisy Floral Accent Nails</h3>
          <img class="blog-img" src="/assets/blog-2/13-daisy-floral-spring-accent-nails.png" alt="Daisy Floral Accent Nails">
          <p>Tiny daisy details over pink or nude. It gives that spring garden energy—light, fresh, and super wearable.</p>
        </div>

        <div class="nail-idea-item">
          <h3>14. Beige & Pink Combo Nails</h3>
          <img class="blog-img" src="/assets/blog-2/14-beige-pink-soft-combo-nails.png" alt="Beige & Pink Combo Nails">
          <p>Neutral beige mixed with soft pink creates balance. Not too warm, not too cool—just right.</p>
        </div>

        <div class="nail-idea-item">
          <h3>15. Soft Glam Pink Nails (Influencer Style)</h3>
          <img class="blog-img" src="/assets/blog-2/15-soft-glam-pink-influencer-nails.png" alt="Soft Glam Pink Nails">
          <p>Polished pink with a slightly glam finish. These feel very "Instagram-ready," but still classy.</p>
        </div>

        <div class="nail-idea-item">
          <h3>16. Almond Nude Nails with Shine</h3>
          <img class="blog-img" src="/assets/blog-2/16-almond-nude-glossy-clean-nails.png" alt="Almond Nude Nails with Shine">
          <p>Slightly elongated almond shape with a natural glossy finish. Clean, sharp, and elegant.</p>
        </div>

        <div class="nail-idea-item">
          <h3>17. Pink Nails with Tiny White Flowers</h3>
          <img class="blog-img" src="/assets/blog-2/17-pink-nails-with-tiny-white-flowers.png" alt="Pink Nails with Tiny White Flowers">
          <p>Small floral details scattered across nails. It's delicate and feminine without feeling busy.</p>
        </div>

        <div class="nail-idea-item">
          <h3>18. Long Pink Glitter Nails</h3>
          <img class="blog-img" src="/assets/blog-2/18-long-pink-glitter-shine-nails.png" alt="Long Pink Glitter Nails">
          <p>Soft pink base with glitter layered in. Not too loud, but definitely noticeable when light hits.</p>
        </div>

        <div class="nail-idea-item">
          <h3>19. Minimal White Accent Nails</h3>
          <img class="blog-img" src="/assets/blog-2/19-minimal-white-accent-modern-nails.png" alt="Minimal White Accent Nails">
          <p>White base with a single small detail—like a dot or line. Very modern.</p>
        </div>

        <div class="nail-idea-item">
          <h3>20. Coral Pink Nails</h3>
          <img class="blog-img" src="/assets/blog-2/20-coral-pink-bright-spring-nails.png" alt="Coral Pink Nails">
          <p>A warmer pink shade that leans slightly coral. It instantly brightens your whole look.</p>
        </div>

        <div class="nail-idea-item">
          <h3>21. Nude Nails with Micro Art</h3>
          <img class="blog-img" src="/assets/blog-2/21-nude-nails-with-micro-art-design.png" alt="Nude Nails with Micro Art">
          <p>Tiny designs—almost invisible unless you look closely. Subtle, but super intentional.</p>
        </div>

        <div class="nail-idea-item">
          <h3>22. Soft French with a Twist</h3>
          <img class="blog-img" src="/assets/blog-2/22-soft-french-tip-modern-twist-nails.png" alt="Soft French with a Twist">
          <p>Classic French, but with softer lines or slight color variation. A small change, big difference.</p>
        </div>

        <div class="nail-idea-item">
          <h3>23. Pink with Green Contrast Nails</h3>
          <img class="blog-img" src="/assets/blog-2/23-pink-green-contrast-spring-nails.png" alt="Pink with Green Contrast Nails">
          <p>That unexpected combo actually works. The green pops just enough against the pink.</p>
        </div>

        <div class="nail-idea-item">
          <h3>24. Strawberry-Inspired Nails</h3>
          <img class="blog-img" src="/assets/blog-2/24-strawberry-inspired-cute-nails.png" alt="Strawberry-Inspired Nails">
          <p>Tiny fruit details—cute but surprisingly stylish. Ever thought fruit nails could look classy? Now you know.</p>
        </div>

        <div class="nail-idea-item">
          <h3>25. Clean White Square Nails</h3>
          <img class="blog-img" src="/assets/blog-2/25-clean-white-square-classy-nails.png" alt="Clean White Square Nails">
          <p>Pure white, sharp shape. Bold in the simplest way possible.</p>
        </div>

        <div class="nail-idea-item">
          <h3>26. Multi-Color Minimal Nails</h3>
          <img class="blog-img" src="/assets/blog-2/26-multicolor-minimal-soft-tone-nails.png" alt="Multi-Color Minimal Nails">
          <p>Different soft shades on each nail. It feels playful but still controlled.</p>
        </div>

        <div class="nail-idea-item">
          <h3>27. Nude & Gold Layered Nails</h3>
          <img class="blog-img" src="/assets/blog-2/27-nude-gold-layered-elegant-nails.png" alt="Nude & Gold Layered Nails">
          <p>Layered textures with gold accents. Slightly more detailed, but still elegant.</p>
        </div>

        <div class="nail-idea-item">
          <h3>28. Soft Pink with Face-Framing Pose Style</h3>
          <img class="blog-img" src="/assets/blog-2/28-soft-pink-selfie-aesthetic-nails.png" alt="Soft Pink Selfie Nails">
          <p>You know those nails that look good in every selfie? Yeah, these.</p>
        </div>

        <div class="nail-idea-item">
          <h3>29. Glossy Pink Everyday Nails</h3>
          <img class="blog-img" src="/assets/blog-2/29-glossy-everyday-pink-simple-nails.png" alt="Glossy Pink Everyday Nails">
          <p>Simple, wearable, and goes with literally everything. No stress choice.</p>
        </div>

        <div class="nail-idea-item">
          <h3>30. Soft Yellow & Pink Combo Nails</h3>
          <img class="blog-img" src="/assets/blog-2/30-yellow-pink-soft-spring-nails.png" alt="Soft Yellow & Pink Combo Nails">
          <p>Light yellow mixed with pink creates a soft spring palette. Fresh and underrated.</p>
        </div>

        <div class="nail-idea-item">
          <h3>31. White Nails with Tiny Black Details</h3>
          <img class="blog-img" src="/assets/blog-2/31-white-nails-with-black-minimal-details.png" alt="White Nails with Tiny Black Details">
          <p>Minimal contrast that adds edge without losing class.</p>
        </div>

        <div class="nail-idea-item">
          <h3>32. Pink & White Marble Nails</h3>
          <img class="blog-img" src="/assets/blog-2/32-pink-white-marble-effect-nails.png" alt="Pink & White Marble Nails">
          <p>Swirled marble effect in soft tones. Each nail looks slightly different—like mini art pieces.</p>
        </div>

        <div class="nail-idea-item">
          <h3>33. Classic White Almond Nails</h3>
          <img class="blog-img" src="/assets/blog-2/33-classic-white-almond-clean-nails.png" alt="Classic White Almond Nails">
          <p>Clean, sharp, and timeless. You can never go wrong here.</p>
        </div>

        <div class="nail-idea-item">
          <h3>34. Warm Nude Glow Nails</h3>
          <img class="blog-img" src="/assets/blog-2/34-warm-nude-glow-natural-nails.png" alt="Warm Nude Glow Nails">
          <p>Nude base with a slightly sun-kissed tone. Perfect for late spring lighting.</p>
        </div>

        <div class="nail-idea-item">
          <h3>35. Soft Pink Glam Nails</h3>
          <img class="blog-img" src="/assets/blog-2/35-soft-pink-glam-shiny-nails.png" alt="Soft Pink Glam Nails">
          <p>A bit more shine, a bit more polish. Still classy, just elevated.</p>
        </div>

        <div class="nail-idea-item">
          <h3>36. Gold Jewelry Matching Nails</h3>
          <img class="blog-img" src="/assets/blog-2/36-gold-accent-jewelry-match-nails.png" alt="Gold Jewelry Matching Nails">
          <p>Designed to complement rings and accessories. Honestly, this combo always wins.</p>
        </div>

        <div class="nail-idea-item">
          <h3>37. Peach Gloss Almond Nails</h3>
          <img class="blog-img" src="/assets/blog-2/37-peach-glossy-almond-classy-nails.png" alt="Peach Gloss Almond Nails">
          <p>Peach tone with a smooth almond shape. Soft, flattering, and super wearable.</p>
        </div>

        <div class="nail-idea-item">
          <h3>38. Ultimate Clean Girl Nails</h3>
          <img class="blog-img" src="/assets/blog-2/38-neutral-glam-bold-elegant-nails.png" alt="Ultimate Clean Girl Nails">
          <p>Glossy, nude, perfectly shaped. No art, no extras—just perfection.</p>
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
];