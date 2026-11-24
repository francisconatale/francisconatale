import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProjectComponent } from "@/components/ProjectComponent";
import { ProfileSection } from "@/components/ProfileSection";
import { SiteFooter } from "@/components/SiteFooter";
import { portfolioData } from "@/data/portfolio";

const projectFundamentals: Record<string, string[]> = {
  Kioskito: [
    "Aislamiento estricto multi-tenant por esquema en PostgreSQL.",
    "Idempotencia y rate limiting ante picos de concurrencia.",
    "Pipeline automatizado con BDD (Cucumber), JUnit 5 y +80% cobertura JaCoCo.",
  ],
  "Bien Hecho": [
    "Integridad contable blindada mediante funciones y triggers en PL/pgSQL.",
    "Políticas de Row-Level Security (RLS) para aislamiento multi-tenant a nivel de motor.",
    "Consistencia transaccional ACID garantizada en cada movimiento contable.",
  ],
  StarFighter: [
    "Implementación estricta de +8 patrones GoF (State, Strategy, Factory, Command, etc.).",
    "Pipeline determinístico de 9 etapas desacoplado con arquitectura MVC.",
    "Especificación viva y verificación de comportamiento mediante Cucumber BDD.",
  ],
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ── 01: IDENTIDAD & HERO ────────────────────────────── */}
        <HeroSection />

        {/* ── TRABAJO SELECCIONADO / PROYECTOS DESTACADOS ───── */}
        <section
          id="trabajos"
          className="w-full bg-white text-[#d80621] px-[6vw] pt-8 sm:pt-10 pb-20 sm:pb-28 font-body"
        >
          <div className="pb-5 sm:pb-6">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#d80621] leading-none">
              Proyectos destacados
            </h2>
          </div>

          <div className="flex flex-col gap-10 sm:gap-12">
            {portfolioData.projects.map((project, idx) => (
              <ProjectComponent
                key={project.title}
                project={project}
                ratio="30/70"
                imagePosition={idx % 2 === 0 ? "right" : "left"}
                fundamentals={projectFundamentals[project.title]}
              />
            ))}
          </div>
        </section>

        {/* ── 03, 04, 05: PERFIL TÉCNICO, STACK & FORMACIÓN ──── */}
        <ProfileSection />
      </main>

      {/* ── 06: CONTACTO & FOOTER ──────────────────────────── */}
      <SiteFooter />
    </>
  );
}
