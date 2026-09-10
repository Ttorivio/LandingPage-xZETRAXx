import { PortfolioProject } from '../models/portfolio-project.model';

export const PORTFOLIO_PROJECTS: readonly PortfolioProject[] = [
  {
    id: 'un-viejo-recuerdo',
    title: 'Un viejo recuerdo',
    type: 'Proyecto audiovisual',
    year: 2026,
    duration: '4:31',
    description: 'Pieza audiovisual publicada en mi canal ZETRAX, disponible como referencia inicial del portfolio.',
    roles: [],
    imageUrl: 'https://i.ytimg.com/vi/aaxMYylHGPM/maxresdefault.jpg',
    fallbackImageUrl: 'https://i.ytimg.com/vi/aaxMYylHGPM/hqdefault.jpg',
    imageAlt: 'Miniatura del proyecto Un viejo recuerdo publicado en el canal ZETRAX.',
    videoUrl: 'https://www.youtube.com/watch?v=aaxMYylHGPM',
    embedUrl: 'https://www.youtube.com/embed/aaxMYylHGPM',
    featured: true,
    status: 'draft'
  },
  {
    id: 'corto-motivacional-con-harb',
    title: 'Corto Motivacional con Harb',
    type: 'Cortometraje motivacional',
    year: 2026,
    duration: '4:58',
    description: 'Pieza audiovisual publicada en mi canal ZETRAX, disponible como referencia inicial del portfolio.',
    roles: [],
    imageUrl: 'https://i.ytimg.com/vi/o1juJkm0UcY/maxresdefault.jpg',
    fallbackImageUrl: 'https://i.ytimg.com/vi/o1juJkm0UcY/hqdefault.jpg',
    imageAlt: 'Miniatura del proyecto Corto Motivacional con Harb publicado en el canal ZETRAX.',
    videoUrl: 'https://www.youtube.com/watch?v=o1juJkm0UcY',
    embedUrl: 'https://www.youtube.com/embed/o1juJkm0UcY',
    featured: true,
    status: 'draft'
  }
];
