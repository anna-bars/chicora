import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Blog } from '../data/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseAnonKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        }
      }
    );
  }
async getBlogsLight(): Promise<Blog[]> {

  const { data, error } = await this.supabase
    .from('blogs')
    .select('id, slug, title, full_title, date, badge, category, image_url, card_image, nail_name, nail_description')
    .order('id');

  if (error) {
    throw error;
  }

  return (data ?? []).map(blog => ({
    id: blog.id,
    slug: blog.slug,
    title: blog.title,
    fullTitle: blog.full_title,
    date: blog.date,
    badge: blog.badge,
    category: blog.category,
    imageUrl: blog.image_url,
    cardImage: blog.card_image,
    nailName: blog.nail_name,
    nailDescription: blog.nail_description,
    content: undefined,
    finalThoughts: undefined,
    nailItems: []
  }));
}
  async getBlogs(): Promise<Blog[]> {

    const { data, error } = await this.supabase
      .from('blogs')
      .select(`
        *,
        nail_items (
          *,
          nail_item_images (*)
        )
      `)
      .order('id')
      .order('position', {
        foreignTable: 'nail_items'
      });

    if (error) {
      throw error;
    }

    return (data ?? []).map(blog => ({
      id: blog.id,
      slug: blog.slug,
      title: blog.title,
      fullTitle: blog.full_title,
      date: blog.date,
      badge: blog.badge,
      category: blog.category,
      imageUrl: blog.image_url,
      cardImage: blog.card_image,
      nailName: blog.nail_name,
      nailDescription: blog.nail_description,
      content: blog.content,
      finalThoughts: blog.final_thoughts,

      nailItems: (blog.nail_items ?? [])
        .sort((a: any, b: any) => a.position - b.position)
        .map((item: any) => ({
          title: item.title,
          description: item.description,
          images: (item.nail_item_images ?? [])
            .sort((a: any, b: any) => a.position - b.position)
            .map((img: any) => img.image_url)
        }))
    }));

  }

  async getBlog(slug: string): Promise<Blog | null> {

  const { data, error } = await this.supabase
    .from('blogs')
    .select(`
      *,
      nail_items(
        *,
        nail_item_images(*)
      )
    `)
    .eq('slug', slug)
    .single();

  if (error || !data) {
    return null;
  }

  return {
    id: data.id,
    slug: data.slug,
    title: data.title,
    fullTitle: data.full_title,
    date: data.date,
    badge: data.badge,
    category: data.category,
    imageUrl: data.image_url,
    cardImage: data.card_image,
    nailName: data.nail_name,
    nailDescription: data.nail_description,
    content: data.content,
    finalThoughts: data.final_thoughts,

    nailItems: (data.nail_items ?? [])
      .sort((a: any, b: any) => a.position - b.position)
      .map((item: any) => ({
        title: item.title,
        description: item.description,
        images: (item.nail_item_images ?? [])
          .sort((a: any, b: any) => a.position - b.position)
          .map((img: any) => img.image_url)
      }))
  };
}
}