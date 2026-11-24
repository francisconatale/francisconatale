"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  type CSSProperties,
} from "react";

interface StretchNameProps {
  text?: string;
  color?: string;
  tag?: "h1" | "h2" | "p" | "div";
  tracking?: number;
  className?: string;
  style?: CSSProperties;
}

const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function StretchName({
  text = "Francisco Natale",
  color = "var(--red, #D80621)",
  tag = "div",
  tracking = -0.04,
  className = "",
  style,
}: StretchNameProps) {
  const chars = useMemo(() => Array.from(text.toUpperCase()), [text]);

  const rootRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLSpanElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measured advance ratio for "FRANCISCO NATALE" in Anton font with tracking -0.04em
  const defaultRatio = 6.29;
  const ratio = useRef(defaultRatio);

  const letterSpacing = (i: number) =>
    i === chars.length - 1 ? "0em" : `${tracking}em`;

  const measure = useCallback(() => {
    const box = measureRef.current;
    const root = rootRef.current;
    if (!box || !root) return;

    const zoom = root.offsetWidth
      ? root.getBoundingClientRect().width / root.offsetWidth
      : 1;
    if (!(zoom > 0)) return;

    const widths = Array.from(box.children).map(
      (child) =>
        (child as HTMLElement).getBoundingClientRect().width / zoom / 100
    );
    if (!widths.length || widths.some((w) => !(w > 0))) return;

    const totalRatio = widths.reduce((sum, w) => sum + w, 0);
    ratio.current = totalRatio;
    root.style.setProperty("--dex-name-ratio", String(totalRatio));
  }, []);

  useIsoLayoutEffect(() => {
    measure();

    const fonts = (document as unknown as { fonts?: FontFaceSet }).fonts;
    if (fonts?.ready) {
      fonts.ready.then(measure);
    }
    fonts?.addEventListener?.("loadingdone", measure);

    window.addEventListener("resize", measure);

    return () => {
      fonts?.removeEventListener?.("loadingdone", measure);
      window.removeEventListener("resize", measure);
    };
  }, [chars, tracking, measure]);

  const Tag = tag as "div";

  return (
    <Tag
      ref={rootRef as React.Ref<HTMLDivElement>}
      aria-label={text}
      className={className}
      style={{
        ...style,
        position: "relative",
        width: "100%",
        margin: 0,
        padding: 0,
        containerType: "inline-size",
        overflow: "hidden",
        cursor: "default",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <span
        ref={rowRef}
        aria-hidden="true"
        className="display"
        style={{
          fontFamily: "var(--font-heading), var(--font-anton), Impact, sans-serif",
          fontSize: `clamp(44px, calc(82cqw / var(--dex-name-ratio, ${defaultRatio})), 165px)`,
          display: "flex",
          width: "100%",
          lineHeight: 1,
          color,
          whiteSpace: "pre",
          pointerEvents: "none",
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            style={{
              display: "block",
              flex: "0 0 auto",
              height: "1em",
            }}
          >
            <span
              style={{
                display: "block",
                letterSpacing: letterSpacing(i),
              }}
            >
              {char}
            </span>
          </span>
        ))}
      </span>

      {/* Hidden 100px measuring copy */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          overflow: "hidden",
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        <span
          ref={measureRef}
          className="display"
          style={{
            fontFamily: "var(--font-heading), var(--font-anton), Impact, sans-serif",
            display: "block",
            width: "max-content",
            whiteSpace: "pre",
            fontSize: 100,
            lineHeight: 1,
          }}
        >
          {chars.map((char, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                letterSpacing: letterSpacing(i),
              }}
            >
              {char}
            </span>
          ))}
        </span>
      </span>
    </Tag>
  );
}
