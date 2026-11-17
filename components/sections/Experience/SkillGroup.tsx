import { SkillCategory } from "@/core/models/portfolio";

export interface SkillGroupProps {
  category: SkillCategory;
}

export function SkillGroup({ category }: SkillGroupProps) {
  return (
    <div>
      <h3 className="mb-4 border-b border-white/15 pb-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-foreground">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <span
            key={skill}
            className="border border-white/15 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-muted transition-colors hover:border-white/60 hover:text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
