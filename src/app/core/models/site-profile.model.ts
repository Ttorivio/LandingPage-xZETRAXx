import { ContentStatus } from './content-status.model';

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
  };
}

export interface Recognition {
  title: string;
  context: string;
  details: readonly string[];
  status: ContentStatus;
}
