"use client";

import { useEffect, useState } from "react";
import type { KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { useLang } from "@/context/LangContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Project } from "@/core/models/portfolio";

export interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data: projects }: ProjectsProps) {
  const { t } = useLang();
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || projects.length < 2) return;

    const intervalId = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((index) => (index + 1) % projects.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPlaying, projects.length]);

  const moveProject = (step: number) => {
    if (projects.length < 2) return;
    setDirection(step);
    setActiveIndex((index) => (index + step + projects.length) % projects.length);
  };

  const showProject = (index: number) => {
    setDirection(index >= activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveProject(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      moveProject(1);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -70 || info.velocity.x < -500) moveProject(1);
    else if (info.offset.x > 70 || info.velocity.x > 500) moveProject(-1);
  };

  return (
    <section id="portfolio" className="w-full border-b border-white/20 border-dotted px-4 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-10">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="pixel-heading text-3xl sm:text-5xl">{t.projects.title}</h2>
          </ScrollReveal>
          <span aria-live={isPlaying ? "off" : "polite"} className="shrink-0 font-mono text-xs tracking-[0.12em] text-muted">
            {String(projects.length ? activeIndex + 1 : 0).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {projects.length > 0 && (
          <>
            <div
              aria-label={t.projects.title}
              aria-roledescription={t.projects.carousel}
              className="outline-none focus-visible:ring-1 focus-visible:ring-white/60"
              onFocusCapture={() => setIsPlaying(false)}
              onKeyDown={handleKeyDown}
              role="region"
              tabIndex={0}
            >
              <div className="overflow-hidden">
                <AnimatePresence initial={false} mode="wait" custom={direction}>
                  <motion.div
                    key={projects[activeIndex].title}
                    aria-label={`${activeIndex + 1} ${t.projects.of} ${projects.length}`}
                    aria-roledescription={t.projects.slide}
                    custom={direction}
                    drag={projects.length > 1 ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.14}
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -32 }}
                    onDragEnd={handleDragEnd}
                    role="group"
                    transition={{ duration: reduceMotion ? 0.2 : 0.42, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <ProjectCard project={projects[activeIndex]} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {projects.length > 1 && (
              <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                <div className="flex flex-wrap items-center gap-2">
                  {projects.map((project, index) => (
                    <button
                      key={project.title}
                      aria-current={index === activeIndex ? "true" : undefined}
                      aria-label={`${t.projects.goTo} ${index + 1}`}
                      className={`h-1 transition-all duration-300 ${
                        index === activeIndex ? "w-8 bg-foreground" : "w-3 bg-white/25 hover:bg-white/60"
                      }`}
                      onClick={() => showProject(index)}
                      type="button"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    aria-label={isPlaying ? t.projects.pause : t.projects.play}
                    className="grid h-10 w-10 place-items-center border border-white/20 text-foreground transition-colors hover:bg-white hover:text-black"
                    onClick={() => setIsPlaying((playing) => !playing)}
                    type="button"
                  >
                    {isPlaying ? (
                      <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 5h4v14H7zM15 5h4v14h-4z" />
                      </svg>
                    ) : (
                      <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                  <button
                    aria-label={t.projects.previous}
                    className="grid h-10 w-10 place-items-center border border-white/20 text-foreground transition-colors hover:bg-white hover:text-black"
                    onClick={() => moveProject(-1)}
                    type="button"
                  >
                    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 12h-15m0 0 7.5 7.5M4.5 12 12 4.5" />
                    </svg>
                  </button>
                  <button
                    aria-label={t.projects.next}
                    className="grid h-10 w-10 place-items-center border border-white/20 text-foreground transition-colors hover:bg-white hover:text-black"
                    onClick={() => moveProject(1)}
                    type="button"
                  >
                    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0L12 4.5m7.5 7.5L12 19.5" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
