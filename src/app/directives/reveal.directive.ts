import { Directive, ElementRef, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('reveal');
    
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('visible');
            this.observer?.unobserve(this.el.nativeElement);
          }
        },
        { threshold: 0.12 }
      );
      this.observer.observe(this.el.nativeElement);
    } else {
      // If server-side rendering, make it visible immediately
      this.el.nativeElement.classList.add('visible');
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
