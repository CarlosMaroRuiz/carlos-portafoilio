import Image from "next/image";
import type { ProjectCardProps } from "./types";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative h-80 bg-zinc-900 overflow-hidden flex items-end p-8 border border-white/5 hover:border-white/20 transition-all duration-500">
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
        {project.link !== "#" && (
          <p className="text-xs text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            {project.link}
          </p>
        )}
      </div>
    </div>
  );
}
