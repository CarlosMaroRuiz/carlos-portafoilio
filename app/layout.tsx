import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layout/MainLayout";
import { LangProvider } from "@/context/LangContext";
import { Header } from "@/components/layout/MainLayout/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carlosmarioruiz.com"), // Ajustar al dominio real en el futuro
  title: {
    default: "Carlos Mario Ruiz Pinacho | Frontend Developer",
    template: "%s | Carlos Mario",
  },
  description: "Portafolio profesional de Carlos Mario Ruiz Pinacho. Desarrollador Frontend especializado en React, TypeScript y Tailwind CSS.",
  keywords: ["Desarrollador Frontend", "React", "Next.js", "TypeScript", "Tailwind CSS", "Portafolio", "Web Developer"],
  authors: [{ name: "Carlos Mario Ruiz Pinacho" }],
  creator: "Carlos Mario Ruiz Pinacho",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://carlosmarioruiz.com", // Ajustar despues
    title: "Carlos Mario Ruiz Pinacho | Frontend Developer",
    description: "Desarrollador Frontend con experiencia en la creación de aplicaciones web escalables e interfaces responsivas.",
    siteName: "Carlos Mario Portfolio",
    images: [
      {
        url: "/banner2.png", // Next.js lo resolverá si tienes un banner public
        width: 1200,
        height: 630,
        alt: "Carlos Mario Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Mario Ruiz Pinacho | Frontend Developer",
    description: "Portafolio profesional de Desarrollo Web.",
    images: ["/banner2.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col bg-black text-white font-sans"
        suppressHydrationWarning
      >
        <LangProvider>
          <Header />
          <MainLayout>{children}</MainLayout>
        </LangProvider>
      </body>
    </html>
  );
}
