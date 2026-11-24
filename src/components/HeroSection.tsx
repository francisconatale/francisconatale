import Link from "next/link";
import { StretchName } from "@/components/StretchName";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const githubLink =
    portfolioData.contactLinks.find((l) => l.label.toLowerCase() === "github")?.href ??
    "https://github.com/francisconatale";
  const linkedinLink =
    portfolioData.contactLinks.find((l) => l.label.toLowerCase() === "linkedin")?.href ??
    "https://www.linkedin.com/in/francisconatale";

  return (
    <section
      id="inicio"
      className="w-full bg-white text-[#d80621] min-h-[calc(100svh-56px)] flex flex-col justify-center px-[6vw] py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left: Name & Claim */}
        <div className="flex-1 flex flex-col justify-center min-w-0">
          <StretchName text={portfolioData.name.toUpperCase()} color="#d80621" tag="h1" />

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl font-normal leading-[1.3] tracking-tight text-[#d80621] max-w-2xl font-body">
            {portfolioData.claim}
          </p>
        </div>

        {/* Vertical divider on desktop */}
        <div className="hidden lg:block w-px bg-[#d80621]/20 self-stretch my-2" />

        {/* Right: Solid Red Action Buttons with Pure White SVGs & Text */}
        <div className="flex flex-col gap-3 w-full sm:w-72 lg:w-64 shrink-0">
          <Link
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ffffff" }}
            className="group flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#d80621] !text-white hover:bg-[#b5051c] transition-all duration-200 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 fill-white text-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span className="font-body text-sm font-semibold tracking-wide text-white !text-white">
                GitHub
              </span>
            </div>
            <span className="text-base font-body text-white !text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>

          <Link
            href={linkedinLink}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ffffff" }}
            className="group flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#d80621] !text-white hover:bg-[#b5051c] transition-all duration-200 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 fill-white text-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span className="font-body text-sm font-semibold tracking-wide text-white !text-white">
                LinkedIn
              </span>
            </div>
            <span className="text-base font-body text-white !text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>

          <Link
            href={portfolioData.cvUrl ?? "/cv.pdf"}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ffffff" }}
            className="group flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#d80621] !text-white hover:bg-[#b5051c] transition-all duration-200 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 stroke-white text-white fill-none shrink-0"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <span className="font-body text-sm font-semibold tracking-wide text-white !text-white">
                Mi CV
              </span>
            </div>
            <span className="text-base font-body text-white !text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
