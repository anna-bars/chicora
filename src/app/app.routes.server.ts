// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
import { BLOGS } from './data/blogs.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Այստեղ BLOGS-ը ֆիքսված արրեյ է, որը հասանելի է build-ի ժամանակ
      return BLOGS.map(blog => ({ slug: blog.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender // Բոլոր մյուս էջերը նույնպես prerender
  }
];