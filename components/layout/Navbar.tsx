"use client";

import { useState, useEffect, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail, MapPin, Menu, Moon, Phone, Sun, X } from "lucide-react";
import { useSite } from "@/lib/context";
import { t, tx } from "@/lib/i18n";
import NawaLogo from "@/components/ui/NawaLogo";

const MOBILE_DRAWER_GAP = "max-[380px]:w-full max-[380px]:max-w-none w-[min(22rem,calc(100vw-16px))] sm:w-[min(24rem,calc(100vw-24px))]";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const { lang, setLang, setTheme, isAr, isDark } = useSite();
  const menuId = useId();

  const atopHomeHero = pathname === "/" && !scrolled;

  const navLinks = [
    { href: "/", label: tx(t.nav.home, lang) },
    { href: "/about", label: tx(t.nav.about, lang) },
    { href: "/contact", label: tx(t.nav.contact, lang) },
  ];

  const Chevron = isAr ? ChevronLeft : ChevronRight;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navBg = scrolled
    ? isDark
      ? "rgba(10,10,10,0.96)"
      : "rgba(250,248,242,0.97)"
    : "transparent";

  const borderHero = atopHomeHero ? "rgba(255,255,255,0.35)" : "var(--c-border)";

  const linkColor = (
    isActive: boolean,
    isHovered: boolean,
  ): string => {
    if (isActive) return "var(--c-gold-light)";
    if (isHovered) return atopHomeHero ? "#ffffff" : "var(--c-text-1)";
    return atopHomeHero ? "rgba(255,255,255,0.88)" : "var(--c-text-2)";
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 z-50 pt-[env(safe-area-inset-top,0px)]"
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
            <div className="flex h-14 min-h-[3.25rem] items-center justify-between gap-2 sm:h-16 sm:min-h-[3.5rem] lg:h-20 lg:min-h-0 lg:gap-4">
              <Link href="/" className="shrink-0 transition-transform hover:opacity-95 max-lg:scale-[0.92] ltr:origin-left rtl:origin-right">
                <NawaLogo height={48} />
              </Link>

              <nav className="hidden items-center gap-6 xl:gap-10 lg:flex" aria-label="Main">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const isHovered = hoveredLink === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="relative flex flex-col items-center gap-1.5 pb-1"
                    >
                      <span
                        style={{
                          fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-josefin)",
                          fontSize: isAr ? "0.82rem" : "0.65rem",
                          letterSpacing: isAr ? "0.02em" : "0.22em",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          color: linkColor(isActive, isHovered),
                          transition: "color 0.3s",
                        }}
                      >
                        {link.label}
                      </span>
                      <span
                        style={{
                          display: "block",
                          height: "1px",
                          width: isActive || isHovered ? "100%" : "0%",
                          background: isActive ? "linear-gradient(90deg, #b58516, #ebbf5b)" : "rgba(235,191,91,0.45)",
                          transition: "width 0.35s cubic-bezier(0.22,1,0.36,1)",
                        }}
                      />
                      {isActive && (
                        <motion.span
                          layoutId="navDot"
                          style={{
                            position: "absolute",
                            bottom: "-8px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "3px",
                            height: "3px",
                            borderRadius: "50%",
                            background: "#ebbf5b",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 shrink-0">
                <div
                  className="hidden overflow-hidden lg:flex rounded-sm"
                  style={{ border: `1px solid ${borderHero}`, alignItems: "center" }}
                >
                  {(["en", "ar"] as const).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setLang(l)}
                      className="transition-all min-h-[44px] min-w-[44px] px-2.5"
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontFamily: l === "ar" ? "var(--font-tajawal)" : "var(--font-josefin)",
                        background: lang === l ? "rgba(181,133,22,0.85)" : "transparent",
                        color: lang === l ? "#000" : atopHomeHero ? "rgba(255,255,255,0.88)" : "var(--c-text-2)",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {l === "en" ? "EN" : "ع"}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-sm lg:flex"
                  style={{
                    border: `1px solid ${borderHero}`,
                    background: "transparent",
                    color: atopHomeHero ? "rgba(255,255,255,0.88)" : "var(--c-text-2)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
                >
                  {isDark ? (
                    <Sun size={13} style={{ color: atopHomeHero ? "#ffffff" : "#ebbf5b" }} />
                  ) : (
                    <Moon size={13} style={{ color: atopHomeHero ? "rgba(255,255,255,0.95)" : "#b58516" }} />
                  )}
                </button>

                <Link
                  href="/contact"
                  className="btn-gold hidden text-[0.65rem] !px-5 !py-3 lg:inline-flex xl:text-[0.7rem]"
                >
                  {tx(t.nav.inquire, lang)}
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  className="relative flex lg:hidden min-h-[48px] min-w-[48px] items-center justify-center rounded-md border transition-colors [webkit-tap-highlight-color:transparent]"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    borderColor: atopHomeHero ? "rgba(255,255,255,0.35)" : "var(--c-border-lo)",
                    background: atopHomeHero ? "rgba(0,0,0,0.12)" : "var(--c-card)",
                    color: atopHomeHero ? "#ffffff" : "var(--c-text-2)",
                  }}
                  aria-expanded={menuOpen}
                  aria-controls={menuId}
                  aria-label={lang === "ar" ? "فتح القائمة" : "Open menu"}
                >
                  <Menu size={22} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-[var(--c-overlay)] backdrop-blur-sm"
              style={{ paddingTop: "env(safe-area-inset-top)" }}
            />

            <motion.div
              id={menuId}
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label={lang === "ar" ? "القائمة" : "Menu"}
              initial={{ x: isAr ? "-104%" : "104%" }}
              animate={{ x: 0 }}
              exit={{ x: isAr ? "-104%" : "104%" }}
              transition={{ type: "tween", duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className={`fixed top-0 bottom-0 z-[70] flex max-h-[100dvh] flex-col overflow-hidden rounded-none border-[var(--c-border)] bg-[var(--c-bg-4)] shadow-[0_12px_48px_rgba(0,0,0,0.35)] sm:border ${
                isAr
                  ? "left-0 border-r sm:rounded-r-xl sm:border-r-0 sm:border-l"
                  : "right-0 border-l sm:rounded-l-xl"
              } ${MOBILE_DRAWER_GAP}`}
              style={{
                paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
                paddingTop: "env(safe-area-inset-top)",
              }}
            >
              <div className="flex shrink-0 items-center justify-between gap-3 border-b px-4 py-3.5 border-[var(--c-border-lo)] sm:px-5 sm:py-4">
                <Link href="/" onClick={() => setMenuOpen(false)} className="shrink min-w-0">
                  <NawaLogo height={40} />
                </Link>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border [webkit-tap-highlight-color:transparent]"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    borderColor: "var(--c-border-lo)",
                    color: "var(--c-text-3)",
                  }}
                  aria-label={lang === "ar" ? "إغلاق القائمة" : "Close menu"}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
                <div
                  className="grid gap-3 border-b px-4 py-4 border-[var(--c-border-lo)] sm:px-5"
                  style={{ background: "var(--c-card)" }}
                >
                  <div className="min-w-0">
                    <p className="eyebrow mb-2" style={{ color: "var(--c-gold)", fontSize: "0.6rem" }}>
                      {tx(t.brand.name, lang)}
                    </p>
                    <p className="text-sm font-semibold leading-snug" style={{ color: "var(--c-text-1)" }}>
                      {tx(t.brand.title, lang)}
                    </p>
                  </div>
                  <p className="min-w-0 text-xs leading-relaxed" style={{ color: "var(--c-text-2)" }}>
                    {tx(t.brand.tagline, lang)}
                  </p>
                </div>

                <nav
                  className="grid grid-cols-2 gap-2 px-3 pb-2 pt-3 sm:px-4"
                  aria-label={lang === "ar" ? "التنقل" : "Navigation"}
                >
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        className="min-w-0"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 + i * 0.05, duration: 0.25 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex min-h-[4.75rem] flex-col justify-between gap-2 rounded-lg border p-3 transition-colors active:opacity-90 min-[380px]:min-h-[3.25rem] min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between min-[380px]:p-3.5"
                          style={{
                            WebkitTapHighlightColor: "transparent",
                            borderColor: isActive ? "rgba(181,133,22,0.55)" : "var(--c-border-lo)",
                            background: isActive ? "var(--c-card-h)" : "var(--c-bg-1)",
                          }}
                        >
                          <span
                            className="text-[0.8125rem] font-bold uppercase leading-snug tracking-wide break-words"
                            style={{
                              fontFamily: isAr ? "var(--font-tajawal)" : "var(--font-josefin)",
                              letterSpacing: isAr ? "0.02em" : "0.08em",
                              color: isActive ? "var(--c-gold-light)" : "var(--c-text-1)",
                            }}
                          >
                            {link.label}
                          </span>
                          <Chevron
                            size={18}
                            strokeWidth={2}
                            className="shrink-0 self-end min-[380px]:self-center"
                            style={{ color: "var(--c-gold-dim)" }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mx-4 mb-4 rounded-lg border p-4 sm:mx-5 border-[var(--c-border-lo)] bg-[var(--c-bg-1)]">
                  <p className="eyebrow mb-3" style={{ color: "var(--c-gold)", fontSize: "0.58rem" }}>
                    {tx(t.contact.detailsLabel, lang)}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    <li className="col-span-2 flex gap-3 rounded-md border border-[var(--c-border-lo)] bg-[var(--c-card)] p-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-[var(--c-gold)]" aria-hidden />
                      <span className="text-xs leading-relaxed text-[var(--c-text-2)]">{tx(t.contact.officeVal, lang)}</span>
                    </li>
                    <li className="min-w-0">
                      <a
                        href="tel:+966500000000"
                        className="flex h-full min-h-[5.25rem] flex-col justify-between gap-2 rounded-md border border-[var(--c-border-lo)] bg-[var(--c-card)] p-3 text-xs font-medium [webkit-tap-highlight-color:transparent]"
                        style={{
                          WebkitTapHighlightColor: "transparent",
                          color: "var(--c-text-1)",
                        }}
                      >
                        <Phone size={18} className="shrink-0 text-[var(--c-gold)]" aria-hidden />
                        <span className="break-all leading-snug">+966 50 000 0000</span>
                      </a>
                    </li>
                    <li className="min-w-0">
                      <a
                        href="mailto:info@nawah.sa"
                        className="flex h-full min-h-[5.25rem] flex-col justify-between gap-2 rounded-md border border-[var(--c-border-lo)] bg-[var(--c-card)] p-3 text-xs font-medium [webkit-tap-highlight-color:transparent]"
                        style={{ WebkitTapHighlightColor: "transparent", color: "var(--c-text-1)", wordBreak: "break-word" }}
                      >
                        <Mail size={18} className="mt-0.5 shrink-0 text-[var(--c-gold)]" aria-hidden />
                        <span className="break-all leading-snug">info@nawah.sa</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="grid gap-3 border-t px-4 py-4 border-[var(--c-border-lo)] sm:px-5">
                  <div className="flex gap-3">
                    <div className="flex min-h-[48px] flex-1 overflow-hidden rounded-md border border-[var(--c-border)]">
                      {(["en", "ar"] as const).map((l) => (
                        <button
                          key={l}
                          type="button"
                          onClick={() => setLang(l)}
                          className="flex-1 px-3 text-xs font-bold transition-colors [webkit-tap-highlight-color:transparent]"
                          style={{
                            WebkitTapHighlightColor: "transparent",
                            letterSpacing: "0.08em",
                            fontFamily: l === "ar" ? "var(--font-tajawal)" : "var(--font-josefin)",
                            background: lang === l ? "rgba(181,133,22,0.85)" : "transparent",
                            color: lang === l ? "#000" : "var(--c-text-2)",
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          {l === "en" ? "English" : "العربية"}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setTheme(isDark ? "light" : "dark")}
                      className="flex h-12 min-w-[3rem] shrink-0 items-center justify-center rounded-md border border-[var(--c-border)] bg-transparent [webkit-tap-highlight-color:transparent]"
                      style={{ WebkitTapHighlightColor: "transparent", color: "var(--c-text-2)" }}
                      aria-label={lang === "ar" ? "تبديل المظهر" : "Toggle appearance"}
                    >
                      {isDark ? (
                        <Sun size={17} style={{ color: "#ebbf5b" }} />
                      ) : (
                        <Moon size={17} style={{ color: "#b58516" }} />
                      )}
                    </button>
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="btn-gold flex min-h-[52px] w-full justify-center text-[0.72rem]"
                  >
                    {tx(t.nav.inquire, lang)}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
