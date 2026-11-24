import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/portfolio";

export interface ProjectComponentProps {
  /**
   * Complete project data object from portfolioData.projects
   */
  project?: Project;

  /**
   * Split ratio: "30/70" (30% image, 70% content) or "70/30" (70% image, 30% content).
   * @default "30/70"
   */
  ratio?: "30/70" | "70/30";

  /**
   * Placement of the image column on desktop.
   * @default "left"
   */
  imagePosition?: "left" | "right";

  /**
   * Image source path or URL. If omitted, uses project.link or an editorial placeholder.
   */
  imageSrc?: string;

  /**
   * Image alt text.
   */
  imageAlt?: string;

  /**
   * Technical fundamentals or architecture decisions for this specific project.
   */
  fundamentals?: string[];

  /**
   * Optional manual overrides if not using the project prop:
   */
  role?: string;
  title?: string;
  category?: string;
  problem?: string;
  result?: string;
  tags?: string[];
  link?: string;
  className?: string;
}

export function ProjectComponent({
  project,
  ratio = "30/70",
  imagePosition = "left",
  imageSrc,
  imageAlt,
  fundamentals,
  role,
  title,
  category,
  problem,
  result,
  tags,
  link,
  className = "",
}: ProjectComponentProps) {
  // Merge direct props with project object
  const finalTitle = title ?? project?.title ?? "Proyecto";
  const finalRole = role ?? project?.role;
  const finalCategory = category ?? project?.category ?? "Backend / Arquitectura";
  const finalProblem = problem ?? project?.problem ?? "";
  const finalResult = result ?? project?.result ?? "";
  const finalTags = tags ?? project?.tags ?? [];
  const finalLink = link ?? project?.link;
  const finalImageSrc = imageSrc ?? project?.image;
  const finalAlt = imageAlt ?? finalTitle;

  const is3070 = ratio === "30/70";

  // 10-column desktop grid for clean 30% / 70% or 70% / 30% ratio
  const imageSpan = is3070 ? "lg:col-span-3" : "lg:col-span-7";
  const contentSpan = is3070 ? "lg:col-span-7" : "lg:col-span-3";

  // Reversible column order
  const imageOrder = imagePosition === "right" ? "lg:order-2" : "lg:order-1";
  const contentOrder = imagePosition === "right" ? "lg:order-1" : "lg:order-2";

  return (
    <article
      className={`border border-[#d80621] bg-white text-[#d80621] overflow-hidden ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-10 items-stretch">
        {/* ── Image Column (30% or 70%) ───────────────────── */}
        <div
          className={`${imageSpan} ${imageOrder} relative min-h-[260px] lg:min-h-full border-b lg:border-b-0 ${
            imagePosition === "right"
              ? "lg:border-l lg:border-[#d80621]"
              : "lg:border-r lg:border-[#d80621]"
          } bg-[#d80621]/5 flex items-center justify-center overflow-hidden`}
        >
          {finalImageSrc ? (
            <div className="relative w-full h-full min-h-[260px] flex items-center justify-center p-6">
              <Image
                src={finalImageSrc}
                alt={finalAlt}
                fill
                className="object-contain p-6 transition-transform duration-500 hover:scale-105"
                sizes={is3070 ? "(max-width: 1024px) 100vw, 30vw" : "(max-width: 1024px) 100vw, 70vw"}
              />
            </div>
          ) : (
            <div className="p-8 flex flex-col items-center justify-center text-center gap-3 select-none">
              <span className="font-heading text-5xl sm:text-6xl text-[#d80621]/30">
                {finalTitle.slice(0, 2).toUpperCase()}
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.12em] opacity-60">
                [ Screenshot / Diagrama ]
              </span>
            </div>
          )}
        </div>

        {/* ── Content Column (70% or 30%) ─────────────────── */}
        <div
          className={`${contentSpan} ${contentOrder} p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 font-body`}
        >
          {/* Header: Category & Title */}
          <div className="flex flex-col gap-1.5 pb-2 border-b border-[#d80621]/20">
            <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.08em] opacity-75">
              {finalCategory}
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-[42px] text-[#d80621] leading-none tracking-tight pt-1">
              {finalTitle}
            </h3>
          </div>

          {/* Contexto */}
          {finalProblem && (
            <div className="flex flex-col gap-2">
              <span className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.08em] text-[#d80621] opacity-80">
                Contexto
              </span>
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed opacity-90">
                {finalProblem}
              </p>
            </div>
          )}

          {/* Decisiones técnicas */}
          {fundamentals && fundamentals.length > 0 && (
            <div className="flex flex-col gap-2.5 pt-4 border-t border-[#d80621]/20">
              <span className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.08em] text-[#d80621] opacity-80">
                Decisiones técnicas
              </span>
              <ul className="list-disc list-outside pl-4 text-[14px] sm:text-[15px] leading-relaxed opacity-90 space-y-2">
                {fundamentals.map((item, idx) => {
                  const colonIndex = item.indexOf(":");
                  if (colonIndex !== -1) {
                    const decTitle = item.slice(0, colonIndex);
                    const decDesc = item.slice(colonIndex + 1);
                    return (
                      <li key={idx}>
                        <strong className="font-semibold text-[#d80621]">{decTitle}:</strong>
                        {decDesc}
                      </li>
                    );
                  }
                  return <li key={idx}>{item}</li>;
                })}
              </ul>
            </div>
          )}

          {/* Resultado (todo texto, sin caja) */}
          {finalResult && (
            <div className="flex flex-col gap-2 pt-4 border-t border-[#d80621]/20">
              <span className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.08em] text-[#d80621] opacity-80">
                Resultado
              </span>
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed opacity-90 font-normal">
                {finalResult}
              </p>
            </div>
          )}

          {/* Footer: Tags & Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#d80621]/30">
            {finalTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {finalTags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#d80621] px-2.5 py-1 text-[11px] sm:text-[12px] uppercase tracking-wide opacity-80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {finalLink && (
              <Link
                href={finalLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 font-heading text-sm sm:text-base uppercase tracking-wide border-b border-[#d80621] pb-0.5 hover:opacity-60 transition-opacity ml-auto"
              >
                <span>Ver proyecto</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
