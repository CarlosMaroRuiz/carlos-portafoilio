import { MainProps } from "./types/MainProp";

export function MainLayout({ children }: MainProps) {
    return (
        <main className="flex flex-col min-h-screen bg-black font-sans relative">
            <div className="flex flex-col flex-1 w-full pt-20">
                {children}
            </div>
        </main>
    );
}