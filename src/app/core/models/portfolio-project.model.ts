import { ContentStatus } from './content-status.model';

export interface PortfolioProject {
  id: string;
  title: string;
  type: string;
  year: number;
  duration?: string;
  description: string;
  roles: readonly string[];
  imageUrl: string;
  fallbackImageUrl?: string;
  imageAlt: string;
  videoUrl?: string;
  embedUrl?: string;
  scriptUrl?: string;
  featured: boolean;
  status: ContentStatus;
}
