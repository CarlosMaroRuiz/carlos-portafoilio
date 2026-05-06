export interface Translation {
  nav: {
    home: string;
    about: string;
    resume: string;
    portfolio: string;
  };
  hero: {
    role: string;
    ctaResume: string;
    ctaPortfolio: string;
  };
  about: {
    title: string;
    bio: string;
  };
  experience: {
    sectionTitle: string;
    skillCategories: {
      frontend: string;
      languages: string;
      ui: string;
      devops: string;
      other: string;
      langs: string;
    };
    experienceTitle: string;
    certTitle: string;
    awardsTitle: string;
    educationTitle: string;
  };
  projects: {
    title: string;
  };
}
