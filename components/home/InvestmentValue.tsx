"use client";

import { Gem, ShieldCheck, TrendingUp, Globe } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

const icons = [Gem, TrendingUp, ShieldCheck, Globe];

export default function InvestmentValue() {
  const { lang } = useSite();

  return (
    <section className="section-padding relative" style={{ background: "var(--c-bg-2)" }}>
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src="/maxresdefault.jpg"
                  alt="Saudi real estate and commercial development"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(181,133,22,0.15), transparent 60%)",
                  }}
                />
              </div>

              {/* AmmarLord comment it return soon */}
              {/*
              <div
                className="absolute -bottom-8 -right-8 p-6 max-w-xs"
                style={{
                  background: "rgba(10,10,10,0.97)",
                  border: "1px solid rgba(181,133,22,0.3)",
                }}
              >
                <p className="eyebrow mb-2" style={{ color: "#b58516", fontSize: "0.6rem" }}>
                  Average Annual Return
                </p>
                <p className="text-gold-gradient font-bold" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                  12–18%
                </p>
              </div>
              */}
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <SectionLabel label={tx(t.investmentValue.label, lang)} />
            </ScrollReveal>
            {tx(t.investmentValue.title, lang).trim() ? (
              <ScrollReveal delay={0.1}>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                    color: "var(--c-text-1)",
                  }}
                >
                  {tx(t.investmentValue.title, lang)}
                </h2>
              </ScrollReveal>
            ) : null}

            {tx(t.investmentValue.sub, lang).trim() ? (
              <ScrollReveal delay={0.15}>
                <p className="mt-5 mb-10 text-sm leading-relaxed" style={{ color: "var(--c-text-2)" }}>
                  {tx(t.investmentValue.sub, lang)}
                </p>
              </ScrollReveal>
            ) : null}

            <div className={`space-y-5 ${tx(t.investmentValue.title, lang).trim() || tx(t.investmentValue.sub, lang).trim() ? "" : "mt-6"}`}>
              {t.investmentValue.items.map((item, i) => {
                const Icon = icons[i] ?? Gem;

                return (
                  <ScrollReveal key={item.en} delay={0.2 + i * 0.07}>
                    <div className="flex gap-5 group">
                      <div
                        className="w-10 h-10 flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ border: "1px solid var(--c-border-hi)" }}
                      >
                        <Icon size={16} style={{ color: "var(--c-gold)" }} />
                      </div>
                      <h4 className="font-semibold text-sm" style={{ letterSpacing: "0.04em", color: "var(--c-text-1)" }}>
                        {tx(item, lang)}
                      </h4>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
