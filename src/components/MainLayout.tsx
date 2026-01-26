import { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen transition-colors duration-300 flex flex-col
      bg-pink-50/60 dark:bg-zinc-950 
      text-zinc-900 dark:text-zinc-100 font-sans"
    >
      
      {/* --- FEJLÉC --- */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md">
        {/* JAVÍTVA: justify-between helyett justify-end, hogy a gomb jobbra kerüljön */}
        <div className="container flex h-14 max-w-screen-2xl items-center justify-end px-4">
          
          {/* A Név/Logó részt INNEN TÖRÖLTEM KI */}

          {/* Kapcsoló (Marad a jobb oldalon) */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* --- TARTALOM --- */}
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        {children}
      </main>

      {/* --- LÁBLÉC --- */}
      <footer className="py-6 md:px-8 md:py-0 border-t border-black/5 dark:border-white/10 mt-auto">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row text-sm text-muted-foreground">
          <p>© 2026 Tasi Szabina CV</p>
        </div>
      </footer>
      
    </div>
  );
};

export default MainLayout;