"use client";

import { ProjectCard } from "./ProjectCard";
import { useLang } from "@/context/LangContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Project } from "@/core/models/portfolio";

export interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data: projects }: ProjectsProps) {
  const { t } = useLang();

  return (
    <section id="portfolio" className="min-h-screen w-full bg-black px-8 md:px-24 py-24 flex flex-col justify-center">
      <div className="max-w-7xl w-full mx-auto">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-16 text-center">{t.projects.title}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ScrollReveal 
              key={idx} 
              direction="up" 
              delay={0.1 + (idx % 2) * 0.1} // Stagger side by side
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
