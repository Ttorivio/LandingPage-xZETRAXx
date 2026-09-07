import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
  host: {
    class: 'reveal-on-scroll'
  }
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() appRevealOnScroll = '0ms';

  private observer?: IntersectionObserver;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
    private readonly zone: NgZone,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    const delay = this.appRevealOnScroll || '0ms';

    this.renderer.setStyle(element, '--reveal-delay', delay);

    if (!isPlatformBrowser(this.platformId) || this.shouldSkipAnimation()) {
      this.renderer.addClass(element, 'is-visible');
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }

            this.renderer.addClass(element, 'is-visible');
            this.observer?.unobserve(entry.target);
          }
        },
        {
          rootMargin: '0px 0px -8% 0px',
          threshold: 0.16
        }
      );

      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private shouldSkipAnimation(): boolean {
    return (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }
}
