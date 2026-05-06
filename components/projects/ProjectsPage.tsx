"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSite } from "@/lib/context";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { MapPin, ArrowRight, SlidersHorizontal } from "lucide-react";

const categories = [
  "All",
  "Luxury Compounds",
  "Private Villas",
  "Premium Apartments",
  "Commercial Towers",
  "Business Centers",
  "Retail Destinations",
];

const projects = [
  {
    id: 1,
    name: "Nawah Palms",
    nameAr: "نخيل نواة",
    category: "Luxury Compounds",
    location: "North Riyadh",
    area: "45,000 m²",
    units: "120 Units",
    status: "Delivering 2025",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85",
    tag: "Flagship",
    desc: "A gated luxury compound offering villas and townhouses with resort-style amenities.",
  },
  {
    id: 2,
    name: "Al Noor Villas",
    nameAr: "فلل النور",
    category: "Private Villas",
    location: "Diplomatic Quarter",
    area: "12,000 m²",
    units: "18 Villas",
    status: "Available",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=85",
    tag: "Exclusive",
    desc: "Bespoke private villas in Riyadh's most prestigious neighborhood.",
  },
  {
    id: 3,
    name: "Nawah Tower",
    nameAr: "برج نواة",
    category: "Commercial Towers",
    location: "King Fahd Road",
    area: "28,000 m²",
    units: "42 Floors",
    status: "Under Construction",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=85",
    tag: "Landmark",
    desc: "Grade-A commercial tower at the heart of Riyadh's business district.",
  },
  {
    id: 4,
    name: "Serenity Residences",
    nameAr: "مساكن الهدوء",
    category: "Premium Apartments",
    location: "Al Olaya District",
    area: "19,000 m²",
    units: "200 Apartments",
    status: "Delivering 2026",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=85",
    tag: "New Launch",
    desc: "Ultra-premium sky apartments with panoramic city views and concierge services.",
  },
  {
    id: 5,
    name: "Nawah Business Hub",
    nameAr: "مركز نواة للأعمال",
    category: "Business Centers",
    location: "King Abdullah Financial District",
    area: "22,000 m²",
    units: "15 Floors",
    status: "Available",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85",
    tag: "Premium",
    desc: "An integrated business hub in KAFD offering flexible Grade-A office spaces.",
  },
  {
    id: 6,
    name: "The Golden Mile",
    nameAr: "الميل الذهبي",
    category: "Retail Destinations",
    location: "West Riyadh",
    area: "35,000 m²",
    units: "180 Retail Units",
    status: "Delivering 2026",
    img: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800&q=85",
    tag: "Coming Soon",
    desc: "A curated luxury retail destination blending high-end brands with premium dining.",
  },
  {
    id: 7,
    name: "Nawah Gardens",
    nameAr: "حدائق نواة",
    category: "Luxury Compounds",
    location: "East Riyadh",
    area: "38,000 m²",
    units: "95 Units",
    status: "Delivering 2026",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=85",
    tag: "New Project",
    desc: "Lush garden compound with expansive green spaces and premium lifestyle facilities.",
  },
  {
    id: 8,
    name: "Crown Villas",
    nameAr: "فلل تاج",
    category: "Private Villas",
    location: "Al Nakheel",
    area: "8,500 m²",
    units: "12 Villas",
    status: "Available",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=85",
    tag: "Ultra Luxury",
    desc: "Crown collection of ultra-luxury villas featuring private pools and bespoke interiors.",
  },
];

const tagColors: Record<string, string> = {
  Flagship: "#b58516",
  Exclusive: "#8a6210",
  Landmark: "#b58516",
  "New Launch": "#2d6a2d",
  Premium: "#1a4a7a",
  "Coming Soon": "#5a3a8a",
  "New Project": "#2d6a2d",
  "Ultra Luxury": "#8a1010",
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const { isDark } = useSite();

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[48svh] items-end overflow-hidden pb-14 pt-[max(6.5rem,calc(env(safe-area-inset-top,0px)+5rem))] sm:min-h-[52vh] sm:pb-20 sm:pt-36 md:min-h-[55vh] lg:pb-24 lg:pt-40">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80"
            alt="Nawah Projects"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)",
            }}
          />
        </div>

        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4" style={{ color: "#ebbf5b" }}>
              Our Portfolio
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
              Landmark{" "}
              <span className="text-gold-gradient">Developments</span>
            </h1>
            <p
              className="arabic mt-3 text-lg"
              style={{ color: "rgba(235,191,91,0.65)" }}
            >
              مشاريعنا المتميزة
            </p>
            <p
              className="mt-5 max-w-xl text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              From luxury compounds to landmark towers — every Nawah development is a
              statement of quality, vision, and lasting value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <div
        className="sticky top-20 z-40 py-4"
        style={{
          background: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(181,133,22,0.15)",
        }}
      >
        <div className="container-luxury">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <SlidersHorizontal size={14} style={{ color: "#b58516", flexShrink: 0 }} />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="flex-shrink-0 px-4 py-2 text-xs transition-all duration-300"
                style={{
                  background:
                    active === cat ? "rgba(181,133,22,0.9)" : "transparent",
                  color: active === cat ? "#000" : "rgba(255,255,255,0.5)",
                  border:
                    active === cat
                      ? "1px solid #b58516"
                      : "1px solid rgba(255,255,255,0.1)",
                  fontFamily: "var(--font-josefin)",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section
        className="section-padding"
        style={{ background: "#0a0a0a" }}
      >
        <div className="container-luxury">
          <div className="mb-6 flex items-center justify-between">
            <p
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em" }}
            >
              Showing{" "}
              <span style={{ color: "#ebbf5b" }}>{filtered.length}</span>{" "}
              {active === "All" ? "projects" : active.toLowerCase()}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="luxury-data-grid luxury-data-grid--wide"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <ProjectCard project={project} tagColors={tagColors} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Investment CTA */}
      <section
        className={isDark ? "surface-dark section-padding" : "section-padding"}
        style={{
          background: isDark
            ? "linear-gradient(135deg, #0f0e00, #1a1500, #0f0e00)"
            : "linear-gradient(135deg, var(--c-bg-1), var(--c-bg-2), var(--c-bg-1))",
          borderTop: "1px solid var(--c-border)",
        }}
      >
        <div className="container-luxury text-center">
          <ScrollReveal>
            <p className="eyebrow mb-4" style={{ color: "var(--c-gold)" }}>
              Invest With Confidence
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                color: isDark ? "#fff" : "var(--c-text-1)",
                letterSpacing: "-0.01em",
              }}
            >
              Interested in a{" "}
              <span className="text-gold-gradient">Nawah Property?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p
              className="mt-5 mx-auto max-w-lg text-sm leading-relaxed"
              style={{ color: isDark ? "rgba(255,255,255,0.55)" : "var(--c-text-2)" }}
            >
              Our investment advisors are ready to guide you through available units,
              pricing, and exclusive pre-launch opportunities.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div className="mx-auto mt-8 grid max-w-xl w-full grid-cols-1 gap-3 min-[480px]:max-w-none min-[480px]:grid-cols-2 md:justify-center">
              <Link href="/contact" className="btn-gold w-full min-[480px]:w-auto shrink-0 justify-center">
                Request Investment Brief
                <ArrowRight size={15} />
              </Link>
              <a href="tel:+966500000001" className="btn-outline-gold w-full min-[480px]:w-auto shrink-0 justify-center">
                Call Investor Hotline
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function ProjectCard({
  project,
  tagColors,
}: {
  project: (typeof projects)[0];
  tagColors: Record<string, string>;
}) {
  return (
    <div
      className="group flex flex-col overflow-hidden h-full"
      style={{ border: "1px solid rgba(181,133,22,0.12)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
          }}
        />

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span
            className="eyebrow px-2.5 py-1"
            style={{
              background: tagColors[project.tag] || "#b58516",
              color: "#fff",
              fontSize: "0.58rem",
            }}
          >
            {project.tag}
          </span>
        </div>

        {/* Status */}
        <div className="absolute top-3 right-3">
          <span
            className="eyebrow px-2.5 py-1 text-xs"
            style={{
              background: "rgba(0,0,0,0.7)",
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.58rem",
              backdropFilter: "blur(4px)",
            }}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="flex flex-col flex-1 p-5"
        style={{ background: "#111111" }}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p
              className="arabic text-xs mb-0.5"
              style={{ color: "rgba(181,133,22,0.55)" }}
            >
              {project.nameAr}
            </p>
            <h3
              className="font-bold transition-colors group-hover:text-[#ebbf5b]"
              style={{ fontSize: "1.05rem", letterSpacing: "0.04em", color: "#fff" }}
            >
              {project.name}
            </h3>
          </div>
          <span
            className="eyebrow text-xs flex-shrink-0 pt-0.5"
            style={{ color: "rgba(181,133,22,0.6)" }}
          >
            {project.category.split(" ")[0]}
          </span>
        </div>

        <p
          className="text-xs leading-relaxed mb-4 flex-1"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {project.desc}
        </p>

        <div className="luxury-data-grid luxury-data-grid--facts border-t pt-4" style={{ borderColor: "rgba(181,133,22,0.22)" }}>
          <div>
            <p className="eyebrow" style={{ color: "#b58516", fontSize: "0.55rem" }}>
              Area
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
              {project.area}
            </p>
          </div>
          <div>
            <p className="eyebrow" style={{ color: "#b58516", fontSize: "0.55rem" }}>
              Scale
            </p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>
              {project.units}
            </p>
          </div>
          <div className="col-span-full flex items-center gap-1.5">
            <MapPin size={10} style={{ color: "#b58516", flexShrink: 0 }} />
            <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.4)" }}>
              {project.location}
            </span>
          </div>
        </div>

        <Link
          href="/contact"
          className="mt-4 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-[rgba(181,133,22,0.15)]"
          style={{
            border: "1px solid rgba(181,133,22,0.25)",
            color: "#ebbf5b",
            letterSpacing: "0.15em",
          }}
        >
          Inquire About This Project
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
