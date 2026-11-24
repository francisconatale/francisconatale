import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "PROYECTOS", href: "#proyectos" },
  { label: "SOBRE MÍ", href: "#sobre-mi" },
  { label: "CONTACTO", href: "#contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full h-[56px] bg-[#d80621] px-[6vw] flex items-center justify-between">
      {/* Left: Brand Name */}
      <Link
        href="#inicio"
        className="font-heading text-[18px] sm:text-[21px] leading-none tracking-tight text-white uppercase select-none hover:opacity-85 transition-opacity flex items-center"
      >
        <span className="text-white font-bold">{portfolioData.name}</span>
      </Link>

      {/* Right: visible nav */}
      <nav className="font-body flex items-center gap-4 sm:gap-8 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.05em] text-white">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:opacity-75 transition-opacity"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
