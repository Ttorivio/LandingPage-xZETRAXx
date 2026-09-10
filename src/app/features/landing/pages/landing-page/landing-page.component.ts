import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PORTFOLIO_PROJECTS } from '../../../../core/data/portfolio-projects.data';
import { SITE_PROFILE } from '../../../../core/data/site-profile.data';
import { PortfolioProject } from '../../../../core/models/portfolio-project.model';
import { SiteCertificate } from '../../../../core/models/site-profile.model';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { CertificateCardComponent } from '../../components/certificate-card/certificate-card.component';
import { CertificateDetailsModalComponent } from '../../components/certificate-details-modal/certificate-details-modal.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CertificateCardComponent,
    CertificateDetailsModalComponent,
    RevealOnScrollDirective
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly document = inject(DOCUMENT);
  private previousBodyOverflow = '';
  private certificateTrigger?: HTMLElement;

  readonly profile = SITE_PROFILE;
  readonly projects = PORTFOLIO_PROJECTS.filter((project) => project.featured);
  readonly activeProject = signal<PortfolioProject | null>(null);
  readonly activeCertificate = signal<SiteCertificate | null>(null);
  readonly activeCertificateAccent = signal<'green' | 'pink'>('green');
  readonly certificateImagePositions = [
    'center 58%',
    'center 48%',
    'center 46%',
    'center 42%'
  ];
  readonly activeEmbedUrl = computed<SafeResourceUrl | null>(() => {
    const project = this.activeProject();

    if (!project?.embedUrl) {
      return null;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `${project.embedUrl}?autoplay=1&rel=0&modestbranding=1`
    );
  });

  openVideo(project: PortfolioProject): void {
    if (!project.embedUrl) {
      return;
    }

    this.activeProject.set(project);
  }

  closeVideo(): void {
    this.activeProject.set(null);
  }

  openCertificate(
    certificate: SiteCertificate,
    trigger: HTMLElement,
    accent: 'green' | 'pink'
  ): void {
    this.certificateTrigger = trigger;
    this.previousBodyOverflow = this.document.body.style.overflow;
    this.document.body.style.overflow = 'hidden';
    this.activeCertificateAccent.set(accent);
    this.activeCertificate.set(certificate);
  }

  closeCertificate(): void {
    this.activeCertificate.set(null);
    this.activeCertificateAccent.set('green');
    this.document.body.style.overflow = this.previousBodyOverflow;
    this.certificateTrigger?.focus();
    this.certificateTrigger = undefined;
  }

  previewDocument(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${url}#zoom=page-width`);
  }

  useProjectFallbackImage(event: Event, project: PortfolioProject): void {
    const image = event.target as HTMLImageElement;

    if (!project.fallbackImageUrl || image.dataset['fallbackApplied'] === 'true') {
      return;
    }

    image.dataset['fallbackApplied'] = 'true';
    image.src = project.fallbackImageUrl;
  }

  @HostListener('document:keydown.escape')
  closeActiveModalWithKeyboard(): void {
    if (this.activeCertificate()) {
      this.closeCertificate();
      return;
    }

    this.closeVideo();
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = this.previousBodyOverflow;
  }
}
