import { cn } from "@/lib/utils";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: PageIntroProps) {
  return (
    <div
      className={cn(
        "max-w-4xl space-y-5",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)] shadow-sm backdrop-blur dark:bg-slate-950/60">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-4">
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl lg:text-[3.65rem]">
          {title}
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
}
