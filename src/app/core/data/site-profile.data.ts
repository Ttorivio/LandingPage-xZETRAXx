import { SiteProfile } from '../models/site-profile.model';

const whatsappMessage = encodeURIComponent(
  'Hola, Sebastián. Vi tu portfolio y quiero contarte una idea para contenido digital.'
);

export const SITE_PROFILE: SiteProfile = {
  brandName: 'xZETRAXx',
  channelName: 'ZETRAX',
  fullName: 'Juan Sebastián Peredo Molina',
  profession: 'Guionista y editor para contenido digital',
  location: 'Santa Cruz, Bolivia',
  availability: 'Disponible para proyectos remotos e internacionales',
  hero: {
    eyebrow: 'GUION · EDICIÓN · CONTENIDO DIGITAL',
    subtitle: 'Ideas, guiones y edición para contenido que conecta.',
    presentation:
      'Soy Juan Sebastián Peredo Molina, licenciado en Comunicación Audiovisual y creador de xZETRAXx. Desarrollo ideas, estructuro guiones y edito contenido para YouTube, TikTok, Shorts y Reels.',
    profileImageUrl: 'images/zetrax-profile.jpg',
    profileImageAlt: 'Imagen de perfil del canal ZETRAX, identidad visual de xZETRAXx.'
  },
  biography: [
    'Soy Juan Sebastián Peredo Molina, licenciado en Comunicación Audiovisual por la Universidad Católica Boliviana y creador de xZETRAXx.',
    'Trabajo en el desarrollo de ideas, la estructura de guiones y la edición de video para plataformas digitales. Mi enfoque está dirigido especialmente a creadores de YouTube, TikTok, Instagram Reels y YouTube Shorts que necesitan transformar una idea inicial en una pieza audiovisual clara, dinámica y con identidad propia.',
    'No me limito a un único género: adapto la estructura, el ritmo y la edición a las necesidades de cada contenido. También trabajo la musicalización como parte de la construcción narrativa y emocional de cada video.'
  ],
  specialties: [
    'Desarrollo de ideas',
    'Guiones para YouTube',
    'TikTok, Shorts y Reels',
    'Edición de video',
    'Musicalización',
    'Colaboración remota'
  ],
  servicesIntro:
    'Servicios pensados para creadores que necesitan desarrollar una idea, ordenar su mensaje y convertirlo en contenido audiovisual listo para publicar.',
  services: [
    {
      title: 'Desarrollo de ideas',
      description: 'Transformo conceptos iniciales en propuestas claras y preparadas para convertirse en contenido.'
    },
    {
      title: 'Guiones para contenido digital',
      description:
        'Estructuro y escribo guiones para YouTube, TikTok, Shorts y Reels, adaptados al formato y a la audiencia.'
    },
    {
      title: 'Edición de video',
      description: 'Construyo ritmo, continuidad e identidad visual para contenidos largos y formatos breves.'
    },
    {
      title: 'Musicalización',
      description: 'Integro música y recursos sonoros para acompañar la intención y el ritmo de cada pieza.'
    }
  ],
  contact: {
    email: 'sebas.23.peredo@gmail.com',
    whatsappDisplay: '+591 60976052',
    whatsappUrl: `https://wa.me/59160976052?text=${whatsappMessage}`,
    youtubeUrl: 'https://www.youtube.com/@xZETRAXx',
    youtubeVideosUrl: 'https://www.youtube.com/@xZETRAXx/videos'
  },
  documents: {
    cvUrl: 'documents/CV%20ATS%20Juan%20Sebastian%20Peredo%20Molina%20V2%20(1).pdf',
    cvDownloadName: 'CV Juan Sebastian Peredo Molina.pdf'
  }
};
