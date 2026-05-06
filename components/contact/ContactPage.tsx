"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/GoldDivider";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function ContactPage() {
  const { lang } = useSite();
  const [selectedType, setSelectedType] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ minHeight: "50vh", background: "var(--c-bg-3)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(181,133,22,0.1) 0%, transparent 60%)" }}
        />
        <div className="gold-line absolute bottom-0 left-0 right-0" />

        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow mb-4" style={{ color: "#ebbf5b" }}>{tx(t.contact.label, lang)}</p>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "var(--c-text-1)",
              }}
            >
              {tx(t.contact.h1a, lang)}{" "}
              <span className="text-gold-gradient">{tx(t.contact.h1b, lang)}</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed" style={{ color: "var(--c-text-2)" }}>
              {tx(t.contact.sub, lang)}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--c-bg-1)" }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <ScrollReveal>
                <SectionLabel label={tx(t.contact.detailsLabel, lang)} />
              </ScrollReveal>

              {[
                { Icon: MapPin, label: t.contact.officeLabel, value: t.contact.officeVal },
                { Icon: Phone, label: t.contact.generalLabel, value: { en: "+966 11 000 0000", ar: "+966 11 000 0000" }, href: "tel:+96611000000" },
                { Icon: Phone, label: t.contact.hotlineLabel, value: { en: "+966 50 000 0001", ar: "+966 50 000 0001" }, href: "tel:+966500000001", highlight: true },
                { Icon: Mail, label: t.contact.emailLabel, value: { en: "info@nawah.sa", ar: "info@nawah.sa" }, href: "mailto:info@nawah.sa" },
                { Icon: Clock, label: t.contact.hoursLabel, value: t.contact.hoursVal },
              ].map((item, i) => (
                <ScrollReveal key={item.label.en} delay={i * 0.07}>
                  <div
                    className="p-5 flex gap-4"
                    style={{
                      border: `1px solid ${item.highlight ? "var(--c-border-hi)" : "var(--c-border)"}`,
                      background: item.highlight ? "var(--c-card-h)" : "var(--c-card)",
                    }}
                  >
                    <item.Icon size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--c-gold)" }} />
                    <div>
                      <p className="eyebrow mb-1" style={{ color: "var(--c-gold)", fontSize: "0.58rem" }}>
                        {tx(item.label, lang)}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-sm block hover:text-[#ebbf5b]" style={{ color: "var(--c-text-2)" }}>
                          {tx(item.value, lang)}
                        </a>
                      ) : (
                        <p className="text-sm" style={{ color: "var(--c-text-2)" }}>
                          {tx(item.value, lang)}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="lg:col-span-2">
              <ScrollReveal delay={0.05}>
                <SectionLabel label={tx(t.contact.formLabel, lang)} />
              </ScrollReveal>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                  style={{ border: "1px solid var(--c-border-hi)", background: "var(--c-card-h)" }}
                >
                  <CheckCircle size={48} style={{ color: "var(--c-gold)" }} className="mb-6" />
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--c-text-1)" }}>
                    {tx(t.contact.successTitle, lang)}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--c-text-2)" }}>
                    {tx(t.contact.successSub, lang)}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", company: "", message: "" });
                      setSelectedType("");
                    }}
                    className="mt-8 btn-outline-gold"
                    style={{ padding: "0.6rem 1.6rem" }}
                  >
                    {tx(t.contact.sendAnother, lang)}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <ScrollReveal delay={0.1}>
                    <div>
                      <label className="eyebrow block mb-3" style={{ color: "var(--c-text-3)", fontSize: "0.62rem" }}>
                        {tx(t.contact.inquiryType, lang)}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {(lang === "ar" ? t.contact.inquiryTypes.ar : t.contact.inquiryTypes.en).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className="px-4 py-2 text-xs transition-all duration-300"
                            style={{
                              border: selectedType === type ? "1px solid #ebbf5b" : "1px solid var(--c-border)",
                              background: selectedType === type ? "var(--c-card-h)" : "transparent",
                              color: selectedType === type ? "#ebbf5b" : "var(--c-text-2)",
                              letterSpacing: "0.08em",
                            }}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.12}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="eyebrow block mb-2" style={{ color: "var(--c-text-3)", fontSize: "0.6rem" }}>{tx(t.contact.name, lang)}</label>
                        <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={tx(t.contact.namePh, lang)} className="luxury-input" />
                      </div>
                      <div>
                        <label className="eyebrow block mb-2" style={{ color: "var(--c-text-3)", fontSize: "0.6rem" }}>{tx(t.contact.email, lang)}</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={tx(t.contact.emailPh, lang)} className="luxury-input" />
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.14}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="eyebrow block mb-2" style={{ color: "var(--c-text-3)", fontSize: "0.6rem" }}>{tx(t.contact.phone, lang)}</label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={tx(t.contact.phonePh, lang)} className="luxury-input" />
                      </div>
                      <div>
                        <label className="eyebrow block mb-2" style={{ color: "var(--c-text-3)", fontSize: "0.6rem" }}>{tx(t.contact.company, lang)}</label>
                        <input type="text" name="company" value={form.company} onChange={handleChange} placeholder={tx(t.contact.companyPh, lang)} className="luxury-input" />
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.16}>
                    <div>
                      <label className="eyebrow block mb-2" style={{ color: "var(--c-text-3)", fontSize: "0.6rem" }}>{tx(t.contact.message, lang)}</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder={tx(t.contact.messagePh, lang)}
                        className="luxury-input resize-none"
                      />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.18}>
                    <button type="submit" className="btn-gold w-full sm:w-auto justify-center">
                      {tx(t.contact.send, lang)}
                      <Send size={14} />
                    </button>
                    <p className="mt-3 text-xs" style={{ color: "var(--c-text-3)" }}>
                      {tx(t.contact.privacy, lang)}
                    </p>
                  </ScrollReveal>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
