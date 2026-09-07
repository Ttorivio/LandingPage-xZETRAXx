import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { PORTFOLIO_PROJECTS } from '../../../../core/data/portfolio-projects.data';
import { RECOGNITIONS } from '../../../../core/data/recognitions.data';
import { SITE_PROFILE } from '../../../../core/data/site-profile.data';
import { PortfolioProject } from '../../../../core/models/portfolio-project.model';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly profile = SITE_PROFILE;
  readonly projects = PORTFOLIO_PROJECTS.filter((project) => project.featured);
  readonly recognitions = RECOGNITIONS;
  readonly activeProject = signal<PortfolioProject | null>(null);
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

  useProjectFallbackImage(event: Event, project: PortfolioProject): void {
    const image = event.target as HTMLImageElement;

    if (!project.fallbackImageUrl || image.dataset['fallbackApplied'] === 'true') {
      return;
    }

    image.dataset['fallbackApplied'] = 'true';
    image.src = project.fallbackImageUrl;
  }

  @HostListener('document:keydown.escape')
  closeVideoWithKeyboard(): void {
    this.closeVideo();
  }
}
