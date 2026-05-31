import {
  AboutData,
  ExperienceData,
  HeroData,
  Project,
  SocialLink,
} from "@/core/models/portfolio";

export const heroData: HeroData = {
  name: {
    first: "Carlos Mario",
    last: "Ruiz Pinacho",
  },
  role: "Frontend Developer",
  backgroundImage: "/banner2.png",
  ctaButtons: [
    { label: "Resume", href: "#resume", variant: "outline-white" },
    { label: "Portfolio", href: "#portfolio", variant: "outline-accent" },
  ],
};

export const socialLinksData: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/carlos-m-ruiz-a5ab17224",
    external: true,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/CarlosMaroRuiz",
    external: true,
    icon: "github",
  },
  {
    label: "Email",
    href: "mailto:car06ma15@gmail.com",
    external: false,
    icon: "email",
  },
];

export const aboutData: AboutData = {
  email: "car06ma15@gmail.com",
  location: "Mexico",
  availability: "Available for remote work",
  bio: `Desarrollador Frontend construyendo aplicaciones web escalables con React.js y TypeScript.
Experiencia comprobada entregando interfaces responsivas con Tailwind CSS, SCSS y librerías modernas de componentes UI.
He trabajado integrando APIs REST, servicios de inteligencia artificial y tecnologías Web3. Certificado en AWS Cloud Architecting.
Experiencia en arquitecturas multirrepositorio y entornos Agile/Scrum con Azure DevOps.`,
};

export const experienceData: ExperienceData = {
  experiences: [
    {
      year: "2026",
      company: "ABHRILSOFT",
      role: "Desarrollador Frontend",
      desc: "React.js, TypeScript, Tailwind CSS, Azure DevOps, Git.",
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
  ],
  skillCategories: [
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
  ],
  certifications: [
    { name: "Generative AI Foundations on AWS", issuer: "Immune Technology Institute (2025)" },
    { name: "AWS Academy Cloud Architecting", issuer: "AWS Academy (2023)" },
  ],
  awards: [
    "1er Lugar — Talent Land Genius Arena (2025)",
    "1er Lugar — MegaHackathon Vara Network (2024)",
    "3er Lugar — Hackathon Vara Network (2024)",
  ],
  education: {
    degree: "Ingeniería en Software",
    school: "Universidad Politécnica de Chiapas",
    period: "2022 – 2026",
  },
};

export const projectsData: Project[] = [
  {
    title: "AprendIA",
    desc: "Dashboard administrativo y landing page. Plataforma educativa para personas sordas. (React.js, Angular)",
    category: "Fullstack / EdTech",
    link: "aprendia.upchiapas.edu.mx",
    image: "/projects/aprendia.png",
  },
  {
    title: "Motion Kit",
    desc: "Librería open-source de componentes React basada en Framer Motion con arquitectura FSD. (React, Vite, Zustand)",
    category: "Frontend UI",
    link: "motion-kit-six.vercel.app",
    image: "/projects/motionkit.gif",
  },
  {
    title: "Monogatari",
    desc: "Proyecto ganador Hackathon. Plataforma Web3 que combina manga con NFTs y contratos inteligentes.",
    category: "Web3",
    link: "#",
    image: "/projects/Monogatari.gif",
  },
  {
    title: "Facturación Centralizada",
    desc: "Sistema de procesamiento de facturas con OCR mediante AWS Textract. (Angular, FastAPI)",
    category: "Cloud / AI",
    link: "#",
    image: "/projects/flecha-amarilla.png",
    note: "No se muestra por acuerdos de la empresa al ganar el hackatón",
  },
  {
    title: "VaraExpert MCP Server",
    desc: "Asistente técnico para Vara Network y Sails Framework con arquitectura RAG. Construido con FastMCP.",
    category: "RAG / MCP Server",
    link: "https://github.com/CarlosMaroRuiz/docs-mcp-vara",
    image: "/projects/mcp.png",
  },
  {
    title: "LangMaster",
    desc: "Plataforma de aprendizaje interactiva y gamificada para dominar LangChain y desarrollo de IA con Agentes.",
    category: "EdTech / Gamification",
    link: "https://carlosmaroruiz.github.io/langmaster_game/",
    image: "/projects/langmaster.png",
  },
  {
    title: "MCP SQL Server",
    desc: "Servidor MCP para interactuar con bases de datos MySQL mediante LLMs con análisis de esquemas y aprendizaje inteligente.",
    category: "SQL / MCP Server",
    link: "https://github.com/CarlosMaroRuiz/mcp_sql",
    image: "/projects/mcp.png",
  },
  {
    title: "EduCalifica",
    desc: "Sistema de evaluación automatizado con IA multimodal (Gemini 2.0) para calificar tareas académicas con feedback detallado.",
    category: "AI / Multimodal Agent",
    link: "https://github.com/CarlosMaroRuiz/agent_evaluator",
    image: "/projects/agent_evaluator.jpeg",
  },
];
