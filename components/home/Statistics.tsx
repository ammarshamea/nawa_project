"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import CountUp from "@/components/ui/CountUp";
import { SectionLabel } from "@/components/ui/GoldDivider";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", labelAr: "مشروع منجز" },
  { value: 200, suffix: "K+", label: "m² Developed", labelAr: "متر مربع مطور" },
  { value: 15, suffix: "+", label: "Years of Excellence", labelAr: "سنة من التميز" },
  { value: 5, suffix: "B+", label: "SAR in Portfolio", labelAr: "ريال في المحفظة" },
  { value: 98, suffix: "%", label: "Client Satisfaction", labelAr: "رضا العملاء" },
  { value: 30, suffix: "+", label: "Strategic Partners", labelAr: "شريك استراتيجي" },
];

export default function Statistics() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* AmmarLord comment it return soon */}
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(181,133,22,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container-luxury relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="flex justify-center">
              <SectionLabel label="By The Numbers" labelAr="بالأرقام" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                lineHeight: 1.15,
                color: "#ffffff",
              }}
            >
              Our Track Record{" "}
              <span className="text-gold-gradient">Speaks</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px"
          style={{ background: "rgba(181,133,22,0.12)" }}
        >
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.06}>
              <div
                className="flex flex-col items-center justify-center py-12 px-6 text-center"
                style={{ background: "#0a0a0a" }}
              >
                <p
                  className="text-gold-gradient font-bold"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <div className="gold-line w-8 mx-auto my-3" />
                <p
                  className="eyebrow"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.68rem" }}
                >
                  {stat.label}
                </p>
                <p
                  className="arabic mt-1 text-xs"
                  style={{ color: "rgba(181,133,22,0.45)" }}
                >
                  {stat.labelAr}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
