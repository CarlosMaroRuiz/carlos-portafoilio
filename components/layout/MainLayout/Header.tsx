"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const { t, lang, toggle } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#resume", label: t.nav.resume },
    { href: "#portfolio", label: t.nav.portfolio },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="px-8 py-6 flex justify-between items-center text-sm tracking-wide">
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-muted font-medium items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white p-2 -ml-2"
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
        
        {/* Language Toggle (Always visible on the right) */}
        <div className="flex items-center">
          <button
            onClick={toggle}
            className="flex items-center space-x-1 hover:text-white transition-colors"
            aria-label="Toggle language"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <span className={lang === "es" ? "font-bold text-white" : "text-white/50"}>ES</span>
            <span className="text-white/30">/</span>
            <span className={lang === "en" ? "font-bold text-white" : "text-white/50"}>EN</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-white/5 bg-black/95 overflow-hidden"
          >
            <ul className="flex flex-col px-8 py-4 space-y-4 text-muted font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="block hover:text-white transition-colors"
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