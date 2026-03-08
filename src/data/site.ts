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

export type ContactChannel = {
  label: string;
  value: string;
  href?: string;
};

export type ServiciosColumn = {
  title: string;
  items: string[];
};

export const siteMeta = {
  name: "Coihue Sur",
  tagline: "Gestión sustentable y participativa",
  description:
    "Consultora con base en la Comarca Andina que integra estrategia, calidad, territorio y participación.",
  location: "Cholila, Comarca Andina, Chubut, Argentina"
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
    title: "Responsabilidad Social Empresaria ISO 26000",
    items: [
      "Diseño de donaciones y concursos",
      "Mentoring a pequeños emprendimientos",
      "Alianzas locales",
      "Desarrollo de habilidades Socioambientales y Bien-estar en el Trabajo"
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

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: "gurisatti@gmail.com",
    href: "mailto:gurisatti@gmail.com"
  },
  {
    label: "Email",
    value: "mmpolemann@gmail.com",
    href: "mailto:mmpolemann@gmail.com"
  },
  {
    label: "Base territorial",
    value: siteMeta.location
  }
];
