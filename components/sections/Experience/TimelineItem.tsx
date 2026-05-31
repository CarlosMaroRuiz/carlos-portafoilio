import { ExperienceItem } from "@/core/models/portfolio";

export interface TimelineItemProps {
  exp: ExperienceItem;
}

export function TimelineItem({ exp }: TimelineItemProps) {
  const shortYear = exp.year.split("-")[0].substring(2);

  return (
    <div className="relative pl-8 md:pl-12">
      <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold text-white border-4 border-[#0a0a0a]">
        {shortYear}
      </div>
      <h4 className="text-base font-bold uppercase tracking-wider">{exp.company}</h4>
      <div className="text-xs text-accent mb-3">{exp.role}</div>
      <p className="text-sm text-muted font-light leading-relaxed">{exp.desc}</p>
    </div>
  );
}
