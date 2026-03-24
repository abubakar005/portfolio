"use client";

import { MoonStar, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return document.documentElement.classList.contains("dark");
  });

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextIsDark);
  };

  return (
    <div className="group relative">
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/70 bg-white/60 text-slate-700 backdrop-blur transition-colors hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
      >
        {isDark ? <Sun className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
      </button>
      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
        {isDark ? "Light" : "Dark"}
      </span>
    </div>
  );
}
