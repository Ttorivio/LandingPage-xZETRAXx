import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { SiteCertificate } from '../../../../core/models/site-profile.model';

@Component({
  selector: 'app-certificate-details-modal',
  standalone: true,
  templateUrl: './certificate-details-modal.component.html',
  styleUrl: './certificate-details-modal.component.scss'
})
export class CertificateDetailsModalComponent implements AfterViewInit {
  @Input({ required: true }) certificate!: SiteCertificate;
  @Input() accent: 'green' | 'pink' = 'green';
  @Output() closeRequested = new EventEmitter<void>();

  @ViewChild('closeButton') private closeButton?: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    window.setTimeout(() => this.closeButton?.nativeElement.focus());
  }

  close(): void {
    this.closeRequested.emit();
  }
}
