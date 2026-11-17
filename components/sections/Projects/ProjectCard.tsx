import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/core/models/portfolio";

export interface ProjectCardProps {
  project: Project;
}

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const isExternalLink = (link: string) =>
  link !== "#" && (link.startsWith("http") || link.includes("."));

export function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const hasLink = isExternalLink(project.link);
  const href = hasLink
    ? project.link.startsWith("http")
      ? project.link
      : `https://${project.link}`
    : undefined;

  const CardContent = (
    <motion.article
      className="group grid h-full overflow-hidden border-b border-white/20 border-dotted py-5 transition-colors hover:bg-white/[0.025] sm:grid-cols-[0.85fr_1.15fr] sm:gap-6"
      whileHover={reduceMotion ? undefined : { y: -3 }}
      whileTap={reduceMotion ? undefined : { scale: 0.995 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="relative aspect-[1.1] overflow-hidden border border-white/15 bg-[#151515] sm:aspect-square">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/10 via-transparent to-transparent" />
        )}
        <div aria-hidden="true" className="project-scan pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      <div className="flex flex-col justify-center py-4 sm:py-2">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
            {project.category}
          </span>
          {!hasLink && (
            <span className="shrink-0 border border-white/20 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
              Private / NDA
            </span>
          )}
          {hasLink && <span className="text-muted"><ExternalLinkIcon /></span>}
        </div>
        <h3 className="pixel-heading mb-4 text-xl text-foreground sm:text-2xl">{project.title}</h3>
        <p className="mb-3 text-sm leading-6 text-muted">
          {project.desc}
        </p>
        {project.note && (
          <p className="mb-3 text-xs italic leading-5 text-muted">
            * {project.note}
          </p>
        )}
        {hasLink && (
          <p className="break-all font-mono text-[10px] uppercase text-muted/80">
            {project.link.replace("https://", "")}
          </p>
        )}
      </div>
    </motion.article>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}
