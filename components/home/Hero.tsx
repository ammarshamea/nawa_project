"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import NawaLogo from "@/components/ui/NawaLogo";
import { publicPath } from "@/lib/publicPath";

function LineReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div
      style={{
        overflow: "hidden",
        /* Display-size type: avoid clipping first/last glyphs + background-clip text edges */
        paddingInline: "clamp(4px, 2.5vw, 22px)",
      }}
    >
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { lang } = useSite();
  const isAr = lang === "ar";
  /* Negative tracking + overflow:hidden clips Latin/Arabic glyph sides; keep neutral */
  const headlineTracking = "0";
  const headlineLineHeight = isAr ? 1.14 : 1.08;
  /** Scales down on narrow / short viewports (mobile, landscape phones) */
  const heroDisplay = "clamp(1.65rem, min(11vw, 12dvh), 7rem)";

  const imgY = useTransform(scrollY, [0, 700], [0, 90]);
  const textY = useTransform(scrollY, [0, 700], [0, -55]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="surface-dark hero-scene relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <motion.div
        style={{ y: imgY, position: "absolute", inset: 0 }}
        className="scale-105 min-[480px]:scale-110 origin-center"
      >
        <motion.img
          src={publicPath("Kingdom-Centre-Riyadh-Saudi-Arabia.webp")}
          alt="Kingdom Centre tower, Riyadh, Saudi Arabia"
          initial={{ scale: 1.18, opacity: 0 }}
          animate={{ scale: 1.08, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.0, 0.0, 0.2, 1] }}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.88) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 20% 40%, rgba(181,133,22,0.1) 0%, transparent 55%)",
        }}
      />

      <motion.div
        style={{ y: textY, opacity, position: "relative", zIndex: 10, width: "100%", minWidth: 0 }}
      >
        {/*
         * Desktop: two columns — copy | logo (RTL swaps via grid).
         * Narrow viewports: single column — headline then logo; safe-area + touch CTAs.
         */}
        <div className="grid min-h-[100svh] w-full grid-cols-1 grid-rows-[auto_1fr] min-[900px]:grid-cols-2 min-[900px]:grid-rows-1 min-[900px]:gap-0 gap-y-10">
          {/* ── TEXT HALF ── */}
          <div
            className="flex min-h-0 min-w-0 flex-col justify-center px-4 max-[899px]:mx-auto max-[899px]:max-w-[100%] pb-6 min-[900px]:mx-0 min-[900px]:max-w-none min-[900px]:px-0 min-[900px]:pb-28 min-[900px]:ps-[clamp(1.25rem,4vw,5rem)] min-[900px]:pe-[clamp(1rem,3vw,3rem)] pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+4.5rem))] min-[900px]:pt-32"
          >
            <FadeUp delay={0.4}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "block",
                    height: "1px",
                    width: "40px",
                    background: "linear-gradient(90deg, transparent, #ebbf5b)",
                    transformOrigin: isAr ? "right" : "left",
                  }}
                />
                <span className="eyebrow" style={{ color: "#ebbf5b", fontSize: "0.62rem" }}>
                  {tx(t.hero.location, lang)}
                </span>
              </div>
            </FadeUp>

            <LineReveal delay={0.5}>
              <p
                style={{
                  fontSize: "clamp(0.78rem, 3.25vw, 1.08rem)",
                  color: "rgba(235,191,91,0.65)",
                  fontWeight: 300,
                  marginBottom: "0.5rem",
                  letterSpacing: isAr ? "0.01em" : undefined,
                }}
              >
                {tx(t.brand.tagline, lang)}
              </p>
            </LineReveal>

            <LineReveal delay={0.65}>
              <h1
                className="hero-headline-plain"
                style={{
                  fontSize: heroDisplay,
                  fontWeight: 700,
                  letterSpacing: headlineTracking,
                  lineHeight: headlineLineHeight,
                  color: "#ffffff",
                }}
              >
                {tx(t.hero.line1, lang)}
              </h1>
            </LineReveal>

            <LineReveal delay={0.8}>
              <h1
                className="text-gold-animate"
                style={{
                  fontSize: heroDisplay,
                  fontWeight: 700,
                  letterSpacing: headlineTracking,
                  lineHeight: headlineLineHeight,
                }}
              >
                {tx(t.hero.line2, lang)}
              </h1>
            </LineReveal>

            <LineReveal delay={0.95}>
              <h1
                style={{
                  fontSize: heroDisplay,
                  fontWeight: 700,
                  letterSpacing: headlineTracking,
                  lineHeight: headlineLineHeight,
                  marginBottom: "2rem",
                  color: "#ffffff",
                }}
              >
                <span className="hero-headline-plain">{tx(t.hero.line3en, lang)}</span>{" "}
                <span className="text-gold-gradient">{tx(t.hero.line3gold, lang)}</span>
              </h1>
            </LineReveal>

            <FadeUp delay={1.15}>
              <div className="flex w-full flex-col gap-3 min-[460px]:max-w-max min-[460px]:flex-row min-[460px]:flex-wrap min-[460px]:gap-4 [&_a]:justify-center [&_a]:min-h-[48px]">
                <Link href="/about" className="btn-gold shrink-0 w-full min-[460px]:w-auto">
                  {tx(t.nav.about, lang)}
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contact" className="btn-outline-gold w-full min-[460px]:w-auto">
                  {tx(t.nav.inquire, lang)}
                </Link>
              </div>
            </FadeUp>

            {/* AmmarLord comment it return soon */}
            {/*
            <FadeUp delay={1.7}>…</FadeUp>
            */}
          </div>

          {/* ── LOGO HALF ── */}
          <div className="flex min-h-0 min-w-0 items-center justify-center px-4 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-2 min-[900px]:px-6 min-[900px]:pb-28 min-[900px]:pt-24">
            <FadeUp delay={0.2} className="flex w-full max-w-[min(100%,560px)] items-center justify-center min-[900px]:max-w-none">
              <Link
                href="/"
                className="flex w-full items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ebbf5b]"
                style={{ lineHeight: 0 }}
              >
                <NawaLogo className="hero-logo-visual" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{
          opacity,
          position: "absolute",
          bottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 10,
        }}
      >
        <span className="eyebrow" style={{ color: "var(--hero-ink-faint)", fontSize: "0.55rem" }}>
          {tx(t.hero.scroll, lang)}
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "rgba(181,133,22,0.25)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "linear-gradient(180deg, transparent, #ebbf5b, transparent)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
