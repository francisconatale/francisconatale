import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { ProjectComponent } from "@/components/ProjectComponent";
import { ProfileSection } from "@/components/ProfileSection";
import { SiteFooter } from "@/components/SiteFooter";
import { portfolioData } from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ── 01: IDENTIDAD & HERO ────────────────────────────── */}
        <HeroSection />

        {/* ── TRABAJO SELECCIONADO / PROYECTOS DESTACADOS ───── */}
        <section
          id="proyectos"
          className="w-full bg-white text-[#d80621] px-[6vw] pt-8 sm:pt-10 pb-20 sm:pb-28 font-body scroll-mt-14"
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
                fundamentals={project.decisiones}
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
