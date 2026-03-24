import { FolderGit2, Globe2, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: FolderGit2 },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Globe2 },
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Abubakar. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group/icon relative rounded-full border border-slate-300 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Icon className="h-4 w-4" />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 transition-opacity duration-150 group-hover/icon:opacity-100 dark:bg-slate-100 dark:text-slate-900">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
