import { MainProps } from "./types/MainProp";

export function MainLayout({ children }: MainProps) {
  return (
    <main className="relative flex min-h-screen flex-col bg-background font-sans">
      <div className="flex w-full flex-1 flex-col pt-20">{children}</div>
    </main>
  );
}