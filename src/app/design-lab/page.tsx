"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData, Project } from "@/data/portfolio";

export default function DesignLabPage() {
  const [activeTab, setActiveTab] = useState<"all" | "dossier" | "blueprint">("all");

  const projects = portfolioData.projects;

  return (
    <div className="min-h-screen bg-white text-[#d80621] font-body selection:bg-[#d80621] selection:text-white pb-32">
      {/* ── Top Bar ───────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-[#d80621] text-white px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-xs uppercase font-mono tracking-wider opacity-80 hover:opacity-100 underline decoration-white/40 transition-opacity"
              >
                ← Volver al sitio
              </Link>
              <span className="opacity-40">/</span>
              <span className="text-xs uppercase font-mono tracking-widest font-bold">
                Design Lab
              </span>
            </div>
            <h1 className="font-heading text-2xl uppercase tracking-tight mt-0.5">
              Variantes para Backend Developer
            </h1>
          </div>

          <nav className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "Comparar ambas" },
              { id: "dossier", label: "01. Dossier Editorial" },
              { id: "blueprint", label: "02. Blueprint Técnico" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border active:translate-y-px ${
                  activeTab === tab.id
                    ? "bg-white text-[#d80621] border-white font-bold shadow-sm"
                    : "bg-transparent text-white border-white/40 hover:border-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-12 space-y-32">
        {/* ════════════════════════════════════════════════════
            VARIANTE 1: DOSSIER EDITORIAL ASIMÉTRICO
            ════════════════════════════════════════════════════ */}
        {(activeTab === "all" || activeTab === "dossier") && (
          <section id="variante-dossier" className="space-y-10 scroll-mt-24">
            <div className="bg-[#d80621]/5 border-l-2 border-[#d80621] p-4 text-xs font-mono uppercase tracking-wider flex items-center justify-between">
              <span>
                <strong>Variante 01:</strong> Dossier Editorial Asimétrico (Split 5/7 limpio · Tipografía suiza)
              </span>
              <span className="text-[11px] opacity-70">Claridad de dominio</span>
            </div>

            <div className="space-y-24">
              {projects.map((project, idx) => (
                <article key={project.title} className="border-t border-[#d80621] pt-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Información */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase tracking-widest opacity-60">
                          0{idx + 1} / {project.category}
                        </span>
                        <h2 className="font-heading text-5xl sm:text-6xl uppercase tracking-tight text-[#d80621] leading-none">
                          {project.title}
                        </h2>
                      </div>

                      <p className="text-base leading-relaxed opacity-90">
                        {project.problem}
                      </p>

                      {/* Metadatos técnicos */}
                      <div className="space-y-3 pt-4 border-t border-[#d80621]/20 font-mono text-xs">
                        <div className="grid grid-cols-3 gap-2 py-1 border-b border-[#d80621]/10">
                          <span className="opacity-60 uppercase">Rol</span>
                          <span className="col-span-2 font-sans font-medium text-sm text-[#d80621]">
                            {project.role || "Backend Developer"}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 py-1 border-b border-[#d80621]/10">
                          <span className="opacity-60 uppercase">Foco</span>
                          <span className="col-span-2 font-sans text-sm opacity-90">
                            {project.result}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-2 py-1">
                          <span className="opacity-60 uppercase">Stack</span>
                          <div className="col-span-2 flex flex-wrap gap-x-3 gap-y-1 opacity-80">
                            {project.tags.map((tag) => (
                              <span key={tag} className="underline decoration-[#d80621]/30 underline-offset-4">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {project.link && (
                        <div className="pt-2">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider border-b-2 border-[#d80621] hover:bg-[#d80621] hover:text-white px-2 py-1 transition-colors active:translate-y-px"
                          >
                            Ver Sistema en Vivo ↗
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Captura real a escala */}
                    <div className="lg:col-span-7">
                      <div className="relative aspect-[16/10] w-full border border-[#d80621]/20 overflow-hidden bg-white p-3 sm:p-4">
                        {project.image && (
                          <div className="relative w-full h-full overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-contain transition-transform duration-700 ease-out hover:scale-[1.02]"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════════════════
            VARIANTE 2: BLUEPRINT TÉCNICO
            ════════════════════════════════════════════════════ */}
        {(activeTab === "all" || activeTab === "blueprint") && (
          <section id="variante-blueprint" className="space-y-10 scroll-mt-24 pt-8">
            <div className="bg-[#d80621]/5 border-l-2 border-[#d80621] p-4 text-xs font-mono uppercase tracking-wider flex items-center justify-between">
              <span>
                <strong>Variante 02:</strong> Blueprint Técnico (Estructura de 3 columnas de dominio · Vista panorámica)
              </span>
              <span className="text-[11px] opacity-70">Lectura horizontal</span>
            </div>

            <div className="space-y-24">
              {projects.map((project, idx) => (
                <article key={project.title} className="border-t border-[#d80621] pt-8 space-y-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#d80621]/20 pb-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest opacity-60 block">
                        Sistema 0{idx + 1} / {project.category}
                      </span>
                      <h2 className="font-heading text-5xl sm:text-6xl uppercase tracking-tight text-[#d80621] mt-1">
                        {project.title}
                      </h2>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold uppercase tracking-wider border border-[#d80621] px-4 py-2 hover:bg-[#d80621] hover:text-white transition-colors self-start md:self-auto active:translate-y-px"
                      >
                        Abrir Sistema ↗
                      </a>
                    )}
                  </div>

                  {/* 3 Columnas de Dominio e Ingeniería */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-2 text-sm leading-relaxed">
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider block opacity-60">
                        01 · Desafío de Dominio
                      </span>
                      <p className="opacity-90">{project.problem}</p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider block opacity-60">
                        02 · Impacto de Negocio
                      </span>
                      <p className="opacity-90">{project.result}</p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-wider block opacity-60">
                        03 · Tecnologías de Producción
                      </span>
                      <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                        {project.tags.map((t) => (
                          <span key={t} className="border border-[#d80621]/30 px-2 py-0.5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Imagen panorámica */}
                  <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full border border-[#d80621]/20 overflow-hidden p-4 flex items-center justify-center">
                    {project.image && (
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
