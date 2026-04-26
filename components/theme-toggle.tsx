"use client";

import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function getPreferredTheme() {
  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const resolvedTheme = getPreferredTheme();
    setTheme(resolvedTheme);
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={mounted ? theme === "dark" : undefined}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/80 text-[color:var(--foreground)] shadow-sm backdrop-blur transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-slate-950/70"
    >
      {mounted && theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <MoonStar className="h-4 w-4" />
      )}
    </button>
  );
}
