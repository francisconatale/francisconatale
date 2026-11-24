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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 items-start">
        {/* ── Perfil técnico ───────────────────────────────── */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] opacity-70">
            Perfil técnico
          </h2>
          <p className="text-[15px] sm:text-[16px] leading-relaxed opacity-90">
            {portfolioData.bio}
          </p>
          <div className="mt-4 flex flex-col gap-2 text-[12px] opacity-80">
            <span className="font-semibold uppercase tracking-wider text-[11px] opacity-70">
              Áreas principales de trabajo
            </span>
            <ul className="space-y-1 list-disc list-inside">
              <li>Diseño de dominio y arquitecturas desacopladas</li>
              <li>Consistencia transaccional y persistencia relacional</li>
              <li>Integración de sistemas, rate limiting e idempotencia</li>
              <li>Testing automatizado (JUnit, BDD) como estándar no negociable</li>
            </ul>
          </div>
        </div>

        {/* ── Stack tecnológico ────────────────────────────── */}
        <div className="flex flex-col gap-4">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] opacity-70">
            Stack tecnológico
          </h2>
          <div className="flex flex-col gap-5">
            {stackGroups.map((g) => (
              <div key={g.group} className="flex flex-col gap-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold opacity-70">
                  {g.group}
                </span>
                <ul className="flex flex-wrap gap-2">
                  {g.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`border border-[#d80621] px-2.5 py-1 text-[12px] uppercase tracking-wide ${
                        g.priority
                          ? "bg-[#d80621]/5 font-medium"
                          : "opacity-75 font-normal"
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
        <div className="flex flex-col gap-4">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] opacity-70">
            Formación académica
          </h2>
          <div className="flex flex-col gap-6">
            {/* 1. Licenciatura (En curso - prioridad) */}
            <div className="border border-[#d80621] p-4 flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] uppercase font-mono opacity-70">
                  2022 – 2027 (estimado)
                </span>
                <span className="text-[10px] uppercase font-semibold border border-[#d80621] px-1.5 py-0.5">
                  5.º año en curso
                </span>
              </div>
              <h3 className="font-semibold text-[15px] leading-snug">
                Licenciatura en Ciencias de la Computación
              </h3>
              <p className="text-[12px] opacity-75">
                Universidad Nacional de Río Cuarto
              </p>
            </div>

            {/* 2. Analista (Completado - menor peso visual) */}
            <div className="pt-2 flex flex-col gap-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] uppercase font-mono opacity-60">
                  2022 – 2026
                </span>
                <span className="text-[11px] font-semibold opacity-80">
                  Graduado · Promedio 8,76
                </span>
              </div>
              <h3 className="font-medium text-[14px] leading-snug opacity-90">
                Analista en Ciencias de la Computación
              </h3>
              <p className="text-[12px] opacity-65">
                Universidad Nacional de Río Cuarto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
