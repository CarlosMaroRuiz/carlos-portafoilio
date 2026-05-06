"use client";

import Image from "next/image";
import Link from "next/link";
import { hero, socialLinks } from "./data";
import { SocialBar } from "./SocialBar";
import { useLang } from "@/context/LangContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Hero() {
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
    </section>
  );
}
