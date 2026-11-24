"use client";

import { useEffect, useRef } from "react";

interface FitTextProps {
  text: string;
}

export function FitText({ text }: FitTextProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const el = textRef.current;
    if (!wrap || !el) return;

    const fit = () => {
      el.style.transform = "none";
      el.style.fontSize = "100px";
      const wrapWidth = wrap.clientWidth;
      if (wrapWidth === 0) return;
      const fs = (100 * wrapWidth) / el.scrollWidth;
      el.style.fontSize = `${fs}px`;
      const sy = 1.7;
      el.style.transform = `scaleY(${sy})`;
      wrap.style.height = `${el.offsetHeight * sy}px`;
    };

    fit();

    window.addEventListener("resize", fit);

    if (document.fonts) {
      if (document.fonts.ready) {
        document.fonts.ready.then(fit);
      }
      document.fonts.addEventListener("loadingdone", fit);
    }

    const resizeObserver = new ResizeObserver(() => fit());
    resizeObserver.observe(wrap);

    return () => {
      window.removeEventListener("resize", fit);
      if (document.fonts) {
        document.fonts.removeEventListener("loadingdone", fit);
      }
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="name-wrap">
      <span ref={textRef} className="name display" id="name">
        {text}
      </span>
    </div>
  );
}
