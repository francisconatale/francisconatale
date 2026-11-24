import { portfolioData } from "@/data/portfolio";

export function ProfileSection() {
  return (
    <section
      id="sobre-mi"
      className="w-full bg-white text-[#d80621] px-[6vw] pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-36 font-body scroll-mt-14 border-t border-[#d80621]/20"
    >
      {/* ── TÍTULO DE SECCIÓN: SOBRE MÍ ───────────────────── */}
      <div className="pb-8 sm:pb-12">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#d80621] leading-none">
          Sobre mí
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Columna principal: Perfil & Enfoque */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <p className="text-xl sm:text-2xl lg:text-[26px] leading-[1.3] font-normal text-[#d80621]">
            {portfolioData.bio}
          </p>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#d80621]/20">
            <span className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.08em] opacity-80">
              Enfoque y áreas de trabajo
            </span>
            <ul className="space-y-3.5 text-[15px] sm:text-[16px] leading-relaxed opacity-90">
              {portfolioData.focusAreas.map((area) => (
                <li key={area.title} className="flex items-baseline gap-3">
                  <span className="font-mono text-sm opacity-40 select-none">/</span>
                  <span>
                    <strong className="font-semibold text-[#d80621]">{area.title}:</strong>{" "}
                    {area.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna secundaria: Formación académica */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:border-l lg:border-[#d80621]/20 lg:pl-10">
          <span className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.08em] opacity-80 pb-2 border-b border-[#d80621]/20">
            Formación académica
          </span>

          <div className="flex flex-col gap-8">
            {portfolioData.education.map((item, idx) => (
              <div
                key={item.degree}
                className={`flex flex-col gap-1.5 ${
                  idx > 0 ? "pt-6 border-t border-[#d80621]/20" : ""
                }`}
              >
                <div className="flex items-baseline justify-between gap-2 text-xs font-mono uppercase tracking-wider opacity-70">
                  <span>{item.period}</span>
                  {item.detail && (
                    <span
                      className={
                        item.detail.includes("Graduado")
                          ? "font-semibold text-[#d80621]"
                          : ""
                      }
                    >
                      {item.detail}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-lg sm:text-xl text-[#d80621] leading-snug">
                  {item.degree}
                </h3>
                <p className="text-sm opacity-80">{item.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
