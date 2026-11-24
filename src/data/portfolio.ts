export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  detail?: string;
}

export interface Project {
  title: string;
  category: string;
  problem: string;
  tags: string[];
  result: string;
  link?: string;
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
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
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
      category: "SaaS · Punto de venta",
      problem:
        "POS multi-tenant en producción: aislamiento estricto de datos por negocio, autenticación JWT, rate limiting e idempotencia en picos de carga.",
      tags: ["Java 17", "Spring Boot", "PostgreSQL", "Docker", "Security"],
      result: "+300k operaciones probadas. Respuestas < 1 s. 80%+ cobertura.",
      link: "https://kioskito-web.vercel.app/",
    },
    {
      title: "Bien Hecho",
      category: "SaaS · B2B Facturación",
      problem:
        "Motor contable crítico con aislamiento total por cliente y consistencia transaccional garantizada a nivel de base de datos.",
      tags: ["PostgreSQL", "PL/pgSQL", "Next.js", "TypeScript", "RLS"],
      result: "10 triggers + 9 funciones PL/pgSQL. Integridad contable garantizada.",
      link: "https://bienhecho.vercel.app/",
    },
    {
      title: "StarFighter",
      category: "Open source · Motor de juego",
      problem:
        "Motor de juego por turnos que requería desacoplamiento estricto, pipeline determinístico de 9 etapas y arquitectura extensible.",
      tags: ["Java", "OOP", "Design Patterns (+8 GoF)", "MVC", "BDD"],
      result: "Pipeline verificado con BDD. Arquitectura limpia con +8 patrones GoF.",
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
