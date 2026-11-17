import { ReactNode } from "react";

export interface SideCardProps {
  title: string;
  children: ReactNode;
}

export function SideCard({ title, children }: SideCardProps) {
  return (
    <div>
      <h3 className="mb-6 border-b border-white/15 pb-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-foreground">
        {title}
      </h3>
      {children}
    </div>
  );
}
