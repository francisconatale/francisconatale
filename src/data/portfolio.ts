export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  detail?: string;
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

export interface StackCategory {
  category: string;
  skills: string[];
}

export const portfolioData = {
  name: "Francisco Natale",
  logo: "FN",
  role: "Backend Java Developer",
  location: "Río Cuarto, Argentina",
  available: "Disponible en todo el mundo",
  claim:
    "Backend Developer. Diseño e implemento sistemas pensando en el producto, el negocio y la calidad técnica.",
  bio: "Desarrollo aplicaciones backend con Java y Spring Boot. Me interesa el diseño de dominio, la consistencia de datos, la integración entre sistemas y la construcción de software mantenible.",
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
    { label: "Proyectos", href: "#proyectos" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],
  stackCategories: [
    {
      category: "Lenguajes",
      skills: ["Java 17+", "SQL", "PL/pgSQL", "TypeScript", "Python", "Bash"],
    },
    {
      category: "Backend",
      skills: [
        "Spring Boot",
        "Spring Security",
        "Hibernate / JPA",
        "REST APIs",
        "JWT",
        "AOP",
      ],
    },
    {
      category: "Bases de datos",
      skills: [
        "PostgreSQL",
        "PL/pgSQL",
        "Triggers & Funciones",
        "Row-Level Security",
      ],
    },
    {
      category: "Arquitectura",
      skills: ["Multi-tenant", "SOLID", "Patrones GoF", "RBAC", "Idempotencia"],
    },
    {
      category: "Testing",
      skills: ["JUnit", "Mockito", "Cucumber BDD", "JaCoCo (+80%)"],
    },
    {
      category: "Infra",
      skills: ["Docker", "Docker Compose", "Linux", "CI/CD", "Nginx", "MinIO"],
    },
  ] as StackCategory[],
  projects: [
    {
      title: "Kioskito",
      category: "Gestión comercial y análisis de negocio",
      role: "Full-Stack Developer",
      image: "/projects/kioskito.png",
      problem:
        "Desarrollo de una plataforma de gestión comercial para pequeños comercios. El objetivo es centralizar las operaciones diarias y proporcionar información sobre el desempeño del negocio mediante estadísticas y reportes. Los principales desafíos técnicos eran garantizar la integridad de las ventas, el aislamiento de datos entre comercios y la continuidad operativa ante problemas de conectividad.",
      decisiones: [
        "Arquitectura multi-tenant: Implementación de aislamiento de datos por comercio mediante esquemas independientes en PostgreSQL.",
        "Operaciones idempotentes: Incorporación de claves de idempotencia para evitar el procesamiento duplicado de ventas ante reintentos.",
        "Estrategia offline-first: Persistencia local con IndexedDB y sincronización de operaciones cuando se recupera la conectividad.",
        "Información para la toma de decisiones: Desarrollo de funcionalidades de estadísticas y reportes para consultar el desempeño comercial y analizar las operaciones del negocio.",
        "Pruebas automatizadas: Desarrollo de pruebas unitarias, de integración y de comportamiento para validar las reglas de negocio y los flujos de venta.",
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
        "Sistema desplegado en producción y utilizado por comercios reales, con más de 40.000 transacciones procesadas. Integra ventas, gestión de productos, control de caja y herramientas de análisis comercial.",
      link: "https://kioskito-web.vercel.app/",
    },
    {
      title: "Gestión de Cursos BPMN",
      category: "Plataforma de orquestación de procesos de negocio",
      role: "Backend Architect & Java Engineer",
      problem:
        "Desarrollo de una plataforma para coordinar los procesos de capacitación de una institución. El desafío principal era orquestar flujos de trabajo con tareas humanas heterogéneas, atender a tres perfiles de consumidores diferentes y evitar el acoplamiento directo entre los clientes y el motor de procesos.",
      decisiones: [
        "Aislamiento del motor (BFF): Implementación de un Backend-for-Frontend en Spring Boot 3 para que las aplicaciones cliente interactúen con APIs de negocio y nunca directamente con el motor de procesos.",
        "Seguridad multi-contexto: Configuración de tres SecurityFilterChain independientes en Spring Security 6 para aislar la autenticación M2M (API Key), los consumos REST y el acceso web tradicional.",
        "Resolución dinámica de tareas: Implementación del patrón Strategy junto a HATEOAS para que el backend comunique dinámicamente las acciones y destinos según el tipo de tarea a resolver.",
        "Separación de persistencia: Delimitación de responsabilidades dejando el estado transitorio del flujo en Flowable y centralizando las entidades de negocio, documentos e históricos en PostgreSQL.",
        "Integridad del dominio: Uso de records inmutables en los contratos HTTP y modelos JPA con métodos de negocio explícitos para preservar los invariantes del sistema.",
      ],
      tags: [
        "Java 17",
        "Spring Boot 3",
        "Flowable BPMN",
        "Spring Security 6",
        "PostgreSQL",
        "Docker",
      ],
      result:
        "Arquitectura modular y desacoplada que permite extender nuevos procesos de negocio sin modificar endpoints existentes ni exponer la topología interna del motor de procesos.",
      link: "https://github.com/AlieniAgustin/GTPN-GestionCursos-Flowable",
    },
    {
      title: "Bien Hecho",
      category: "Gestión de presupuestos comerciales",
      role: "Backend & Database Developer",
      image: "/projects/bien-hecho.png",
      problem:
        "Desarrollo de una plataforma para trabajadores independientes orientada a simplificar la elaboración y gestión de presupuestos. El desafío era estructurar la información comercial de cada usuario, facilitar el cálculo de materiales y mano de obra y garantizar el aislamiento de los datos entre cuentas.",
      decisiones: [
        "Lógica de negocio en PostgreSQL: Implementación de funciones y triggers para centralizar operaciones y mantener la consistencia de los datos.",
        "Aislamiento multi-tenant: Uso de Row-Level Security (RLS) para restringir el acceso a la información según el usuario y su contexto.",
        "Consistencia transaccional: Organización de operaciones relacionadas mediante transacciones para evitar estados parciales o inconsistentes.",
      ],
      tags: [
        "PostgreSQL",
        "PL/pgSQL",
        "Next.js",
        "TypeScript",
      ],
      result:
        "Desarrollo de una plataforma que permite elaborar presupuestos personalizados, calcular costos de materiales y mano de obra y generar documentos PDF para compartir con clientes.",
      link: "https://bienhecho.vercel.app/",
    },
    {
      title: "StarFighter",
      category: "Motor de juego por turnos",
      role: "Software Engineer",
      problem:
        "Desarrollo de un motor de juego por turnos. El desafío era modelar las interacciones entre unidades, armas y habilidades sin concentrar las reglas de juego en estructuras condicionales difíciles de mantener.",
      decisiones: [
        "Resolución de turnos: División de la ejecución en etapas independientes y ordenadas para controlar el ciclo de juego.",
        "Diseño extensible: Separación de responsabilidades y aplicación de patrones de diseño para incorporar nuevas mecánicas sin modificar innecesariamente las existentes.",
        "Pruebas de comportamiento: Uso de Cucumber para definir escenarios de interacción y validar las reglas del juego desde la perspectiva del comportamiento esperado.",
      ],
      tags: ["Java", "OOP", "Design Patterns", "Cucumber"],
      result:
        "Motor de juego estructurado por responsabilidades, con reglas desacopladas y escenarios automatizados para validar las interacciones entre sus componentes.",
      link: "https://github.com/francisconatale/starfighter",
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
