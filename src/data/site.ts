export type Pillar = {
  title: string;
  description: string;
};

export type ServiceArea = {
  title: string;
  detail: string;
};

export type MethodStep = {
  step: string;
  title: string;
  detail: string;
};

export type DirectorProfile = {
  name: string;
  role: string;
  focus: string;
  highlights: string[];
};

export type TeamMember = {
  name: string;
  role: string;
};

export type ContactChannel = {
  label: string;
  value: string;
  href?: string;
};

export type ServiciosColumnVariant = "gestion" | "rse" | "territorial";

export type ServiciosColumn = {
  title: string;
  items: string[];
  variant: ServiciosColumnVariant;
};

export type ExperienceCase = {
  title: string;
  body: string;
};

export const siteMeta = {
  name: "Coihue Sur",
  tagline: "Gestión sustentable y participativa",
  heroSubline: "Servicio local y robusto",
  description:
    "Consultora con base en la Comarca Andina que integra estrategia, calidad, territorio y participación.",
  location: "Cholila, Comarca Andina, Chubut, Argentina",
  contactLead:
    "Agende una entrevista con nosotros y empezaremos a construir la ruta para lograr sus metas"
};

export const pillars: Pillar[] = [
  {
    title: "Legitimidad territorial",
    description: "Construcción de acuerdos entre partes interesadas públicas, privadas y comunitarias."
  },
  {
    title: "Sustentabilidad operativa",
    description: "Diseño de soluciones que combinan desempeño técnico y responsabilidad socioambiental."
  },
  {
    title: "Monitoreo y mejora",
    description: "Procesos con indicadores, estándares de calidad y capacidad de aprendizaje organizacional."
  }
];

export const serviciosColumns: ServiciosColumn[] = [
  {
    variant: "gestion",
    title: "Mejoras de gestión de procesos y de calidad",
    items: [
      "Kaizen",
      "Just In Time",
      "ISO 9001",
      "Planeamiento Participativo",
      "Planeamiento Estratégico"
    ]
  },
  {
    variant: "rse",
    title: "Responsabilidad Social Empresaria ISO 26000",
    items: [
      "Diseño de donaciones y concursos",
      "Mentoring a pequeños emprendimientos",
      "Alianzas locales",
      "Desarrollo de habilidades Socioambientales y Bien-estar en el Trabajo"
    ]
  },
  {
    variant: "territorial",
    title: "Planificación y participación territorial",
    items: [
      "Diagnóstico territorial",
      "Diseño metodológico participativo",
      "Talleres con comunidad y profesionales",
      "Sistematización de información cualitativa",
      "Producción cartográfica"
    ]
  }
];

export const serviceAreas: ServiceArea[] = [
  {
    title: "Estrategia de inversión y gobernanza",
    detail: "Hoja de ruta, arquitectura institucional y coordinación multiactoral para implementación efectiva."
  },
  {
    title: "Gestión socioambiental y diálogo",
    detail: "Mapeo de partes interesadas, prevención de conflictividad y diseño de dispositivos participativos."
  },
  {
    title: "Calidad y mejora de procesos",
    detail: "Sistemas de gestión, estandarización operativa y mejora continua orientada a resultados."
  },
  {
    title: "Desarrollo de capacidades",
    detail: "Formación de equipos, liderazgo técnico y facilitación para sostener cambios complejos."
  }
];

export const method: MethodStep[] = [
  {
    step: "01",
    title: "Diagnóstico territorial e institucional",
    detail: "Relevamiento de contexto regulatorio, social, ambiental y operativo."
  },
  {
    step: "02",
    title: "Diseño estratégico",
    detail: "Definición de prioridades, riesgos, gobernanza y plan de acción."
  },
  {
    step: "03",
    title: "Implementación asistida",
    detail: "Acompañamiento técnico en terreno y coordinación de participantes clave."
  },
  {
    step: "04",
    title: "Monitoreo y mejora continua",
    detail: "Tablero de seguimiento, evaluación de resultados y ajuste iterativo."
  }
];

export const experienceCases: ExperienceCase[] = [
  {
    title: "Gestión de calidad en el sector público",
    body:
      "Desarrollamos el Centro de Gestión de la Calidad del Gobierno de la Ciudad de Buenos Aires para contribuir a ordenar sus procesos internos y dar asistencia a PyMEs locales. En el SAME trabajamos con la dirección y los equipos operativos para instalar una cultura de Mejora Continua en distintos sectores, en el marco de un proyecto BID. En el Ministerio de Salud porteño, apoyamos las actividades de Calidad y la formación de equipos que rediseñaban procesos en un contexto de alta exigencia y múltiples partes actoras. El resultado en cada caso fue una organización con mayor capacidad para gestionar su propio desempeño."
  },
  {
    title: "Participación territorial en ordenamiento de los bosques nativos",
    body:
      "Ante la necesidad de implementar la Ley 26.331 de protección de los bosques nativos en la Provincia del Chubut, diseñamos un proceso que permitió contar con la voz de las partes interesadas dentro de la comunidad: primero relevamos las perspectivas del personal de las delegaciones forestales, luego desplegamos un esquema de Información, Consulta, Acuerdo y Desacuerdos adaptado al contexto local y realizamos acciones que permitieron la interacción entre instituciones relevantes del sector. En 35 talleres participaron 550 personas con vinculación directa a la temática. Toda la información —textos y cartografía— fue sistematizada y entregada al organismo contratante lista para su uso. Un proceso complejo que se tradujo en insumos concretos para la toma de decisiones."
  },
  {
    title: "Certificación y sistemas de calidad en industria regulada",
    body:
      "Cuando una empresa necesita cumplir con marcos normativos exigentes —SENASA, ANMAT, ISO 9001— el desafío no es solo documentar: es construir un sistema que funcione en la práctica. Lo hicimos con Camilo Ferrón S.A. en la industria alimenticia y con VETUE S.A. en el rubro veterinario, acompañando el proceso completo desde el diagnóstico hasta la implementación. En el Ministerio de Salud de la Nación extendimos ese enfoque al sector público, capacitando instituciones de salud en gestión de la calidad."
  }
];

export const directors: DirectorProfile[] = [
  {
    name: "Rubén Bruno Gurisatti",
    role: "Dirección técnica en ingeniería y calidad",
    focus:
      "Ingeniería de procesos, sistemas de gestión de calidad, mejora continua e implementación en sector público y privado.",
    highlights: [
      "Magíster en Ingeniería en Calidad (UTN)",
      "Experiencia en ISO 9001, Kaizen y gestión por procesos",
      "Trayectoria en docencia de posgrado y consultoría aplicada"
    ]
  },
  {
    name: "María Martha Polemann",
    role: "Dirección en metodologías participativas y territorio",
    focus:
      "Planificación participativa, desarrollo económico local y gestión ambiental con enfoque de articulación comunitaria.",
    highlights: [
      "Más de 30 años en trabajo social y políticas de desarrollo",
      "Experiencia en diseño de procesos participativos",
      "Práctica territorial sostenida en Comarca Andina"
    ]
  }
];

export const collaborators: TeamMember[] = [
  {
    name: "Sandra Maranzina",
    role: "Especialista en desarrollo, políticas públicas e integración regional"
  },
  {
    name: "Hervé Fodor",
    role: "Consultor en cooperación internacional, traducción e interpretación"
  },
  {
    name: "Juan Gabriel Juara",
    role: "Consultor en gobernanza y análisis de datos"
  }
];

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "coihuesur@gmail.com",
    href: "mailto:coihuesur@gmail.com"
  },
  {
    label: "LinkedIn",
    value: "Coihue Sur en LinkedIn",
    href: "https://www.linkedin.com/company/coihue-sur"
  },
  {
    label: "Base territorial",
    value: siteMeta.location
  }
];
