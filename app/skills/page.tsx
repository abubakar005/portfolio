import AnimatedSection from "@/components/animated-section";
import PageIntro from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";
import { siteContent, skillGroups } from "@/lib/site-content";
import {
  Bot,
  CloudCog,
  Database,
  KeyRound,
  Layers3,
  MonitorSmartphone,
  ServerCog,
} from "lucide-react";

export const metadata = createMetadata(siteContent.seo.pages.skills);

const icons = [ServerCog, Layers3, KeyRound, Database, CloudCog, Bot, MonitorSmartphone];

export default function SkillsPage() {
  return (
    <div className="w-full space-y-16 py-10 sm:py-14">
      <AnimatedSection>
        <PageIntro {...siteContent.skills.intro} />
      </AnimatedSection>

      <section className="grid gap-6 xl:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = icons[index] ?? Layers3;
          return (
            <AnimatedSection key={group.title} delay={index * 0.05}>
              <article className="card-panel hover-panel h-full p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                      {group.title}
                    </h2>
                    <p className="leading-7 text-[color:var(--muted)]">{group.description}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge rounded-full border border-[color:var(--border)] bg-white/80 px-3.5 py-2 text-sm font-medium text-[color:var(--foreground)] shadow-sm dark:bg-slate-950/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          );
        })}
      </section>

      <AnimatedSection>
        <section className="card-panel grid gap-6 p-8 sm:p-10 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              {siteContent.skills.closing.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              {siteContent.skills.closing.title}
            </h2>
          </div>
          <div className="space-y-4 text-[color:var(--muted)] lg:col-span-2">
            {siteContent.skills.closing.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
