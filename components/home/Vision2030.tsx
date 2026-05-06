"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function Vision2030() {
  const { lang, isDark } = useSite();

  const overlayGradient = isDark
    ? "linear-gradient(to right, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.82) 50%, rgba(8,8,8,0.92) 100%)"
    : "linear-gradient(to right, rgba(250,248,242,0.94) 0%, rgba(237,231,214,0.9) 50%, rgba(250,248,242,0.94) 100%)";

  const titleColor = isDark ? "var(--c-on-dark-1)" : "var(--c-text-1)";
  const bodyColor = isDark ? "var(--c-on-dark-2)" : "var(--c-text-2)";

  return (
    <section
      className={`${isDark ? "surface-dark" : ""} section-padding relative overflow-hidden`}
      style={{ background: "var(--c-bg-3)" }}
    >
      <div className="absolute inset-0">
        <img
          src="/Kingdom-Centre-Riyadh-Saudi-Arabia.webp"
          alt="Riyadh skyline, Saudi Arabia"
          className="w-full h-full object-cover"
          style={{ opacity: isDark ? 0.1 : 0.22 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: overlayGradient,
          }}
        />
      </div>

      <div className="container-luxury relative z-10">
        <div className="max-w-3xl">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <GoldDivider />
            </div>
            <p className="eyebrow" style={{ color: "var(--c-gold)" }}>
              {tx(t.vision.label, lang)}
            </p>
          </ScrollReveal>

          {tx(t.vision.title, lang).trim() ? (
            <ScrollReveal delay={0.1}>
              <h2
                className="mt-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  color: titleColor,
                }}
              >
                {tx(t.vision.title, lang)}
              </h2>
            </ScrollReveal>
          ) : null}

          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: bodyColor }}>
              {tx(t.vision.sub, lang)}
            </p>
          </ScrollReveal>
        </div>

        {/* AmmarLord comment it return soon */}
        {/*
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-14">
          ... previous four pillars cards ...
        </div>
        */}
      </div>
    </section>
  );
}
