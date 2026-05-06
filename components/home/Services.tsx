"use client";

import { Building2, Briefcase, Home, Layers, ShoppingBag, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

const icons = [Home, Building2, Layers, TrendingUp, Briefcase, ShoppingBag];

export default function Services() {
  const { lang } = useSite();

  return (
    <section className="section-padding" style={{ background: "var(--c-bg-2)" }}>
      <div className="container-luxury space-y-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <ScrollReveal>
              <SectionLabel label={tx(t.services.label, lang)} />
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
                {tx(t.services.h2b, lang).trim() ? (
                  <>
                    {tx(t.services.h2a, lang)}{" "}
                    <span className="text-gold-gradient">{tx(t.services.h2b, lang)}</span>
                  </>
                ) : (
                  <span className="text-gold-gradient">{tx(t.services.h2a, lang)}</span>
                )}
              </h2>
            </ScrollReveal>
          </div>
          {tx(t.services.sub, lang).trim() ? (
            <ScrollReveal delay={0.15} direction="left">
              <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--c-text-2)" }}>
                {tx(t.services.sub, lang)}
              </p>
            </ScrollReveal>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--c-border)" }}>
          {t.services.items.map((service, i) => {
            const Icon = icons[i] ?? Home;

            return (
              <ScrollReveal key={service.en} delay={i * 0.07}>
                <motion.div
                  className="group p-8 flex flex-col gap-5 h-full"
                  style={{ background: "var(--c-bg-1)" }}
                  whileHover={{ background: "var(--c-card-h)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ border: "1px solid var(--c-border-hi)" }}
                  >
                    <Icon size={20} style={{ color: "var(--c-gold)" }} />
                  </div>
                  <h3
                    className="font-semibold transition-colors duration-300 group-hover:text-[#ebbf5b]"
                    style={{
                      fontSize: "0.95rem",
                      letterSpacing: "0.05em",
                      color: "var(--c-text-1)",
                    }}
                  >
                    {tx(service, lang)}
                  </h3>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <div>
          <ScrollReveal>
            <SectionLabel label={tx(t.projectTypes.label, lang)} />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {t.projectTypes.items.map((item, i) => (
              <ScrollReveal key={item.en} delay={0.05 + i * 0.06}>
                <div className="p-5" style={{ border: "1px solid var(--c-border)", background: "var(--c-card)" }}>
                  <p style={{ color: "var(--c-text-1)" }}>{tx(item, lang)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
