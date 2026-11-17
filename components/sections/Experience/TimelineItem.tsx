import { ExperienceItem } from "@/core/models/portfolio";

export interface TimelineItemProps {
  exp: ExperienceItem;
}

export function TimelineItem({ exp }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-12">
      <div className="timeline-node absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-background bg-foreground ring-1 ring-foreground/20" />
      <h4 className="text-sm font-bold uppercase tracking-[0.12em]">{exp.company}</h4>
      <div className="mb-2 mt-1 text-xs font-medium text-muted">{exp.year} · {exp.role}</div>
      <p className="text-sm leading-6 text-muted">{exp.desc}</p>
    </div>
  );
}
