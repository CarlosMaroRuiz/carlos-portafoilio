import { PortfolioData } from "@/core/models/portfolio";
import {
  aboutData,
  experienceData,
  heroData,
  projectsData,
  socialLinksData,
} from "../static/portfolio.data";


export async function getPortfolioData(): Promise<PortfolioData> {

  return {
    hero: heroData,
    socialLinks: socialLinksData,
    about: aboutData,
    experienceData: experienceData,
    projects: projectsData,
  };
}
