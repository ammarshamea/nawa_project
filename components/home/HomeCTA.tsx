"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function HomeCTA() {
  const { lang, isDark } = useSite();

  const panelBg = isDark
    ? "linear-gradient(135deg, #0f0e00 0%, #1a1500 40%, #0f0e00 100%)"
    : "linear-gradient(135deg, var(--c-bg-1) 0%, var(--c-bg-2) 45%, var(--c-bg-1) 100%)";

  const glow = isDark
    ? "radial-gradient(ellipse at 50% 50%, rgba(181,133,22,0.15) 0%, transparent 65%)"
    : "radial-gradient(ellipse at 50% 50%, rgba(181,133,22,0.14) 0%, transparent 60%)";

  const headingColor = isDark ? "var(--c-on-dark-1)" : "var(--c-text-1)";
  const bodyColor = isDark ? "var(--c-on-dark-2)" : "var(--c-text-2)";

  return (
    <section
      className={`${isDark ? "surface-dark" : ""} relative overflow-hidden py-16 sm:py-24 lg:py-28`}
      style={{
        background: panelBg,
        borderTop: isDark ? undefined : "1px solid var(--c-border)",
        borderBottom: isDark ? undefined : "1px solid var(--c-border-lo)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: glow,
        }}
      />
      <div className="gold-line absolute top-0 left-0 right-0" />
      <div className="gold-line absolute bottom-0 left-0 right-0" />

      <div className="container-luxury relative z-10 text-center">
        <ScrollReveal>
          <p className="eyebrow" style={{ color: "var(--c-gold)", marginBottom: "1rem" }}>
            {tx(t.footer.ctaLabel, lang)}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            style={{
              fontSize: "clamp(2.3rem, 5vw, 4.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: headingColor,
            }}
          >
            {tx(t.footer.ctaTitle, lang)}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <p className="mt-6 mx-auto max-w-xl text-sm leading-relaxed" style={{ color: bodyColor }}>
            {tx(t.hero.sub, lang)}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mx-auto mt-8 grid w-full max-w-lg grid-cols-1 gap-3 min-[440px]:max-w-xl min-[440px]:grid-cols-2 justify-items-stretch justify-center">
            <Link href="/contact" className="btn-gold text-base justify-center">
              {tx(t.footer.schedule, lang)}
              <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="btn-outline-gold justify-center">
              {tx(t.nav.about, lang)}
            </Link>
          </div>
        </ScrollReveal>

        {/* AmmarLord comment it return soon */}
        {/*
        <ScrollReveal delay={0.32}>
          <div
            className="flex items-center justify-center gap-8 mt-14 pt-10"
            style={{ borderTop: "1px solid rgba(181,133,22,0.15)" }}
          >
            ... badges ...
          </div>
        </ScrollReveal>
        */}
      </div>
    </section>
  );
}
