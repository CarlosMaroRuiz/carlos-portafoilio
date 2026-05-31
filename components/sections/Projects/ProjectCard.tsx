import Image from "next/image";
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
  const hasLink = isExternalLink(project.link);
  const href = hasLink
    ? project.link.startsWith("http")
      ? project.link
      : `https://${project.link}`
    : undefined;

  const CardContent = (
    <div className="group relative h-80 bg-zinc-900 overflow-hidden flex items-end p-8 border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer">
      {project.image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

      {!project.image && (
        <div className="absolute inset-0 opacity-10 group-hover:scale-105 transition-transform duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      )}

      {!hasLink && (
        <div className="absolute top-4 right-4 z-20 px-2 py-1 bg-white/5 border border-white/10 text-[10px] text-muted uppercase tracking-widest rounded-sm">
          Private / NDA
        </div>
      )}

      {hasLink && (
        <div className="absolute top-4 right-4 z-20 text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-accent">
          <ExternalLinkIcon />
        </div>
      )}

      <div className="relative z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">{project.title}</h3>
        <p className="text-sm text-muted font-light max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-2">
          {project.desc}
        </p>
        {project.note && (
          <p className="text-[10px] text-accent/70 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 mb-2">
            * {project.note}
          </p>
        )}
        {hasLink && (
          <p className="text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 truncate max-w-[200px]">
            {project.link.replace("https://", "")}
          </p>
        )}
      </div>
    </div>
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
