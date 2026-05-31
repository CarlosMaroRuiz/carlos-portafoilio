import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import { getPortfolioData } from "@/data/repositories/portfolio.repository";

const About = dynamic(() => import("@/components/sections/About"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Projects = dynamic(() => import("@/components/sections/Projects"));

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <>
      <Hero data={data.hero} socialLinks={data.socialLinks} />
      <About data={data.about} />
      <Experience data={data.experienceData} />
      <Projects data={data.projects} />
    </>
  );
}
