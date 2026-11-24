"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
            Desarrollador backend especializado en Java, Spring Boot y bases de datos relacionales.
          </p>
        </div>

        {/* Giant CTA */}
        <div className="site-footer-cta-wrap">
          <a
            href="mailto:francisconatale9@gmail.com"
            className="site-footer-cta u-heading"
            aria-label="Hablemos por email a francisconatale9@gmail.com"
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
              <li>
                <Link href="#proyectos">Proyectos</Link>
              </li>
              <li>
                <Link href="#sobre-mi">Sobre mí</Link>
              </li>
              <li>
                <Link href="#contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* REDES */}
          <div className="site-footer-col">
            <h3 className="site-footer-col-title u-heading">REDES</h3>
            <ul className="site-footer-col-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/francisconatale"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/francisconatale"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://hitlabs.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  HitLabs
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="site-footer-col">
            <h3 className="site-footer-col-title u-heading">CONTACTO</h3>
            <ul className="site-footer-col-list">
              <li>
                <a
                  href="mailto:francisconatale9@gmail.com"
                  className="site-footer-email-link"
                >
                  francisconatale9@gmail.com
                </a>
              </li>
              <li>
                <span>Río Cuarto, Córdoba</span>
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
                <span>Disponible remoto</span>
              </li>
              <li>
                <span>
                  Hora local {time ? `${time} ART` : "ART"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
