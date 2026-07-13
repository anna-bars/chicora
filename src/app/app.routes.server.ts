// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOGS } from './data/blogs.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Build-ի ժամանակ բոլոր բլոգների համար HTML է ստեղծվում
      return BLOGS.map(blog => ({ slug: blog.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender // Գլխավոր էջը և մյուս էջերը
  }
];