"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import NawaLogo from "@/components/ui/NawaLogo";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";

export default function Footer() {
  const { lang, isDark } = useSite();

  const pages = [
    { href: "/", label: tx(t.nav.home, lang) },
    { href: "/about", label: tx(t.nav.about, lang) },
    { href: "/contact", label: tx(t.nav.contact, lang) },
  ];

  return (
    <footer style={{ background: "var(--c-bg-3)", borderTop: "1px solid var(--c-border)" }}>
      <div
        style={{
          background: isDark
            ? "linear-gradient(135deg, #0f0e0b 0%, #1a1500 50%, #0f0e0b 100%)"
            : "linear-gradient(135deg, var(--c-bg-1) 0%, var(--c-bg-2) 50%, var(--c-bg-1) 100%)",
          borderBottom: "1px solid var(--c-border-hi)",
        }}
        className={isDark ? "surface-dark" : ""}
      >
        <div className="container-luxury grid grid-cols-1 gap-4 py-10 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:py-12 md:py-14">
          <div>
            <p className="eyebrow" style={{ color: "var(--c-gold)" }}>
              {tx(t.footer.ctaLabel, lang)}
            </p>
            <h3
              className="text-xl font-bold mt-2 leading-tight sm:text-2xl"
              style={{ color: isDark ? "var(--c-on-dark-1)" : "var(--c-text-1)" }}
            >
              {tx(t.footer.ctaTitle, lang)}
            </h3>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-self-end md:w-auto md:justify-end">
            <Link href="/contact" className="btn-gold w-full justify-center sm:w-auto shrink-0">
              {tx(t.footer.schedule, lang)}
            </Link>
          </div>
        </div>
      </div>

      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 lg:gap-14">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <NawaLogo height={80} />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--c-text-2)" }}>
              {tx(t.hero.sub, lang)}
            </p>
            <p style={{ color: "var(--c-gold-dim)" }}>{tx(t.brand.tagline, lang)}</p>
          </div>

          <div>
            <h4 className="eyebrow mb-6" style={{ color: "var(--c-gold)" }}>
              {tx(t.footer.nav, lang)}
            </h4>
            <ul className="space-y-3">
              {pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-[#ebbf5b]" style={{ color: "var(--c-text-2)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6" style={{ color: "var(--c-gold)" }}>
              {tx(t.footer.devTypes, lang)}
            </h4>
            <ul className="space-y-3">
              {t.projectTypes.items.map((item) => (
                <li key={item.en} className="text-sm" style={{ color: "var(--c-text-2)" }}>
                  {tx(item, lang)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-6" style={{ color: "var(--c-gold)" }}>
              {tx(t.footer.contact, lang)}
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: "var(--c-gold)" }} />
                <p className="text-sm" style={{ color: "var(--c-text-2)" }}>
                  {tx(t.contact.officeVal, lang)}
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} style={{ color: "var(--c-gold)" }} />
                <a href="tel:+966500000000" className="text-sm hover:text-[#ebbf5b]" style={{ color: "var(--c-text-2)" }}>
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={15} style={{ color: "var(--c-gold)" }} />
                <a href="mailto:info@nawah.sa" className="text-sm hover:text-[#ebbf5b]" style={{ color: "var(--c-text-2)" }}>
                  info@nawah.sa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line my-12" />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:justify-items-center">
          <p className="text-center text-xs md:justify-self-start md:text-start" style={{ color: "var(--c-text-3)" }}>
            © {new Date().getFullYear()} Nawah Real Estate Development. {tx(t.footer.rights, lang)}
          </p>
          <p className="text-center text-xs md:justify-self-end md:text-end" style={{ color: "var(--c-gold-dim)" }}>
            {tx(t.brand.title, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
}
