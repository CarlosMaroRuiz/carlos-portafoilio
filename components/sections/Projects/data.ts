// ============================================================
// Static data for the Projects section
// Edit this file to add, remove, or update projects.
// ============================================================

export interface Project {
  title: string;
  desc: string;
  category: string;
  link: string;
  image: string;
  note?: string;
}

export const projects: Project[] = [
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
