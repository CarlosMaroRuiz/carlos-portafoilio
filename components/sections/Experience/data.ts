// ============================================================
// Toda la data estática de la sección Resume / Experience
// Para actualizar el CV, solo edita este archivo.
// ============================================================

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

export const experiences: ExperienceItem[] = [
  {
    year: "2026",
    company: "ABHRILSOFT",
    role: "Desarrollador Frontend",
    desc: "Tropicalización de una aplicación multitenant de RRHH. Arquitectura multirrepositorio con Gitta y gestión Agile en Azure DevOps.",
  },
  {
    year: "2023-24",
    company: "IMA CHIAPAS",
    role: "Desarrollador Frontend",
    desc: "Desarrollo del frontend de ERP para restaurantes (React/TS, Tailwind, Flowbite). Módulos de inventario, pedidos y reportes.",
  },
  {
    year: "2023",
    company: "HIGHTECH MEXICO",
    role: "Desarrollador Frontend",
    desc: "Desarrollo de aplicaciones dinámicas con React.js y Tailwind CSS. Integración y consumo de APIs REST.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Angular", "Framer Motion", "Vite"],
  },
  {
    title: "Lenguajes & Estilos",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "HTML5", "CSS3", "Tailwind CSS", "SCSS"],
  },
  {
    title: "UI & State",
    items: ["Kendo React", "MUI", "Flowbite", "Zustand", "React Context"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "Git", "GitHub", "Azure DevOps", "AWS S3", "AWS EC2", "AWS Textract"],
  },
  {
    title: "Otras",
    items: ["APIs REST", "APIs de IA", "Web3", "Blockchain", "OCR", "FastMCP", "LangChain"],
  },
  {
    title: "Languages",
    items: ["Español — Nativo", "Inglés — A2"],
  },
];

export const certifications: Certification[] = [
  { name: "Generative AI Foundations on AWS", issuer: "Immune Technology Institute (2025)" },
  { name: "AWS Academy Cloud Architecting", issuer: "AWS Academy (2023)" },
];

export const awards: string[] = [
  "1er Lugar — Talent Land Genius Arena (2025)",
  "1er Lugar — MegaHackathon Vara Network (2024)",
  "3er Lugar — Hackathon Vara Network (2024)",
];

export const education = {
  degree: "Ingeniería en Software",
  school: "Universidad Politécnica de Chiapas",
  period: "2022 – 2026",
};
