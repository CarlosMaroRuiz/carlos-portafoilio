import type { SkillCategory, ExperienceItem, Certification } from "./data";
import type { ReactNode } from "react";

export interface SkillGroupProps {
  category: SkillCategory;
}

export interface TimelineItemProps {
  exp: ExperienceItem;
}

export interface SideCardProps {
  title: string;
  children: ReactNode;
}

export interface CertificationListProps {
  items: Certification[];
}
