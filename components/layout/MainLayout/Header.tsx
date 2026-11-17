"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";

export const Header = () => {
  const { t, lang, toggle } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const sectionIds = useMemo(() => ["home", "portfolio", "resume", "about"], []);
  const active = useActiveSection(sectionIds);

  const navLinks = [
    { href: "#home", label: t.nav.home, id: "home" },
    { href: "#portfolio", label: t.nav.portfolio, id: "portfolio" },
    { href: "#resume", label: t.nav.resume, id: "resume" },
    { href: "#about", label: t.nav.about, id: "about" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/20 border-dotted bg-[#080808]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-sm tracking-wide sm:px-8 lg:px-12">

        <Link
          href="#home"
          className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:text-muted"
        >
          Carlos Mario
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative transition-colors pb-1 ${
                    active === link.id
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-foreground"
                      transition={{ type: "spring", stiffness: 500, damping: 40 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="p-2 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="flex items-center">
          <button
            onClick={toggle}
            className="flex items-center space-x-1 text-muted transition-colors hover:text-foreground"
            aria-label="Toggle language"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span className={lang === "es" ? "font-bold text-foreground" : "text-muted/60"}>ES</span>
            <span className="text-muted/40">/</span>
            <span className={lang === "en" ? "font-bold text-foreground" : "text-muted/60"}>EN</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/20 border-dotted bg-[#080808]"
          >
            <ul className="flex flex-col space-y-4 px-5 py-5 font-medium sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block transition-colors ${
                      active === link.id ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};