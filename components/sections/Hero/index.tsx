"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SocialBar } from "./SocialBar";
import { useLang } from "@/context/LangContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroData, SocialLink } from "@/core/models/portfolio";

export interface HeroProps {
  data: HeroData;
  socialLinks: SocialLink[];
}

export default function Hero({ data: hero, socialLinks }: HeroProps) {
  const { t } = useLang();

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 px-8 md:px-24 w-full max-w-5xl">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none mb-2">
            {hero.name.first}
            <br />
            <span className="text-white">{hero.name.last}</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="text-xl md:text-3xl font-light tracking-widest text-muted mb-10 uppercase">
            {t.hero.role}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex gap-6">
            <Link
              href="#resume"
              className="px-8 py-3 border border-white rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              {t.hero.ctaResume}
            </Link>
            <Link
              href="#portfolio"
              className="px-8 py-3 border border-accent text-accent rounded-full text-sm uppercase tracking-widest hover:bg-accent hover:text-black transition-colors"
            >
              {t.hero.ctaPortfolio}
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="right" delay={0.4}>
        <SocialBar links={socialLinks} />
      </ScrollReveal>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
