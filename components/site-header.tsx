"use client";

import BrandLockup from "@/components/brand-lockup";
import ThemeToggle from "@/components/theme-toggle";
import { navigationLinks, siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)]/80 bg-white/75 backdrop-blur-xl dark:bg-slate-950/75">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-6 sm:px-8">
        <Link
          href="/"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500"
          aria-label="Go to homepage"
        >
          <BrandLockup />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "nav-pill rounded-full px-4 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                  isActive
                    ? "nav-pill-active bg-slate-900 text-white shadow-sm dark:bg-indigo-500"
                    : "nav-pill-inactive text-[color:var(--muted)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="floating-button inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/80 text-[color:var(--foreground)] shadow-sm backdrop-blur lg:hidden dark:bg-slate-950/70"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-[color:var(--border)]/70 bg-white/96 px-6 py-4 shadow-lg backdrop-blur-xl lg:hidden dark:bg-slate-950/96">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile primary">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                    isActive
                      ? "bg-slate-900 text-white shadow-sm dark:bg-indigo-500"
                      : "bg-[color:var(--surface)]/70 text-[color:var(--foreground)] hover:bg-white hover:-translate-y-0.5 dark:hover:bg-slate-900/80",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 border-t border-[color:var(--border)] pt-4">
              <Link href="/contact" className="button-primary inline-flex w-full items-center justify-center">
                {siteContent.ui.buttons.contactFromMenu}
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
