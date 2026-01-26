import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  // Alapból megnézzük, mi volt elmentve, vagy mi a rendszerbeállítás
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Ha sötét mód van, rárakjuk a 'dark' osztályt a HTML-re
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    // Elmentjük a választást
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 border-2 border-black dark:border-white bg-transparent hover:bg-black/5 dark:hover:bg-white/10 transition-all"
    >
      {/* Animált ikonok: az egyik eltűnik, a másik megjelenik */}
      {theme === "dark" ? (
        <Moon className="h-5 w-5 text-white transition-all" />
      ) : (
        <Sun className="h-5 w-5 text-black transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
