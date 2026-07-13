import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: 'blog/:slug', component: BlogComponent },
  { path: '**', redirectTo: '' }
];