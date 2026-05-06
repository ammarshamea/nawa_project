"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

const projects = [
  {
    id: 1,
    name: { en: "Nawah Palms", ar: "نخيل نواة" },
    type: { en: "Luxury Compound", ar: "مجمع سكني فاخر" },
    location: { en: "North Riyadh", ar: "شمال الرياض" },
    area: "45,000 m²",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: { en: "Al Noor Villas", ar: "فلل النور" },
    type: { en: "Private Villas", ar: "فلل مستقلة" },
    location: { en: "Diplomatic Quarter", ar: "الحي الدبلوماسي" },
    area: "12,000 m²",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: { en: "Nawah Tower", ar: "برج نواة" },
    type: { en: "Commercial Tower", ar: "برج تجاري" },
    location: { en: "King Fahd Road", ar: "طريق الملك فهد" },
    area: "28,000 m²",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=85",
  },
];

export default function FeaturedProjects() {
  const { lang } = useSite();

  return (
    <section className="section-padding" style={{ background: "var(--c-bg-3)" }}>
      <div className="container-luxury">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <ScrollReveal>
              <SectionLabel label={tx(t.projects.label, lang)} />
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
                {tx(t.projects.h1a, lang)}{" "}
                <span className="text-gold-gradient">{tx(t.projects.h1b, lang)}</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <Link href="/projects" className="flex items-center gap-2 text-sm group" style={{ color: "var(--c-gold)" }}>
              <span className="uppercase tracking-widest text-xs font-semibold">
                {tx(t.projects.viewAll, lang)}
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <motion.div
                className="project-card card-gradient group"
                style={{ aspectRatio: i === 0 ? "3/4" : "4/5" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={project.img} alt={tx(project.name, lang)} className="w-full h-full object-cover" />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3
                    className="font-bold transition-colors group-hover:text-[#ebbf5b]"
                    style={{ fontSize: "1.2rem", letterSpacing: "0.04em", color: "#fff" }}
                  >
                    {tx(project.name, lang)}
                  </h3>
                  <div className="flex items-center gap-4 mt-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <span className="eyebrow text-xs">{tx(project.type, lang)}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span className="flex items-center gap-1 text-xs">
                      <MapPin size={10} />
                      {tx(project.location, lang)}
                    </span>
                  </div>
                  <div className="gold-line my-3" />
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {tx(t.projects.area, lang)}: {project.area}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center mt-12">
            <Link href="/projects" className="btn-outline-gold">
              {tx(t.projects.explore, lang)}
              <ArrowRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
