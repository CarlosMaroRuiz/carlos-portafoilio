// ============================================================
// Static data for the Hero section
// ============================================================

export const hero = {
  name: {
    first: "Carlos Mario",
    last: "Ruiz Pinacho",
  },
  role: "Frontend Developer",
  backgroundImage: "/banner2.png",
  ctaButtons: [
    { label: "Resume", href: "#resume", variant: "outline-white" as const },
    { label: "Portfolio", href: "#portfolio", variant: "outline-accent" as const },
  ],
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/carlos-m-ruiz-a5ab17224",
    external: true,
    icon: "linkedin" as const,
  },
  {
    label: "GitHub",
    href: "https://github.com/CarlosMaroRuiz",
    external: true,
    icon: "github" as const,
  },
  {
    label: "Email",
    href: "mailto:car06ma15@gmail.com",
    external: false,
    icon: "email" as const,
  },
];
