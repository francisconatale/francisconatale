"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function SiteFooter() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("es-AR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "America/Argentina/Cordoba",
        });
        setTime(formatter.format(new Date()));
      } catch {
        const d = new Date();
        setTime(
          d.toLocaleTimeString("es-AR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })
        );
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contacto" className="site-footer">
      <div className="site-footer-inner">
        {/* Section Header Row */}
        <div className="site-footer-header">
          <div className="site-footer-tag u-heading">
            ¿TENÉS UN PROYECTO EN MENTE?
          </div>
          <p className="site-footer-desc">
            {portfolioData.claim}
          </p>
        </div>

        {/* Giant CTA */}
        <div className="site-footer-cta-wrap">
          <a
            href={`mailto:${portfolioData.email}`}
            className="site-footer-cta u-heading"
            aria-label={`Hablemos por email a ${portfolioData.email}`}
          >
            <span>HABLEMOS</span>
            <span className="site-footer-cta-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        {/* 4 Columns */}
        <div className="site-footer-columns">
          {/* PÁGINAS */}
          <div className="site-footer-col">
            <h3 className="site-footer-col-title u-heading">PÁGINAS</h3>
            <ul className="site-footer-col-list">
              <li>
                <Link href="#inicio">Inicio</Link>
              </li>
              {portfolioData.navLinks.map((nav) => (
                <li key={nav.href}>
                  <Link href={nav.href}>
                    {nav.label.charAt(0).toUpperCase() + nav.label.slice(1).toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* REDES */}
          <div className="site-footer-col">
            <h3 className="site-footer-col-title u-heading">REDES</h3>
            <ul className="site-footer-col-list">
              {portfolioData.contactLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="site-footer-col">
            <h3 className="site-footer-col-title u-heading">CONTACTO</h3>
            <ul className="site-footer-col-list">
              <li>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="site-footer-email-link"
                >
                  {portfolioData.email}
                </a>
              </li>
              <li>
                <span>{portfolioData.location}</span>
              </li>
            </ul>
          </div>

          {/* ESTUDIO */}
          <div className="site-footer-col">
            <h3 className="site-footer-col-title u-heading">ESTUDIO</h3>
            <ul className="site-footer-col-list">
              <li>
                <span>Argentina</span>
              </li>
              <li>
                <span>{portfolioData.available}</span>
              </li>
              <li>
                <span>
                  Hora local {time ? `${time} ART` : "ART"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with copyright */}
        <div className="pt-8 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono opacity-80">
          <span>© {portfolioData.year} {portfolioData.name}</span>
          <span>Río Cuarto, Córdoba, Argentina</span>
        </div>
      </div>
    </footer>
  );
}
