import BrandLockup from "@/components/brand-lockup";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/social-icons";
import { navigationLinks, siteConfig, siteContent } from "@/lib/site-content";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

function isSpecificProfileUrl(value: string) {
  try {
    const url = new URL(value);
    return url.pathname !== "/" && url.pathname !== "";
  } catch {
    return false;
  }
}

const socialLinks = [
  isSpecificProfileUrl(siteConfig.social.linkedin)
    ? {
        label: "LinkedIn",
        href: siteConfig.social.linkedin,
        icon: LinkedInIcon,
        ariaLabel: "Open LinkedIn profile",
      }
    : null,
  isSpecificProfileUrl(siteConfig.social.github)
    ? {
        label: "GitHub",
        href: siteConfig.social.github,
        icon: GitHubIcon,
        ariaLabel: "Open GitHub profile",
      }
    : null,
  siteConfig.contactLinks.whatsapp
    ? {
        label: siteContent.ui.buttons.whatsapp,
        href: siteConfig.contactLinks.whatsapp,
        icon: WhatsAppIcon,
        ariaLabel: "Start a WhatsApp chat",
      }
    : null,
].filter(Boolean) as {
  label: string;
  href: string;
  icon: typeof LinkedInIcon;
  ariaLabel: string;
}[];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)]/80 bg-white/72 dark:bg-slate-950/72">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.25fr_0.8fr_1fr]">
        <div className="space-y-6">
          <BrandLockup showSubtitle={false} />
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
              {siteContent.footer.heading}
            </h2>
            <p className="max-w-xl leading-7 text-[color:var(--muted)]">
              {siteContent.footer.description}
            </p>
          </div>

          <Link href={`mailto:${siteConfig.email}`} className="button-secondary inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-indigo-500" />
            {siteConfig.email}
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)]">
            {siteContent.ui.labels.explore}
          </h3>
          <ul className="mt-5 space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
                >
                  <span className="link-highlight">{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)]">
            {siteContent.ui.labels.profilesAndContact}
          </h3>
          <p className="mt-5 leading-7 text-[color:var(--muted)]">{siteConfig.availability}</p>

          {socialLinks.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="button-secondary inline-flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          ) : null}

          <p className="mt-8 text-sm text-[color:var(--muted)]">
            © {new Date().getFullYear()} {siteConfig.name}. {siteContent.footer.closingNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
