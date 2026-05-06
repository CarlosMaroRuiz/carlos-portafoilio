import type { SkillGroupProps } from "./types";

export function SkillGroup({ category }: SkillGroupProps) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-widest uppercase mb-6 border-b border-white/10 pb-4">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1.5 border border-white/10 text-muted hover:border-accent hover:text-accent transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
