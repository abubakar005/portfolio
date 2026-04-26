import { siteConfig } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import Image from "next/image";

type BrandLockupProps = {
  className?: string;
  subtitleClassName?: string;
  textClassName?: string;
  showSubtitle?: boolean;
};

export default function BrandLockup({
  className,
  subtitleClassName,
  textClassName,
  showSubtitle = true,
}: BrandLockupProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src="/branding/abubakar-mark.svg"
        alt="Abubakar brand mark"
        width={44}
        height={44}
        className="h-11 w-11 rounded-2xl"
      />
      <span className={cn("min-w-0", textClassName)}>
        <span className="block truncate text-sm font-semibold tracking-[0.18em] uppercase text-[color:var(--foreground)]">
          {siteConfig.name}
        </span>
        {showSubtitle ? (
          <span className={cn("block truncate text-xs text-[color:var(--muted)]", subtitleClassName)}>
            {siteConfig.shortTitle}
          </span>
        ) : null}
      </span>
    </span>
  );
}
