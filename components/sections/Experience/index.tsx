"use client";

import { SkillGroup } from "./SkillGroup";
import { TimelineItem } from "./TimelineItem";
import { SideCard } from "./SideCard";
import { experiences, skillCategories, certifications, awards, education } from "./data";
import { useLang } from "@/context/LangContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Experience() {
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
    <section id="resume" className="min-h-screen w-full bg-[#0a0a0a] px-8 md:px-24 py-24 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 max-w-7xl w-full mx-auto">

        <ScrollReveal direction="up" delay={0.1} className="space-y-10">
          {translatedCategories.map((cat) => (
            <SkillGroup key={cat.title} category={cat} />
          ))}
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="space-y-8 lg:px-8">
          <h3 className="text-sm font-bold tracking-widest uppercase mb-8 border-b border-white/10 pb-4">
            {t.experience.experienceTitle}
          </h3>
          <div className="relative border-l border-white/20 ml-3 md:ml-4 space-y-12 pb-8">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3} className="space-y-12">
          <SideCard title={t.experience.certTitle}>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">{cert.name}</h4>
                  <p className="text-xs text-muted font-light">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </SideCard>

          <SideCard title={t.experience.awardsTitle}>
            <ul className="text-xs text-muted font-light space-y-3">
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </SideCard>

          <SideCard title={t.experience.educationTitle}>
            <h4 className="text-sm font-bold uppercase tracking-wider">{education.degree}</h4>
            <p className="text-sm text-muted font-light">
              {education.school}
              <br />
              ({education.period})
            </p>
          </SideCard>
        </ScrollReveal>

      </div>
    </section>
  );
}
