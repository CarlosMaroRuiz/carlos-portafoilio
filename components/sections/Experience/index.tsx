"use client";

import { SkillGroup } from "./SkillGroup";
import { TimelineItem } from "./TimelineItem";
import { SideCard } from "./SideCard";
import { useLang } from "@/context/LangContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExperienceData } from "@/core/models/portfolio";

export interface ExperienceProps {
  data: ExperienceData;
}

export default function Experience({
  data: { experiences, skillCategories, certifications, awards, education },
}: ExperienceProps) {
  const { t } = useLang();
  const sc = t.experience.skillCategories;

  const translatedCategories = [
    { title: sc.frontend,  items: skillCategories[0].items },
    { title: sc.languages, items: skillCategories[1].items },
    { title: sc.ui,        items: skillCategories[2].items },
    { title: sc.devops,    items: skillCategories[3].items },
    { title: sc.other,     items: skillCategories[4].items },
    { title: sc.langs,     items: skillCategories[5].items },
  ];

  return (
    <section id="resume" className="w-full px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl border-y border-white/20 border-dotted text-foreground">
        <div className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
          <ScrollReveal direction="up" delay={0.1}>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {t.experience.sectionTitle}
            </p>
            <h2 className="pixel-heading mb-10 max-w-xl text-3xl leading-tight sm:mb-14 sm:text-5xl">
              {t.experience.experienceTitle}
            </h2>
          </ScrollReveal>

          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {translatedCategories.map((cat, index) => (
              <ScrollReveal key={cat.title} direction="up" delay={0.1 + (index % 3) * 0.08}>
                <SkillGroup category={cat} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 border-dotted px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <ScrollReveal direction="up" delay={0.1}>
              <h3 className="mb-8 font-mono text-sm font-semibold uppercase tracking-[0.1em] sm:text-base">
                {t.experience.experienceTitle}
              </h3>
              <div className="relative ml-3 space-y-10 border-l border-foreground/15 pb-2">
                {experiences.map((exp, i) => (
                  <ScrollReveal
                    key={i}
                    direction={i % 2 === 0 ? "left" : "right"}
                    delay={i * 0.08}
                  >
                    <TimelineItem exp={exp} />
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            <div className="grid gap-8 sm:grid-cols-2">
              <ScrollReveal direction="up" delay={0.1}>
                <SideCard title={t.experience.certTitle}>
                  <div className="space-y-5">
                    {certifications.map((cert) => (
                      <div key={cert.name}>
                        <h4 className="text-sm font-semibold text-foreground">{cert.name}</h4>
                        <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                      </div>
                    ))}
                  </div>
                </SideCard>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <SideCard title={t.experience.awardsTitle}>
                  <ul className="space-y-4 text-sm leading-6 text-muted">
                    {awards.map((award) => (
                      <li key={award}>{award}</li>
                    ))}
                  </ul>
                </SideCard>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3} className="sm:col-span-2">
                <SideCard title={t.experience.educationTitle}>
                  <h4 className="text-sm font-semibold text-foreground">{education.degree}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {education.school}
                    <br />
                    ({education.period})
                  </p>
                </SideCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
