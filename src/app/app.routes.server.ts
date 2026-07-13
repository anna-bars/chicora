// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOGS } from './data/blogs.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',  // ✅ Գլխավոր էջ (առանց slash-ի)
    renderMode: RenderMode.Prerender
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return BLOGS.map(blog => ({ slug: blog.slug }));
    }
  },
  {
    path: '**',  // Բոլոր մյուս էջերը
    renderMode: RenderMode.Prerender
  }
];