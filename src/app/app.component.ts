import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private burgerListener: any;
  private closeListener: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Add event listeners after view init
    setTimeout(() => {
      this.initMobileMenu();
    });
  }

  initMobileMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.querySelector('.close-menu');

    if (burgerBtn && mobileMenu) {
      this.burgerListener = this.renderer.listen(burgerBtn, 'click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }

    if (closeBtn && mobileMenu) {
      this.closeListener = this.renderer.listen(closeBtn, 'click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }

  ngOnDestroy() {
    if (this.burgerListener) this.burgerListener();
    if (this.closeListener) this.closeListener();
    document.body.style.overflow = '';
  }
}