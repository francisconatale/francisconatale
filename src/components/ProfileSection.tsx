import { portfolioData } from "@/data/portfolio";

export function ProfileSection() {
  const stackGroups = [
    {
      group: "Backend",
      priority: true,
      skills: ["Java 17+", "Spring Boot", "Spring Security", "Hibernate / JPA", "REST APIs"],
    },
    {
      group: "Datos & Persistencia",
      priority: true,
      skills: ["PostgreSQL", "SQL", "PL/pgSQL", "Triggers & Funciones", "Row-Level Security"],
    },
    {
      group: "Complementarias & Infra",
      priority: false,
      skills: ["TypeScript", "Python", "Docker", "Linux / Bash", "CI/CD", "JUnit / BDD"],
    },
  ];

  return (
    <section
      id="sobre-mi"
      className="w-full bg-white text-[#d80621] px-[6vw] pt-16 sm:pt-24 pb-32 sm:pb-40 font-body"
    >
      {/* ── TÍTULO DE SECCIÓN: SOBRE MÍ ───────────────────── */}
      <div className="pb-8 sm:pb-12">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#d80621] leading-none">
          Sobre mí
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        {/* ── Perfil técnico ───────────────────────────────── */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.08em] text-[#d80621] pb-2 border-b border-[#d80621]/20">
            Perfil técnico
          </h3>
          <p className="text-lg sm:text-xl lg:text-[22px] leading-[1.35] font-normal text-[#d80621]">
            {portfolioData.bio}
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <span className="font-bold uppercase tracking-wider text-xs text-[#d80621]/80">
              Áreas principales de trabajo
            </span>
            <ul className="space-y-2.5 text-[15px] sm:text-[16px] leading-snug font-medium text-[#d80621]">
              <li className="flex items-start gap-2.5">
                <span className="select-none font-mono text-sm opacity-50">/</span>
                <span>Diseño de dominio y arquitecturas desacopladas</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="select-none font-mono text-sm opacity-50">/</span>
                <span>Consistencia transaccional y persistencia relacional</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="select-none font-mono text-sm opacity-50">/</span>
                <span>Integración de sistemas, rate limiting e idempotencia</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="select-none font-mono text-sm opacity-50">/</span>
                <span>Testing automatizado (JUnit, BDD) como estándar no negociable</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Stack tecnológico ────────────────────────────── */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.08em] text-[#d80621] pb-2 border-b border-[#d80621]/20">
            Stack tecnológico
          </h3>
          <div className="flex flex-col gap-5">
            {stackGroups.map((g) => (
              <div key={g.group} className="flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#d80621]/70">
                  {g.group}
                </span>
                <ul className="flex flex-wrap gap-1.5">
                  {g.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`border border-[#d80621]/40 px-2 py-0.5 text-[11px] sm:text-[12px] uppercase tracking-wide ${
                        g.priority
                          ? "bg-[#d80621]/5 text-[#d80621] font-medium"
                          : "text-[#d80621]/75 font-normal"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Formación académica ──────────────────────────── */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.08em] text-[#d80621] pb-2 border-b border-[#d80621]/20">
            Formación académica
          </h3>
          <div className="flex flex-col gap-6">
            {/* 1. Licenciatura (En curso - prioridad) */}
            <div className="border border-[#d80621] p-4 flex flex-col gap-2 bg-[#d80621]/[0.02]">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] uppercase font-mono text-[#d80621]/75">
                  2022 – 2027 (estimado)
                </span>
                <span className="text-[10px] uppercase font-semibold border border-[#d80621] px-1.5 py-0.5 bg-[#d80621]/10">
                  5.º año en curso
                </span>
              </div>
              <h4 className="font-semibold text-[15px] leading-snug text-[#d80621]">
                Licenciatura en Ciencias de la Computación
              </h4>
              <p className="text-[12px] text-[#d80621]/80">
                Universidad Nacional de Río Cuarto
              </p>
            </div>

            {/* 2. Analista (Completado - menor peso visual) */}
            <div className="pt-2 flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] uppercase font-mono text-[#d80621]/70">
                  2022 – 2026
                </span>
                <span className="text-[11px] font-semibold text-[#d80621]/90">
                  Graduado · Promedio 8,76
                </span>
              </div>
              <h4 className="font-medium text-[14px] leading-snug text-[#d80621]/90">
                Analista en Ciencias de la Computación
              </h4>
              <p className="text-[12px] text-[#d80621]/75">
                Universidad Nacional de Río Cuarto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
