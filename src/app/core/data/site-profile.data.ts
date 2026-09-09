import { SiteProfile } from '../models/site-profile.model';

const FEISAL_CERTIFICATE = {
  title: 'Selecci\u00f3n oficial \u2014 13.\u00aa Muestra FEISAL',
  description:
    'El cortometraje Salvia, con participaci\u00f3n de Sebasti\u00e1n Peredo Molina, fue seleccionado para representar a Diakonia\u2013Universidad Cat\u00f3lica Boliviana \u201cSan Pablo\u201d en la 13.\u00aa Muestra FEISAL 2024\u20132025. Esta muestra re\u00fane producciones de carreras audiovisuales de distintos pa\u00edses de Am\u00e9rica Latina y promueve la circulaci\u00f3n de nuevas obras y el intercambio entre instituciones de formaci\u00f3n cinematogr\u00e1fica de la regi\u00f3n.',
  shortDescription:
    'Salvia fue seleccionado para representar a Diakonia\u2013Universidad Cat\u00f3lica Boliviana \u201cSan Pablo\u201d en la 13.\u00aa Muestra FEISAL, un espacio de exhibici\u00f3n e intercambio que re\u00fane producciones audiovisuales estudiantiles de Am\u00e9rica Latina.',
  highlights: 'SALVIA \u00b7 2024\u20132025 \u00b7 REPRESENTACI\u00d3N INSTITUCIONAL',
  imageUrl: 'images/certificadoFEISAL.jpg',
  imageAlt: 'Certificado de selecci\u00f3n de Salvia para la 13.\u00aa Muestra FEISAL 2024\u20132025.'
};

const SAMPLE_CERTIFICATE = {
  title: 'Muestra — certificación futura',
  description:
    'Este contenido es un ejemplo visual con datos inventados para mostrar cómo se vería una segunda certificación junto a la selección FEISAL.',
  shortDescription:
    'Tarjeta de ejemplo para una futura certificación o reconocimiento profesional.',
  highlights: 'MUESTRA · DATOS DE PRUEBA · NO OFICIAL',
  imageUrl: 'images/certificadoFEISAL.jpg',
  imageAlt: 'Imagen provisional usada para mostrar una futura tarjeta de certificación.'
};

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
    cvDownloadName: 'CV Juan Sebastian Peredo Molina.pdf',
    certificates: [FEISAL_CERTIFICATE, SAMPLE_CERTIFICATE], /*
      {
        title: 'SelecciÃ³n oficial â€” 13.Âª Muestra FEISAL',
        description:
          'El cortometraje Salvia, con participaciÃ³n de SebastiÃ¡n Peredo Molina, fue seleccionado para representar a Diakoniaâ€“Universidad CatÃ³lica Boliviana “San Pablo” en la 13.Âª Muestra FEISAL 2024â€“2025. Esta muestra reÃºne producciones de carreras audiovisuales de distintos paÃ­ses de AmÃ©rica Latina y promueve la circulaciÃ³n de nuevas obras y el intercambio entre instituciones de formaciÃ³n cinematogrÃ¡fica de la regiÃ³n.',
        shortDescription:
          'Salvia fue seleccionado para representar a Diakoniaâ€“Universidad CatÃ³lica Boliviana “San Pablo” en la 13.Âª Muestra FEISAL, un espacio de exhibiciÃ³n e intercambio que reÃºne producciones audiovisuales estudiantiles de AmÃ©rica Latina.',
        highlights: 'SALVIA Â· 2024â€“2025 Â· REPRESENTACIÃ“N INSTITUCIONAL',
        imageUrl: 'images/certificadoFEISAL.jpg',
        imageAlt: 'Certificado de selecciÃ³n de Salvia para la 13.Âª Muestra FEISAL 2024â€“2025.'
      }
    ] */
  }
};
