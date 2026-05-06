"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Layers, Calendar, CheckCircle, ChevronLeft, ChevronRight, Download, Phone, X } from "lucide-react";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import type { Project } from "@/lib/projects";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { GoldDivider } from "@/components/ui/GoldDivider";

const tagColors: Record<string, string> = {
  Flagship: "#b58516", Exclusive: "#8a6210", Landmark: "#b58516",
  "New Launch": "#2d6a2d", Premium: "#1a4a7a", "Coming Soon": "#5a3a8a",
  "New Project": "#2d6a2d", "Ultra Luxury": "#8a1010",
};

export default function ProjectDetailPage({ project, related }: { project: Project; related: Project[] }) {
  const { lang, isAr, isDark } = useSite();
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox,  setLightbox]  = useState<number | null>(null);

  const name     = project.name[lang];
  const category = project.category[lang];
  const location = project.location[lang];
  const status   = project.status[lang];
  const desc     = project.longDesc[lang];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "85vh", display: "flex", alignItems: "flex-end" }}>
        <div className="absolute inset-0">
          <motion.img
            src={project.gallery[activeImg] ?? project.img}
            alt={name}
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            key={activeImg}
            transition={{ duration: 1.2, ease: [0.0, 0.0, 0.2, 1] }}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%)" }} />
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-6 right-6 z-10 flex gap-2 flex-wrap justify-end">
          {project.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              style={{
                width: "52px", height: "40px", overflow: "hidden", cursor: "pointer",
                border: `2px solid ${activeImg === i ? "#ebbf5b" : "rgba(255,255,255,0.25)"}`,
                padding: 0, background: "none",
                transition: "border-color 0.3s",
              }}
            >
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="container-luxury relative z-10 pb-16 pt-40">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
            {/* Back */}
            <Link
              href="/projects"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                color: "rgba(255,255,255,0.55)", fontSize: "0.72rem", letterSpacing: "0.18em",
                textTransform: "uppercase", marginBottom: "1.5rem",
                fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-josefin)",
              }}
            >
              {isAr ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
              {tx(t.common.backToProjects, lang)}
            </Link>

            {/* Tag */}
            <div style={{ marginBottom: "1rem" }}>
              <span className="eyebrow" style={{ background: tagColors[project.tag] ?? "#b58516", color: "#fff", padding: "0.3rem 0.9rem", fontSize: "0.6rem" }}>
                {project.tag}
              </span>
            </div>

            <h1 style={{
              fontSize: "clamp(2.5rem, 6vw, 6rem)", fontWeight: 700,
              letterSpacing: "-0.025em", lineHeight: 0.95, color: "#fff",
              fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-josefin)",
            }}>
              {name}
            </h1>
            <p style={{ fontFamily: isAr ? "var(--font-josefin)" : "var(--font-tajawal)", color: "rgba(235,191,91,0.65)", fontSize: "1.1rem", marginTop: "0.5rem" }}>
              {isAr ? project.name.en : project.name.ar}
            </p>

            {/* Quick specs */}
            <div
              className="luxury-data-grid luxury-data-grid--facts mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(181,133,22,0.2)" }}
            >
              {[
                { Icon: MapPin,   label: tx(t.common.location, lang), value: location  },
                { Icon: Layers,   label: tx(t.common.area,     lang), value: project.area   },
                { Icon: Layers,   label: tx(t.common.units,    lang), value: project.units  },
                { Icon: Calendar, label: tx(t.common.status,   lang), value: status    },
              ].map((s) => (
                <div key={s.label}>
                  <p className="eyebrow" style={{ color: "#b58516", fontSize: "0.58rem" }}>{s.label}</p>
                  <p style={{ color: "#fff", fontSize: "0.9rem", marginTop: "3px", fontWeight: 600 }}>{s.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section-padding" style={{ background: "var(--c-bg-1)" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* LEFT: Description + Gallery + Amenities + Features */}
            <div className="lg:col-span-2 space-y-16">

              {/* Description */}
              <div>
                <ScrollReveal>
                  <GoldDivider className="mb-4" />
                  <p className="eyebrow" style={{ color: "var(--c-gold)" }}>{tx(t.nav.about, lang)}</p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <p style={{
                    color: "var(--c-text-2)", fontSize: "1rem", lineHeight: 2,
                    marginTop: "1.25rem", letterSpacing: "0.02em",
                    fontFamily: isAr ? "var(--font-tajawal)" : undefined,
                    direction: isAr ? "rtl" : "ltr",
                  }}>
                    {desc}
                  </p>
                </ScrollReveal>
              </div>

              {/* Gallery Grid */}
              <div>
                <ScrollReveal>
                  <p className="eyebrow mb-6" style={{ color: "var(--c-gold)" }}>
                    {tx(t.common.gallery, lang)}
                  </p>
                </ScrollReveal>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.gallery.map((img, i) => (
                    <ScrollReveal key={i} delay={i * 0.06}>
                      <button
                        onClick={() => setLightbox(i)}
                        className="group overflow-hidden"
                        style={{ display: "block", width: "100%", aspectRatio: i === 0 ? "16/10" : "1/1", border: "none", padding: 0, cursor: "zoom-in", gridColumn: i === 0 ? "span 2" : undefined }}
                      >
                        <img
                          src={img} alt=""
                          style={{
                            width: "100%", height: "100%", objectFit: "cover",
                            transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                          }}
                          className="group-hover:scale-110"
                        />
                      </button>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <ScrollReveal>
                  <p className="eyebrow mb-6" style={{ color: "var(--c-gold)" }}>
                    {tx(t.common.amenities, lang)}
                  </p>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.amenities.map((a, i) => (
                    <ScrollReveal key={i} delay={i * 0.06}>
                      <div style={{
                        display: "flex", alignItems: "center", gap: "0.75rem",
                        padding: "1rem 1.25rem",
                        border: "1px solid var(--c-border)",
                        background: "var(--c-card)",
                      }}>
                        <CheckCircle size={14} style={{ color: "#b58516", flexShrink: 0 }} />
                        <span style={{
                          fontSize: "0.85rem", color: "var(--c-text-1)",
                          fontFamily: isAr ? "var(--font-tajawal)" : undefined,
                        }}>
                          {isAr ? a.ar : a.en}
                        </span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <ScrollReveal>
                  <p className="eyebrow mb-6" style={{ color: "var(--c-gold)" }}>
                    {isAr ? "المميزات الرئيسية" : "Key Features"}
                  </p>
                </ScrollReveal>
                <div className="space-y-3">
                  {project.features.map((f, i) => (
                    <ScrollReveal key={i} delay={i * 0.05}>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span style={{ width: "24px", height: "1px", background: "linear-gradient(90deg, #b58516, #ebbf5b)", flexShrink: 0 }} />
                        <p style={{
                          fontSize: "0.9rem", color: "var(--c-text-2)",
                          fontFamily: isAr ? "var(--font-tajawal)" : undefined,
                        }}>
                          {isAr ? f.ar : f.en}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Sticky investment card + CTA */}
            <div>
              <div style={{ position: "sticky", top: "7rem" }}>
                {/* Investment Summary */}
                <ScrollReveal>
                  <div style={{ border: "1px solid var(--c-border-hi)", background: "var(--c-bg-2)", padding: "2rem", marginBottom: "1.5rem" }}>
                    <p className="eyebrow mb-4" style={{ color: "var(--c-gold)" }}>
                      {tx(t.common.investment, lang)}
                    </p>

                    {/* ROI highlight */}
                    <div style={{ textAlign: "center", padding: "1.5rem", background: "rgba(181,133,22,0.08)", marginBottom: "1.5rem", border: "1px solid var(--c-border)" }}>
                      <p className="eyebrow mb-1" style={{ color: "var(--c-text-3)", fontSize: "0.58rem" }}>
                        {isAr ? "العائد السنوي المتوقع" : "Expected Annual ROI"}
                      </p>
                      <p className="text-gold-gradient" style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1 }}>
                        {project.investment.roi}
                      </p>
                    </div>

                    {[
                      { label: tx(t.common.type, lang),   value: isAr ? project.investment.type.ar   : project.investment.type.en   },
                      { label: tx(t.common.status, lang), value: isAr ? project.status.ar             : project.status.en             },
                      { label: isAr ? "نوع الملكية" : "Ownership", value: isAr ? project.investment.tenure.ar : project.investment.tenure.en },
                    ].map((row) => (
                      <div key={row.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0.75rem 0", borderBottom: "1px solid var(--c-border-lo)" }}>
                        <span className="eyebrow" style={{ color: "var(--c-text-3)", fontSize: "0.6rem" }}>{row.label}</span>
                        <span style={{ fontSize: "0.8rem", color: "var(--c-text-1)", textAlign: isAr ? "left" : "right", maxWidth: "60%", fontFamily: isAr ? "var(--font-tajawal)" : undefined }}>
                          {row.value}
                        </span>
                      </div>
                    ))}

                    <p style={{ fontSize: "0.75rem", color: "var(--c-text-3)", lineHeight: 1.7, marginTop: "1rem", fontFamily: isAr ? "var(--font-tajawal)" : undefined }}>
                      {isAr ? project.investment.note.ar : project.investment.note.en}
                    </p>
                  </div>
                </ScrollReveal>

                {/* CTAs */}
                <ScrollReveal delay={0.1}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <Link href="/contact" className="btn-gold" style={{ justifyContent: "center" }}>
                      {tx(t.common.inquire, lang)}
                    </Link>
                    <a
                      href="#"
                      className="btn-outline-gold"
                      style={{ justifyContent: "center" }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Download size={13} />
                      {tx(t.common.download, lang)}
                    </a>
                    <a href="tel:+966500000001" style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                      padding: "0.9rem", border: "1px solid var(--c-border-lo)",
                      fontSize: "0.75rem", color: "var(--c-text-2)", letterSpacing: "0.1em",
                      fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-josefin)",
                    }}>
                      <Phone size={13} style={{ color: "#b58516" }} />
                      {isAr ? "خط المستثمرين: ٩٦٦-٥٠-٠٠٠-٠٠٠١" : "+966 50 000 0001"}
                    </a>
                  </div>
                </ScrollReveal>

                {/* Category badge */}
                <ScrollReveal delay={0.15}>
                  <div style={{ marginTop: "1.5rem", padding: "1rem", border: "1px solid var(--c-border-lo)", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <MapPin size={14} style={{ color: "#b58516", flexShrink: 0 }} />
                    <div>
                      <p className="eyebrow" style={{ color: "var(--c-gold)", fontSize: "0.58rem" }}>{tx(t.common.location, lang)}</p>
                      <p style={{ color: "var(--c-text-2)", fontSize: "0.85rem", marginTop: "2px", fontFamily: isAr ? "var(--font-tajawal)" : undefined }}>
                        {location}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Projects ── */}
      <section className="section-padding" style={{ background: "var(--c-bg-2)" }}>
        <div className="container-luxury">
          <ScrollReveal className="mb-10">
            <GoldDivider className="mb-4" />
            <p className="eyebrow" style={{ color: "var(--c-gold)" }}>{tx(t.common.related, lang)}</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "var(--c-text-1)", marginTop: "0.5rem", fontFamily: isAr ? "var(--font-tajawal)" : undefined }}>
              {isAr ? "مشاريع أخرى" : "More Developments"}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.08}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                  <Link href={`/projects/${p.id}`} style={{ display: "block", border: "1px solid var(--c-border)", background: "var(--c-bg-1)", overflow: "hidden" }}>
                    <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
                      <img src={p.img} alt={p.name[lang]} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                        className="hover:scale-105"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent 50%)" }} />
                      <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem" }}>
                        <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", fontFamily: isAr ? "var(--font-tajawal)" : undefined }}>{p.name[lang]}</p>
                        <p style={{ color: "rgba(235,191,91,0.8)", fontSize: "0.72rem", marginTop: "3px" }}>{p.category[lang]}</p>
                      </div>
                    </div>
                    <div style={{ padding: "1rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--c-text-3)", fontSize: "0.75rem" }}>
                        <MapPin size={10} style={{ color: "#b58516" }} />
                        {p.location[lang]}
                      </div>
                      <span style={{ color: "var(--c-gold-light)", fontSize: "0.8rem" }}>
                        {isAr ? <ChevronLeft size={15} /> : <ChevronRight size={15} />}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, zIndex: 100,
              background: "rgba(0,0,0,0.95)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "#fff", cursor: "pointer", zIndex: 101 }}
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + project.gallery.length) % project.gallery.length); }}
              style={{ position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "rgba(181,133,22,0.3)", border: "none", color: "#fff", cursor: "pointer", padding: "1rem 0.75rem" }}
            >
              <ChevronLeft size={22} />
            </button>
            <motion.img
              key={lightbox}
              src={project.gallery[lightbox]}
              alt=""
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % project.gallery.length); }}
              style={{ position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "rgba(181,133,22,0.3)", border: "none", color: "#fff", cursor: "pointer", padding: "1rem 0.75rem" }}
            >
              <ChevronRight size={22} />
            </button>
            <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.5rem" }}>
              {project.gallery.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setLightbox(i); }} style={{
                  width: i === lightbox ? "24px" : "8px", height: "4px",
                  background: i === lightbox ? "#ebbf5b" : "rgba(255,255,255,0.3)",
                  border: "none", cursor: "pointer", transition: "all 0.3s", borderRadius: "2px",
                }} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
