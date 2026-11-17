"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CubeArtwork } from "@/components/ui/CubeArtwork";
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
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="w-full px-4 pb-8 pt-5 sm:px-8 sm:pb-12 lg:px-12 lg:pt-8">
      <div className="mx-auto grid min-h-[620px] max-w-7xl overflow-hidden border-b border-white/20 border-dotted md:grid-cols-[1fr_0.9fr] lg:min-h-[680px]">
        <div className="relative z-10 flex flex-col items-start justify-center px-7 py-12 sm:px-12 md:px-10 lg:px-16">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="mb-5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              <span className="h-2 w-2 bg-foreground" />
              {t.hero.role}
            </p>
            <h1 className="pixel-heading mb-5 text-5xl leading-[0.98] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              {hero.name.first}
              <br />
              <span>{hero.name.last}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="mb-8 max-w-md text-sm leading-7 text-muted sm:text-base">
              {t.about.bio.split("\n")[0]}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#resume"
                className="border border-white/70 px-6 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-foreground transition-colors hover:bg-white hover:text-black"
              >
                {t.hero.ctaResume}
              </Link>
              <Link
                href="#portfolio"
                className="border border-white/25 px-6 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-foreground transition-colors hover:border-white"
              >
                {t.hero.ctaPortfolio}
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4} className="mt-10">
            <SocialBar links={socialLinks} />
          </ScrollReveal>
        </div>

        <motion.div
          className="relative min-h-[380px] overflow-hidden md:min-h-full"
          initial={reduceMotion ? false : { opacity: 0, x: 18, scale: 0.985 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <CubeArtwork className="absolute inset-0 h-full w-full" />
        </motion.div>
      </div>
    </section>
  );
}
