"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function Introduction() {
  const { lang } = useSite();

  return (
    <section className="section-padding" style={{ background: "var(--c-bg-1)" }}>
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <ScrollReveal>
              <SectionLabel label={tx(t.intro.label, lang)} />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                  color: "var(--c-text-1)",
                }}
              >
                {tx(t.intro.h2a, lang)}
                <br />
                <span className="text-gold-gradient">{tx(t.intro.h2b, lang)}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="mt-6 leading-relaxed"
                style={{
                  color: "var(--c-text-2)",
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  letterSpacing: "0.02em",
                }}
              >
                {tx(t.intro.p1, lang)}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p
                className="mt-4 leading-relaxed"
                style={{
                  color: "var(--c-text-2)",
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                }}
              >
                {tx(t.intro.p2, lang)}
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15} direction="left">
            <div className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src="/rise-tower-riyadh-3.jpg"
                  alt="High-rise tower in Riyadh, Saudi Arabia"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom right, transparent 60%, rgba(0,0,0,0.45))",
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
