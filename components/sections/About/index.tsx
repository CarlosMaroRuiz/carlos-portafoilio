"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AboutData } from "@/core/models/portfolio";

export interface AboutProps {
  data: AboutData;
}

export default function About({ data: about }: AboutProps) {
  const { t } = useLang();

  return (
    <section id="about" className="min-h-screen w-full flex items-center bg-black px-8 md:px-24 py-24 relative overflow-hidden">
      <div className="max-w-3xl relative z-10">
        
        {/* Mobile Image */}
        <ScrollReveal direction="up" delay={0.05} className="lg:hidden mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 grayscale">
            <Image
              src="/me.jpg"
              alt="Carlos Mario Ruiz Pinacho"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-2">{t.about.title}</h2>
          <a
            href={`mailto:${about.email}`}
            className="text-accent text-sm md:text-base mb-10 inline-block tracking-wider"
          >
            {about.email}
          </a>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl font-light whitespace-pre-line">
            {t.about.bio}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-16 md:mt-20 flex items-center space-x-4 text-xs tracking-widest text-muted uppercase">
            <div className="h-px w-12 bg-accent" />
            <div>
              {about.location}
            </div>
            <div className="h-px w-12 bg-accent" />
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex justify-end items-center pointer-events-none pr-8 md:pr-24">
        <ScrollReveal direction="left" delay={0.4}>
          <div className="relative group pointer-events-auto">
            <div className="relative w-[350px] xl:w-[450px] h-[500px] xl:h-[600px] rounded-sm overflow-hidden border border-white/5 group-hover:border-accent/40 transition-all duration-700 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal cursor-auto">
              <Image
                src="/me.jpg"
                alt="Carlos Mario Ruiz Pinacho"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black opacity-80" />
            </div>
            <span className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-white/20 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              hover
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
