import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SiteCertificate } from '../../../../core/models/site-profile.model';

@Component({
  selector: 'app-certificate-card',
  standalone: true,
  templateUrl: './certificate-card.component.html',
  styleUrl: './certificate-card.component.scss'
})
export class CertificateCardComponent {
  @Input({ required: true }) certificate!: SiteCertificate;
  @Input() accent: 'green' | 'pink' = 'green';
  @Input() imagePosition = 'center';

  @Output() detailsRequested = new EventEmitter<HTMLElement>();

  requestDetails(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.detailsRequested.emit(event.currentTarget as HTMLElement);
  }
}
