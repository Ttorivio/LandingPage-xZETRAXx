import { SiteProfile } from '../models/site-profile.model';

const whatsappMessage = encodeURIComponent(
  'Hola, Sebastián. Vi tu portfolio y me gustaría conversar sobre un proyecto audiovisual.'
);

export const SITE_PROFILE: SiteProfile = {
  brandName: 'xZETRAXx',
  channelName: 'ZETRAX',
  fullName: 'Juan Sebastián Peredo Molina',
  profession: 'Guionista y editor audiovisual',
  location: 'Santa Cruz, Bolivia',
  availability: 'Disponible para proyectos remotos e internacionales',
  hero: {
    eyebrow: 'Guionista · Editor audiovisual',
    subtitle: 'Historias pensadas para convertirse en imágenes.',
    presentation:
      'Soy Juan Sebastián Peredo Molina, licenciado en Comunicación Audiovisual, guionista y editor de video radicado en Santa Cruz, Bolivia. Desarrollo proyectos audiovisuales y colaboro de manera remota con equipos, marcas y productoras.',
    profileImageUrl: 'images/zetrax-profile.jpg',
    profileImageAlt: 'Imagen de perfil del canal ZETRAX, identidad visual de xZETRAXx.'
  },
  contact: {
    email: 'sebas.23.peredo@gmail.com',
    whatsappDisplay: '+591 60976052',
    whatsappUrl: `https://wa.me/59160976052?text=${whatsappMessage}`,
    youtubeUrl: 'https://www.youtube.com/@xZETRAXx',
    youtubeVideosUrl: 'https://www.youtube.com/@xZETRAXx/videos'
  },
  documents: {}
};
