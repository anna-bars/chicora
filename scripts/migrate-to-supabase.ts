import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { BLOGS } from '../src/app/data/blogs.data';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

async function migrate() {
  console.log(`Found ${BLOGS.length} blogs`);

  for (const blog of BLOGS) {
    console.log(`Migrating: ${blog.slug}`);

    const { data: insertedBlog, error } = await supabase
      .from('blogs')
      .insert({
        slug: blog.slug,
        title: blog.title,
        full_title: blog.fullTitle,
        date: blog.date,
        badge: blog.badge ?? null,
        category: blog.category ?? null,
        image_url: blog.imageUrl,
        card_image: blog.cardImage ?? null,
        nail_name: blog.nailName ?? null,
        nail_description: blog.nailDescription ?? null,
        content: blog.content ?? null,
        final_thoughts: blog.finalThoughts ?? null,
      })
      .select()
      .single();

    if (error) {
      console.error('Blog failed:', blog.slug);
      console.error(error);
      continue;
    }

    // structured nail items
    if (blog.nailItems?.length) {
      for (const [index, item] of blog.nailItems.entries()) {

        const { data: insertedItem, error: itemError } = await supabase
          .from('nail_items')
          .insert({
            blog_id: insertedBlog.id,
            position: index,
            title: item.title,
            description: item.description,
          })
          .select()
          .single();

        if (itemError) {
          console.error('Item failed:', itemError);
          continue;
        }

        if (item.images?.length) {
          const images = item.images.map((url: string, imgIndex: number) => ({
            nail_item_id: insertedItem.id,
            image_url: url,
            position: imgIndex,
          }));

          const { error: imageError } = await supabase
            .from('nail_item_images')
            .insert(images);

          if (imageError) {
            console.error('Images failed:', imageError);
          }
        }
      }
    }

    console.log(`✅ Done: ${blog.slug}`);
  }

  console.log('🎉 Migration completed');
}

migrate();