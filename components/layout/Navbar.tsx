"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import NawaLogo from "@/components/ui/NawaLogo";

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const { lang, setLang, setTheme, isAr, isDark } = useSite();

  /* Nav over home hero stays light-on-photo in site light theme */
  const atopHomeHero = pathname === "/" && !scrolled;

  const navLinks = [
    { href: "/",         label: tx(t.nav.home,     lang) },
    { href: "/about",    label: tx(t.nav.about,    lang) },
    { href: "/contact",  label: tx(t.nav.contact,  lang) },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navBg = scrolled
    ? isDark
      ? "rgba(10,10,10,0.96)"
      : "rgba(250,248,242,0.97)"
    : "transparent";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
      >
        <div
          style={{
            background: navBg,
            backdropFilter: scrolled ? "blur(24px)" : "none",
            borderBottom: scrolled ? `1px solid var(--c-border)` : "none",
            boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.3)" : "none",
            transition: "background 0.5s, backdrop-filter 0.5s, border-color 0.5s, box-shadow 0.5s",
          }}
        >
          <div className="container-luxury">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "5rem" }}>

              {/* ── Logo ── */}
              <Link href="/">
                <NawaLogo height={48} />
              </Link>

              {/* ── Desktop Nav ── */}
              <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden lg:flex">
                {navLinks.map((link) => {
                  const isActive  = pathname === link.href;
                  const isHovered = hoveredLink === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}
                    >
                      <span style={{
                        fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-josefin)",
                        fontSize: isAr ? "0.85rem" : "0.68rem",
                        letterSpacing: isAr ? "0.02em" : "0.28em",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: isActive
                          ? "var(--c-gold-light)"
                          : isHovered
                            ? atopHomeHero
                              ? "#ffffff"
                              : "var(--c-text-1)"
                            : atopHomeHero
                              ? "rgba(255,255,255,0.88)"
                              : "var(--c-text-2)",
                        transition: "color 0.3s",
                      }}>
                        {link.label}
                      </span>
                      <span style={{
                        display: "block", height: "1px",
                        width: (isActive || isHovered) ? "100%" : "0%",
                        background: isActive ? "linear-gradient(90deg, #b58516, #ebbf5b)" : "rgba(235,191,91,0.45)",
                        transition: "width 0.35s cubic-bezier(0.22,1,0.36,1)",
                      }} />
                      {isActive && (
                        <motion.span
                          layoutId="navDot"
                          style={{
                            position: "absolute", bottom: "-10px",
                            left: "50%", transform: "translateX(-50%)",
                            width: "3px", height: "3px",
                            borderRadius: "50%", background: "#ebbf5b",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* ── Controls: Lang + Theme + CTA + Hamburger ── */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>

                {/* Language toggle */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: `1px solid ${atopHomeHero ? "rgba(255,255,255,0.35)" : "var(--c-border)"}`,
                    overflow: "hidden",
                  }}
                  className="hidden lg:flex"
                >
                  {(["en", "ar"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      style={{
                        padding: "0.35rem 0.75rem",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: l === "ar" ? "var(--font-tajawal)" : "var(--font-josefin)",
                        background: lang === l ? "rgba(181,133,22,0.85)" : "transparent",
                        color:
                          lang === l ? "#000" : atopHomeHero ? "rgba(255,255,255,0.88)" : "var(--c-text-2)",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.25s",
                      }}
                    >
                      {l === "en" ? "EN" : "ع"}
                    </button>
                  ))}
                </div>

                {/* Theme toggle */}
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="hidden lg:flex"
                  style={{
                    width: "2rem", height: "2rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: `1px solid ${atopHomeHero ? "rgba(255,255,255,0.35)" : "var(--c-border)"}`,
                    background: "transparent",
                    color: atopHomeHero ? "rgba(255,255,255,0.88)" : "var(--c-text-2)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  aria-label="Toggle theme"
                >
                  {isDark
                    ? <Sun size={13} style={{ color: atopHomeHero ? "#ffffff" : "#ebbf5b" }} />
                    : (
                      <Moon
                        size={13}
                        style={{ color: atopHomeHero ? "rgba(255,255,255,0.95)" : "#b58516" }}
                      />
                    )
                  }
                </button>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="btn-gold hidden lg:inline-flex"
                  style={{ padding: "0.6rem 1.6rem", fontSize: "0.7rem" }}
                >
                  {tx(t.nav.inquire, lang)}
                </Link>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMenuOpen(true)}
                  className="lg:hidden"
                  style={{
                    padding: "0.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: atopHomeHero ? "rgba(255,255,255,0.92)" : "var(--c-text-2)",
                  }}
                >
                  <Menu size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="bg"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 60, background: "var(--c-overlay)", backdropFilter: "blur(6px)" }}
            />

            <motion.div
              key="drawer"
              initial={{ x: isAr ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isAr ? "-100%" : "100%" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "fixed", top: 0, bottom: 0, zIndex: 70,
                [isAr ? "left" : "right"]: 0,
                width: "20rem",
                background: "var(--c-bg-4)",
                borderLeft: isAr ? "none" : "1px solid var(--c-border)",
                borderRight: isAr ? "1px solid var(--c-border)" : "none",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem", borderBottom: "1px solid var(--c-border-lo)" }}>
                <NawaLogo height={36} />
                <button onClick={() => setMenuOpen(false)} style={{ padding: "0.4rem", background: "none", border: "none", cursor: "pointer", color: "var(--c-text-3)" }}>
                  <X size={19} />
                </button>
              </div>

              {/* Links */}
              <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 2rem" }}>
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.href}
                      initial={{ opacity: 0, x: isAr ? -24 : 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link href={link.href} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "1rem 0", borderBottom: "1px solid var(--c-border-lo)",
                      }}>
                        <span style={{
                          fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-josefin)",
                          fontSize: isAr ? "1rem" : "0.8rem",
                          fontWeight: 700,
                          letterSpacing: isAr ? "0.01em" : "0.18em",
                          textTransform: "uppercase",
                          color: isActive ? "var(--c-gold-light)" : "var(--c-text-1)",
                        }}>
                          {link.label}
                        </span>
                        {isActive && <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ebbf5b" }} />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Mobile controls */}
              <div style={{ padding: "1.5rem 2rem", borderTop: "1px solid var(--c-border-lo)", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Lang + Theme row */}
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                  <div style={{ display: "flex", border: "1px solid var(--c-border)", overflow: "hidden", flex: 1 }}>
                    {(["en", "ar"] as const).map((l) => (
                      <button key={l} onClick={() => setLang(l)} style={{
                        flex: 1, padding: "0.5rem",
                        fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
                        fontFamily: l === "ar" ? "var(--font-tajawal)" : "var(--font-josefin)",
                        background: lang === l ? "rgba(181,133,22,0.85)" : "transparent",
                        color: lang === l ? "#000" : "var(--c-text-2)",
                        border: "none", cursor: "pointer",
                      }}>
                        {l === "en" ? "English" : "العربية"}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setTheme(isDark ? "light" : "dark")} style={{
                    width: "2.5rem", height: "2.5rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    border: "1px solid var(--c-border)", background: "transparent",
                    color: "var(--c-text-2)", cursor: "pointer",
                  }}>
                    {isDark ? <Sun size={15} style={{ color: "#ebbf5b" }} /> : <Moon size={15} style={{ color: "#b58516" }} />}
                  </button>
                </div>

                <Link href="/contact" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                  {tx(t.nav.inquire, lang)}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
