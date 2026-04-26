import AnimatedSection from "@/components/animated-section";
import ProjectShowcase from "@/components/project-showcase";
import { createMetadata } from "@/lib/metadata";
import {
  companyHighlights,
  heroStats,
  projects,
  siteContent,
  techHighlights,
  valuePillars,
} from "@/lib/site-content";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Cpu,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata(siteContent.seo.pages.home);

const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

export default function Home() {
  return (
    <div className="w-full space-y-24 py-10 sm:py-14">
      <section className="section-shell grid gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
        <AnimatedSection className="space-y-8">
          <div className="space-y-5">
            <p className="inline-flex items-center rounded-full border border-indigo-200/80 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 shadow-sm dark:border-indigo-500/20 dark:text-indigo-300">
              {siteContent.home.badge}
            </p>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
                {siteContent.home.heroTitle.replace(siteContent.home.heroHighlight, "")}
                <span className="text-gradient">{siteContent.home.heroHighlight}</span>
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
                {siteContent.home.heroDescription}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {techHighlights.slice(0, 15).map((item) => (
              <span
                key={item}
                className="skill-badge rounded-full border border-[color:var(--border)] bg-white/80 px-4 py-2 text-sm font-medium text-[color:var(--foreground)] shadow-sm dark:bg-slate-950/70"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--muted)]">
              {siteContent.ui.labels.recentTeams}
            </p>
            <div className="flex flex-wrap gap-3">
              {companyHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-3.5 py-2 text-sm text-[color:var(--foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="button-primary inline-flex items-center gap-2">
              {siteContent.ui.buttons.contact}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="button-secondary inline-flex items-center gap-2">
              {siteContent.ui.buttons.viewProjects}
            </Link>
            <Link href="/about" className="button-ghost inline-flex items-center gap-2">
              {siteContent.ui.buttons.aboutBackground}
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="space-y-5">
          <div className="card-panel p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {siteContent.ui.labels.atAGlance}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                  {siteContent.home.atAGlance.title}
                </h2>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                <Workflow className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/70 p-4"
                >
                  <p className="text-2xl font-semibold text-[color:var(--foreground)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-panel p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                <BrainCircuit className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {siteContent.ui.labels.currentDirection}
                </p>
                <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
                  {siteContent.home.aiFocus.title}
                </h2>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--muted)]">
              {siteContent.home.aiFocus.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 flex-none text-indigo-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-shell space-y-8">
        <AnimatedSection className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] shadow-sm dark:bg-slate-950/65">
            {siteContent.ui.labels.valueProposition}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
            {siteContent.home.valueProposition.title}
          </h2>
          <p className="text-lg leading-8 text-[color:var(--muted)]">
            {siteContent.home.valueProposition.description}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {valuePillars.map((pillar, index) => {
            const icons = [ShieldCheck, Workflow, BriefcaseBusiness, Cpu];
            const Icon = icons[index] ?? Workflow;
            return (
              <AnimatedSection key={pillar.title} delay={index * 0.06}>
                <article className="card-panel hover-panel h-full p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[color:var(--foreground)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[color:var(--muted)]">
                    {pillar.description}
                  </p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="section-shell space-y-8">
        <AnimatedSection className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] shadow-sm dark:bg-slate-950/65">
            {siteContent.ui.labels.experienceTimeline}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
            {siteContent.home.experienceSection.title}
          </h2>
          <p className="text-lg leading-8 text-[color:var(--muted)]">
            {siteContent.home.experienceSection.description}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {siteContent.experience.items.slice(0, 3).map((entry, index) => (
            <AnimatedSection key={`${entry.company}-${entry.period}`} delay={index * 0.05}>
              <article className="card-panel hover-panel h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
                  {entry.period}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[color:var(--foreground)]">
                  {entry.role}
                </h3>
                <p className="mt-1 text-sm text-[color:var(--muted)]">{entry.company}</p>
                <p className="mt-4 leading-7 text-[color:var(--muted)]">{entry.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.stack.map((item) => (
                    <span
                      key={item}
                      className="skill-badge rounded-full border border-[color:var(--border)] bg-white/80 px-3 py-1 text-xs font-medium text-[color:var(--foreground)] dark:bg-slate-950/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-shell space-y-8">
        <AnimatedSection className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] shadow-sm dark:bg-slate-950/65">
            {siteContent.projectsPage.intro.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
            {siteContent.home.projectsSection.title}
          </h2>
          <p className="text-lg leading-8 text-[color:var(--muted)]">
            {siteContent.home.projectsSection.description}
          </p>
        </AnimatedSection>
        <ProjectShowcase projects={featuredProjects} compact />
      </section>

      <AnimatedSection>
        <section className="card-panel flex flex-col gap-6 p-8 sm:flex-row sm:items-end sm:justify-between sm:p-10">
          <div className="max-w-3xl space-y-4">
            <p className="inline-flex items-center rounded-full border border-indigo-200/80 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-indigo-500/20 dark:text-indigo-300">
              {siteContent.ui.labels.nextStep}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              {siteContent.home.closingCta.title}
            </h2>
            <p className="text-lg leading-8 text-[color:var(--muted)]">
              {siteContent.home.closingCta.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="button-primary inline-flex items-center gap-2">
              {siteContent.home.closingCta.primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="button-secondary inline-flex items-center gap-2">
              {siteContent.home.closingCta.secondaryLabel}
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
