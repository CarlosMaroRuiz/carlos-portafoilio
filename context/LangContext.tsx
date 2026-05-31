"use client";

import { createContext, use, useState, type ReactNode } from "react";
import { es } from "@/lib/translations/es";
import { en } from "@/lib/translations/en";
import type { Translation } from "@/lib/translations/types";

type Lang = "es" | "en";

interface LangContextValue {
  lang: Lang;
  t: Translation;
  toggle: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const t = lang === "es" ? es : en;
  const toggle = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = use(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
