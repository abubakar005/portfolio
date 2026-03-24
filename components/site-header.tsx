"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./theme-toggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.2em] text-slate-900 uppercase dark:text-slate-100"
        >
          Abubakar
        </Link>
        <nav className="hidden items-center gap-6 md:ml-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={cn(
                "rounded-md px-1.5 py-1 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-slate-100 text-slate-950 dark:bg-slate-800 dark:text-white"
                  : "text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
