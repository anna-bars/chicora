// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOGS } from './data/blogs.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
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
    path: '**',
    renderMode: RenderMode.Prerender
  }
];