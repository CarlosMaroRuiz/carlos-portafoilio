"use client";

import { useLang } from "@/context/LangContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AboutData } from "@/core/models/portfolio";

export interface AboutProps {
  data: AboutData;
}

export default function About({ data: about }: AboutProps) {
  const { t } = useLang();

  return (
    <section id="about" className="w-full border-y border-white/20 border-dotted px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="pixel-heading text-3xl leading-tight text-foreground sm:text-4xl">
            {t.about.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <p className="whitespace-pre-line text-base leading-8 text-muted sm:text-lg sm:leading-9">
            {t.about.bio}
          </p>
          <a
            href={`mailto:${about.email}`}
            className="mt-8 inline-flex border border-white/60 px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-foreground transition-colors hover:bg-white hover:text-black"
          >
            {about.email}
          </a>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
            <span>{about.location}</span>
            <span>{about.availability}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
