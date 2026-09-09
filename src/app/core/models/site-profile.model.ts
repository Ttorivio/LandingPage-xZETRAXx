import { ContentStatus } from './content-status.model';

export interface SiteService {
  title: string;
  description: string;
}

export interface SiteCertificate {
  title: string;
  description: string;
  shortDescription: string;
  highlights: string;
  imageUrl: string;
  imageAlt: string;
}

export interface SiteProfile {
  brandName: string;
  channelName: string;
  fullName: string;
  profession: string;
  location: string;
  availability: string;
  hero: {
    eyebrow: string;
    subtitle: string;
    presentation: string;
    profileImageUrl: string;
    profileImageAlt: string;
  };
  biography: readonly string[];
  specialties: readonly string[];
  servicesIntro: string;
  services: readonly SiteService[];
  contact: {
    email: string;
    whatsappDisplay: string;
    whatsappUrl: string;
    youtubeUrl: string;
    youtubeVideosUrl: string;
    linkedinUrl?: string;
  };
  documents: {
    cvUrl?: string;
    cvDownloadName?: string;
    certificates: readonly SiteCertificate[];
  };
}

export interface Recognition {
  title: string;
  context: string;
  details: readonly string[];
  status: ContentStatus;
}
