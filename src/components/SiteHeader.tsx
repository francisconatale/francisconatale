import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "SOBRE MÍ", href: "#sobre-mi" },
  { label: "TRABAJOS", href: "#trabajos" },
  { label: "CONTACTO", href: "#contacto" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full h-[56px] bg-white px-[6vw] flex items-center justify-between">
      {/* Left: FN® logo */}
      <Link
        href="#inicio"
        className="font-heading text-[40px] leading-none tracking-[-0.02em] text-[#d80621] uppercase select-none hover:opacity-80 transition-opacity flex items-start"
      >
        <span>{portfolioData.logo}</span>
        <sup className="text-[12px] font-body font-medium ml-0.5 relative top-1">
          ®
        </sup>
      </Link>

      {/* Right: visible nav */}
      <nav className="font-body flex items-center gap-4 sm:gap-8 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.05em] text-[#d80621]">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:opacity-60 transition-opacity"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
