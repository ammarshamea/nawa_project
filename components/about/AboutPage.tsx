"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Gem, Leaf, Target, Users } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import { publicPath } from "@/lib/publicPath";

const valueIcons = [Gem, Eye, Target, Leaf, Users];

export default function AboutPage() {
  const { lang, isDark } = useSite();

  return (
    <>
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={publicPath("rise-tower-riyadh-3.jpg")}
            alt="Modern towers and real estate in Saudi Arabia"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.9) 100%)",
            }}
          />
        </div>

        <div className="container-luxury relative z-10 pb-20 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4" style={{ color: "#ebbf5b" }}>
              {tx(t.about.label, lang)}
            </p>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#ffffff",
              }}
            >
              {tx(t.about.h1a, lang)}
              <br />
              <span className="text-gold-gradient">{tx(t.about.h1b, lang)}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--c-bg-1)" }}>
        <div className="container-luxury max-w-5xl">
          <ScrollReveal>
            <SectionLabel label={tx(t.about.companyStoryLabel, lang)} />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--c-text-1)" }}>
              {tx(t.about.companyStoryTitle, lang)}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-sm leading-relaxed" style={{ color: "var(--c-text-2)", lineHeight: 1.9 }}>
              {tx(t.about.companyStoryText, lang)}
            </p>
          </ScrollReveal>

          {/* AmmarLord comment it return soon */}
          {/*
          <div className="timeline">
            ... previous company timeline ...
          </div>
          */}
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--c-bg-2)" }}>
        <div className="container-luxury">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel label={tx(t.about.visionLabel, lang)} />
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px" style={{ background: "var(--c-border)" }}>
            <ScrollReveal delay={0.1}>
              <div className="p-6 sm:p-10 lg:p-12 h-full" style={{ background: "var(--c-bg-2)" }}>
                <p className="eyebrow mb-3" style={{ color: "var(--c-gold)" }}>
                  {tx(t.about.visionLabel, lang)}
                </p>
                {tx(t.about.visionTitle, lang).trim() ? (
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--c-text-1)" }}>
                    {tx(t.about.visionTitle, lang)}
                  </h3>
                ) : null}
                <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-2)", lineHeight: 1.9 }}>
                  {tx(t.about.visionText, lang)}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="p-6 sm:p-10 lg:p-12 h-full" style={{ background: "var(--c-bg-1)" }}>
                <p className="eyebrow mb-3" style={{ color: "var(--c-gold)" }}>
                  {tx(t.about.missionLabel, lang)}
                </p>
                {tx(t.about.missionTitle, lang).trim() ? (
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--c-text-1)" }}>
                    {tx(t.about.missionTitle, lang)}
                  </h3>
                ) : null}
                <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-2)", lineHeight: 1.9 }}>
                  {tx(t.about.missionText, lang)}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--c-bg-3)" }}>
        <div className="container-luxury">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel label={tx(t.about.valuesLabel, lang)} />
            {tx(t.about.valuesH2, lang).trim() ? (
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--c-text-1)" }}>
                {tx(t.about.valuesH2, lang)}
              </h2>
            ) : null}
          </ScrollReveal>

          <div className="luxury-data-grid xl:gap-6">
            {t.about.values.map((value, i) => {
              const Icon = valueIcons[i] ?? Gem;

              return (
                <ScrollReveal key={value.en} delay={i * 0.07}>
                  <div
                    className="p-8 h-full group"
                    style={{ border: "1px solid var(--c-border)", background: "var(--c-card)" }}
                  >
                    <div className="w-11 h-11 flex items-center justify-center mb-5" style={{ border: "1px solid var(--c-border-hi)" }}>
                      <Icon size={18} style={{ color: "var(--c-gold)" }} />
                    </div>
                    <h4 className="font-bold mb-1" style={{ color: "var(--c-text-1)", fontSize: "0.95rem" }}>
                      {tx(value, lang)}
                    </h4>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--c-bg-1)" }}>
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16">
          <div>
            <ScrollReveal>
              <SectionLabel label={tx(t.about.philosophyLabel, lang)} />
            </ScrollReveal>
            <h3 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", color: "var(--c-text-1)", fontWeight: 700 }}>
              {tx(t.about.philosophyTitle, lang)}
            </h3>
            <div className="mt-6 luxury-data-grid luxury-data-grid--tight">
              {t.about.philosophy.map((item) => (
                <div key={item.en} className="p-4" style={{ border: "1px solid var(--c-border)", background: "var(--c-card)" }}>
                  {tx(item, lang)}
                </div>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal>
              <SectionLabel label={tx(t.about.sustainabilityLabel, lang)} />
            </ScrollReveal>
            {tx(t.about.sustainabilityTitle, lang).trim() ? (
              <h3 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", color: "var(--c-text-1)", fontWeight: 700 }}>
                {tx(t.about.sustainabilityTitle, lang)}
              </h3>
            ) : null}
            <div className="mt-6 luxury-data-grid luxury-data-grid--tight">
              {t.about.sustainability.map((item) => (
                <div key={item.en} className="p-4" style={{ border: "1px solid var(--c-border)", background: "var(--c-card)" }}>
                  {tx(item, lang)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--c-bg-2)" }}>
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <ScrollReveal>
              <SectionLabel label={tx(t.about.partnershipsLabel, lang)} />
            </ScrollReveal>
            {tx(t.about.partnershipsTitle, lang).trim() ? (
              <h3 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", color: "var(--c-text-1)", fontWeight: 700 }}>
                {tx(t.about.partnershipsTitle, lang)}
              </h3>
            ) : null}
            <div className="mt-6 luxury-data-grid luxury-data-grid--tight">
              {t.about.partnerships.map((item) => (
                <div key={item.en} className="p-4" style={{ border: "1px solid var(--c-border)", background: "var(--c-card)" }}>
                  {tx(item, lang)}
                </div>
              ))}
            </div>

            {/* AmmarLord comment it return soon */}
            {/*
            <div className="mt-8 space-y-3">
              ... previous named partnerships list ...
            </div>
            */}
          </div>

          <div>
            <ScrollReveal>
              <SectionLabel label={tx(t.about.advantageLabel, lang)} />
            </ScrollReveal>
            <div className="mt-6 luxury-data-grid luxury-data-grid--tight">
              {t.about.advantage.map((item) => (
                <div key={item.en} className="p-4" style={{ border: "1px solid var(--c-border)", background: "var(--c-card)" }}>
                  {tx(item, lang)}
                </div>
              ))}
            </div>

            {/* AmmarLord comment it return soon */}
            {/*
            <div className="mt-8">
              ... previous competitive advantage visual section ...
            </div>
            */}
          </div>
        </div>
      </section>

      <section
        className={`${isDark ? "surface-dark" : ""} py-24 text-center relative overflow-hidden`}
        style={{
          background: isDark
            ? "linear-gradient(135deg, #0f0e00, #1a1500, #0f0e00)"
            : "linear-gradient(135deg, var(--c-bg-1), var(--c-bg-2), var(--c-bg-1))",
          borderTop: isDark ? undefined : "1px solid var(--c-border)",
        }}
      >
        <div className="gold-line absolute top-0 left-0 right-0" />
        <div className="container-luxury relative z-10">
          <ScrollReveal>
            <SectionLabel label={tx(t.about.alignmentLabel, lang)} />
            <p
              className="mx-auto max-w-3xl text-sm leading-relaxed"
              style={{ color: isDark ? "var(--c-on-dark-2)" : "var(--c-text-2)" }}
            >
              {tx(t.about.alignmentText, lang)}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 gap-3 min-[420px]:max-w-xl min-[420px]:grid-cols-2 justify-items-center">
              <Link href="/contact" className="btn-gold w-full min-[420px]:w-auto justify-center">
                {tx(t.about.ctaBtn1, lang)}
                <ArrowRight size={15} />
              </Link>
              <Link href="/about" className="btn-outline-gold w-full min-[420px]:w-auto justify-center">
                {tx(t.about.label, lang)}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
