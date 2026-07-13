import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOGS } from './data/blogs.data'; // կամ Supabase query, ապագայում

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return BLOGS.map(blog => ({ slug: blog.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];