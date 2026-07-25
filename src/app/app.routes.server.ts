import { RenderMode, ServerRoute } from '@angular/ssr';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const supabase = createClient(
        environment.supabaseUrl,
        environment.supabaseAnonKey
      );

      const { data, error } = await supabase
        .from('blogs')
        .select('slug');

      if (error) {
        console.error('Prerender slug fetch failed:', error);
        return [];
      }

      return (data ?? []).map(blog => ({ slug: blog.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];