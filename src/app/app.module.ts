// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';  // ← Համոզվեք, որ սա կա
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LayoutComponent  // ← BlogComponent-ը պետք է լինի declarations-ում
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // ← Սա պարտադիր է
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }