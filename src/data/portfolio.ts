export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  role?: string;
  problem: string;
  decisiones?: string[];
  tags: string[];
  result: string;
  link?: string;
  image?: string;
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface StackGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export const portfolioData = {
  name: "Francisco Natale",
  logo: "FN",
  role: "Backend Java Developer",
  location: "Río Cuarto, Argentina",
  available: "Disponible en todo el mundo",
  cvUrl: "/cv.pdf",
  claim:
    "Backend Developer con foco en Java, Spring Boot y diseño relacional en PostgreSQL.",
  bio: "Desarrollo servicios backend con Java y Spring Boot. Trabajo en diseño de dominio, modelado relacional e integración de APIs.",
  focusAreas: [
    {
      title: "Diseño de dominio",
      description: "modelado de entidades, reglas de negocio y separación de capas.",
    },
    {
      title: "Persistencia relacional",
      description: "diseño de esquemas, funciones PL/pgSQL, triggers y consultas en PostgreSQL.",
    },
    {
      title: "Integración de sistemas",
      description: "APIs REST, control de concurrencia y operaciones idempotentes.",
    },
    {
      title: "Testing automatizado",
      description: "pruebas unitarias, de integración y BDD con JUnit 5, Mockito y Cucumber.",
    },
  ] as FocusArea[],
  education: [
    {
      degree: "Licenciatura en Ciencias de la Computación",
      school: "Universidad Nacional de Río Cuarto",
      period: "2022 – 2027 (estimado)",
      detail: "5.º año en curso",
    },
    {
      degree: "Analista en Ciencias de la Computación",
      school: "Universidad Nacional de Río Cuarto",
      period: "2022 – 2026",
      detail: "Graduado · Promedio 8,76",
    },
  ] as EducationItem[],
  cta: {
    label: "Hablemos →",
    href: "#contacto",
  },
  navLinks: [
    { label: "PROYECTOS", href: "#proyectos" },
    { label: "SOBRE MÍ", href: "#sobre-mi" },
    { label: "STACK", href: "#stack" },
    { label: "CONTACTO", href: "#contacto" },
  ] as NavLink[],
  stackGroups: [
    {
      category: "Backend",
      description: "Servicios en Java, APIs REST y control de concurrencia",
      skills: ["Java 17+", "Spring Boot", "Spring Security", "Hibernate / JPA", "REST APIs", "JWT"],
    },
    {
      category: "Datos & Persistencia",
      description: "Modelado relacional, consultas y lógica en PostgreSQL",
      skills: ["PostgreSQL", "SQL", "PL/pgSQL", "Triggers & Funciones", "Row-Level Security (RLS)"],
    },
    {
      category: "Infra & Entorno",
      description: "Contenedores, servidores Linux y pipelines CI/CD",
      skills: ["Docker", "Docker Compose", "Linux / Bash", "CI/CD", "Nginx", "Git"],
    },
    {
      category: "Calidad & Testing",
      description: "Pruebas unitarias, de integración y análisis de cobertura",
      skills: ["JUnit 5", "Mockito", "Cucumber BDD", "JaCoCo"],
    },
  ] as StackGroup[],
  projects: [
    {
      title: "Kioskito",
      category: "Gestión comercial y análisis de negocio",
      role: "Full-Stack Developer",
      image: "/projects/kioskito.png",
      problem:
        "Plataforma de gestión comercial para comercios minoristas. El sistema requería operar sin interrupciones ante pérdidas de conexión a internet, tolerar reintentos de red sin duplicar ventas y particionar los datos de cada comercio.",
      decisiones: [
        "Multi-tenancy por esquemas: Particionamiento de datos por comercio mediante esquemas independientes en PostgreSQL.",
        "Idempotencia en ventas: Claves únicas por transacción para evitar registros duplicados ante reintentos de red.",
        "Sincronización offline: Persistencia local con IndexedDB y sincronización diferida con el backend al restablecer conexión.",
      ],
      tags: [
        "Java 17",
        "Spring Boot",
        "PostgreSQL",
        "Next.js",
        "IndexedDB",
        "Docker",
      ],
      result:
        "Desplegado en producción con más de 40.000 transacciones procesadas. Integra ventas, gestión de catálogo, control de caja y métricas comerciales.",
      link: "https://kioskito-web.vercel.app/",
    },
    {
      title: "Bien Hecho",
      category: "Gestión de presupuestos comerciales",
      role: "Backend & Database Developer",
      image: "/projects/bien-hecho.png",
      problem:
        "Plataforma de presupuestos para trabajadores independientes. El desarrollo se centró en computar dinámicamente costos de materiales, horas de mano de obra y márgenes para emitir propuestas formales en PDF.",
      decisiones: [
        "Cálculos en base de datos: Funciones y triggers en PL/pgSQL para computar costos de materiales, mano de obra y márgenes sin delegar la lógica al cliente.",
        "Políticas RLS: Reglas de acceso en PostgreSQL mediante Row-Level Security para evaluar permisos directamente en el motor.",
      ],
      tags: [
        "PostgreSQL",
        "PL/pgSQL",
        "Next.js",
        "TypeScript",
      ],
      result:
        "Generación y exportación de presupuestos formales en PDF, con cálculo automatizado de costos de materiales y mano de obra.",
      link: "https://bienhecho.vercel.app/",
    },
  ] as Project[],
  contactLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/francisconatale" },
    { label: "GitHub", href: "https://github.com/francisconatale" },
    { label: "Hitlabs", href: "https://hitlabs.vercel.app/" },
  ] as ContactLink[],
  email: "francisconatale9@gmail.com",
  year: "2026",
};
