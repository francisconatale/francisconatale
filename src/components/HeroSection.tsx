import { StretchName } from "@/components/StretchName";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="w-full bg-white text-[#d80621] pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* 01 — Identidad: StretchName FRANCISCO NATALE */}
      <div className="w-full px-[6vw]">
        <StretchName text={portfolioData.name.toUpperCase()} tag="h1" />
      </div>

      {/* Descripción profesional: concisa, 27–30px, ancho controlado */}
      <p
        id="sobre-mi"
        className="px-[6vw] mt-14 sm:mt-16 lg:mt-20 text-xl sm:text-2xl md:text-[27px] lg:text-[29px] font-normal leading-[1.28] tracking-tight text-[#d80621] max-w-3xl font-body"
      >
        {portfolioData.claim}
      </p>
    </section>
  );
}
