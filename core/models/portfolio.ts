export interface SocialLink {
  label: string;
  href: string;
  external: boolean;
  icon: "linkedin" | "github" | "email";
}

export interface HeroData {
  name: {
    first: string;
    last: string;
  };
  role: string;
  backgroundImage: string;
  ctaButtons: {
    label: string;
    href: string;
    variant: "outline-white" | "outline-accent";
  }[];
}

export interface AboutData {
  email: string;
  location: string;
  availability: string;
  bio: string;
}

export interface ExperienceItem {
  year: string;
  company: string;
  role: string;
  desc: string;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export interface ExperienceData {
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
  certifications: Certification[];
  awards: string[];
  education: Education;
}

export interface Project {
  title: string;
  desc: string;
  category: string;
  link: string;
  image: string;
  note?: string;
}

export interface PortfolioData {
  hero: HeroData;
  socialLinks: SocialLink[];
  about: AboutData;
  experienceData: ExperienceData;
  projects: Project[];
}
