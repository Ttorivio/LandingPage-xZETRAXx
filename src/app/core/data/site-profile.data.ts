import { SiteProfile } from '../models/site-profile.model';

const FEISAL_CERTIFICATE = {
  title: 'Selecci\u00f3n oficial \u2014 13.\u00aa Muestra FEISAL',
  description:
    'Particip\u00e9 en el cortometraje Salvia, seleccionado para representar a Diakonia\u2013Universidad Cat\u00f3lica Boliviana \u201cSan Pablo\u201d en la 13.\u00aa Muestra FEISAL 2024\u20132025. Esta muestra re\u00fane producciones de carreras audiovisuales de distintos pa\u00edses de Am\u00e9rica Latina y promueve la circulaci\u00f3n de nuevas obras y el intercambio entre instituciones de formaci\u00f3n cinematogr\u00e1fica de la regi\u00f3n.',
  shortDescription:
    'Particip\u00e9 en Salvia, seleccionado para representar a Diakonia\u2013Universidad Cat\u00f3lica Boliviana \u201cSan Pablo\u201d en la 13.\u00aa Muestra FEISAL, un espacio de exhibici\u00f3n e intercambio que re\u00fane producciones audiovisuales estudiantiles de Am\u00e9rica Latina.',
  highlights: 'SALVIA \u00b7 2024\u20132025 \u00b7 REPRESENTACI\u00d3N INSTITUCIONAL',
  imageUrl: 'images/certificadoFEISAL.jpg',
  imageAlt: 'Certificado de selecci\u00f3n de Salvia para la 13.\u00aa Muestra FEISAL 2024\u20132025.',
  documentUrl: 'images/certificadoFEISAL.jpg'
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
  'Hola, Sebastián. Vi tu portafolio y quiero contarte una idea para contenido digital.'
);

const THESIS_CERTIFICATE = {
  title: 'Tesis de grado con calificaci\u00f3n m\u00e1xima',
  description:
    'Defend\u00ed mi tesis de grado titulada El lenguaje de la animaci\u00f3n como narrativa expresiva: un an\u00e1lisis de los recursos audiovisuales en Demon Slayer (2019\u20132025). El tribunal de Diakonia\u2013Universidad Cat\u00f3lica Boliviana \u201cSan Pablo\u201d aprob\u00f3 mi trabajo por unanimidad con una calificaci\u00f3n de 100/100, destacando la investigaci\u00f3n realizada y la aplicaci\u00f3n de la teor\u00eda en sus resultados.',
  shortDescription:
    'Mi tesis sobre la animaci\u00f3n como recurso narrativo en Demon Slayer fue aprobada por unanimidad con una calificaci\u00f3n de 100/100, destacando la solidez de la investigaci\u00f3n y mi aplicaci\u00f3n del an\u00e1lisis audiovisual.',
  highlights: 'LICENCIATURA EN COMUNICACI\u00d3N AUDIOVISUAL \u00b7 DIAKONIA\u2013UCB \u00b7 2026',
  imageUrl: 'images/acta%20de%20defensa%20de%20tesis%20-%20analisis%20de%20demon%20slayer.png',
  imageAlt: 'Vista previa del acta de defensa de tesis con calificaci\u00f3n 100/100.',
  documentUrl: 'documents/Acta%20de%20la%20Defensa%20de%20Tesis%20100%20JS.pdf',
};

const PODCAST_CERTIFICATE = {
  title: 'Ganador a Mejor Podcast',
  description:
    'Fui reconocido como ganador en la categor\u00eda Mejor Podcast por la producci\u00f3n Empatizando, durante el VII Festival de Producci\u00f3n Audiovisual Universitaria de Diakonia. El reconocimiento destaca mi trabajo en la creaci\u00f3n y desarrollo de contenidos sonoros dentro del \u00e1mbito acad\u00e9mico audiovisual.',
  shortDescription:
    'Fui reconocido por Empatizando en el VII Festival de Producci\u00f3n Audiovisual Universitaria de Diakonia.',
  highlights: '\u201cEMPATIZANDO\u201d \u00b7 VII FESTIVAL DE PRODUCCI\u00d3N AUDIOVISUAL UNIVERSITARIA \u00b7 2023',
  imageUrl: 'images/premio%20a%20mejor%20podcast-empatizando.png',
  imageAlt: 'Vista previa del certificado de Mejor Podcast por Empatizando.',
  documentUrl: 'documents/DIAKONIA.pdf',
};

const MAGAZINE_CERTIFICATE = {
  title: 'Ganador a Mejor Revista Informativa',
  description:
    'Obtuve el reconocimiento a Mejor Revista Informativa por la producci\u00f3n La hora del Chango, presentada en el VII Festival de Producci\u00f3n Audiovisual Universitaria de Diakonia. Este logro reconoce mi participaci\u00f3n en el desarrollo de una propuesta informativa concebida desde el lenguaje y la producci\u00f3n audiovisual.',
  shortDescription:
    'Obtuve el reconocimiento por La hora del Chango en el VII Festival de Producci\u00f3n Audiovisual Universitaria de Diakonia.',
  highlights: '\u201cLA HORA DEL CHANGO\u201d \u00b7 VII FESTIVAL DE PRODUCCI\u00d3N AUDIOVISUAL UNIVERSITARIA \u00b7 2023',
  imageUrl: 'images/mejor%20revista%20informariva-%20la%20hora%20del%20chango.png',
  imageAlt: 'Vista previa del certificado de Mejor Revista Informativa por La hora del Chango.',
  documentUrl: 'documents/UCB%20COMUNICACIO%CC%81N.pdf',
};

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
    profileImageUrl: '/images/zetrax-profile.jpg',
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
    youtubeVideosUrl: 'https://www.youtube.com/@xZETRAXx/videos',
    tiktokUrl: 'https://www.tiktok.com/@xzetraxx',
    instagramUrl: 'https://www.instagram.com/xzetraxx/'
  },
  documents: {
    cvUrl: 'documents/CV%20ATS%20Juan%20Sebastian%20Peredo%20Molina%20V2%20(1).pdf',
    cvDownloadName: 'CV Juan Sebastian Peredo Molina.pdf',
    certificates: [THESIS_CERTIFICATE, PODCAST_CERTIFICATE, MAGAZINE_CERTIFICATE, FEISAL_CERTIFICATE], /*
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
