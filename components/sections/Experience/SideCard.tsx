import type { SideCardProps } from "./types";

export function SideCard({ title, children }: SideCardProps) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-widest uppercase mb-6 border-b border-white/10 pb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
