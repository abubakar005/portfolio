import AnimatedSection from "@/components/animated-section";
import PageIntro from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";
import {
  deliveryPrinciples,
  domainFocus,
  experienceTimeline,
  profileFacts,
  siteContent,
} from "@/lib/site-content";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata(siteContent.seo.pages.about);

export default function AboutPage() {
  return (
    <div className="w-full space-y-16 py-10 sm:py-14">
      <AnimatedSection>
        <PageIntro {...siteContent.about.intro} />
      </AnimatedSection>

      <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <AnimatedSection className="card-panel p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
              <Layers3 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                {siteContent.about.summary.eyebrow}
              </p>
              <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
                {siteContent.about.summary.title}
              </h2>
            </div>
          </div>
          <div className="mt-6 space-y-5 leading-8 text-[color:var(--muted)]">
            {siteContent.about.summary.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.06} className="grid gap-6">
          <article className="card-panel p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {siteContent.about.domain.eyebrow}
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
                  {siteContent.about.domain.title}
                </h2>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {domainFocus.map((domain) => (
                <span
                  key={domain}
                  className="skill-badge rounded-full border border-[color:var(--border)] bg-white/80 px-4 py-2 text-sm font-medium text-[color:var(--foreground)] dark:bg-slate-950/70"
                >
                  {domain}
                </span>
              ))}
            </div>
          </article>

          <article className="card-panel p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-300">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {siteContent.about.facts.eyebrow}
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
                  {siteContent.about.facts.title}
                </h2>
              </div>
            </div>
            <dl className="mt-6 space-y-4">
              {profileFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]/70 p-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-7 text-[color:var(--foreground)]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="card-panel p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {siteContent.about.principles.eyebrow}
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
                  {siteContent.about.principles.title}
                </h2>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-[color:var(--muted)]">
              {deliveryPrinciples.map((principle) => (
                <li key={principle} className="flex gap-3 leading-7">
                  <Sparkles className="mt-1 h-4 w-4 flex-none text-indigo-500" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </article>
        </AnimatedSection>
      </section>

      <section className="space-y-8">
        <AnimatedSection className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] shadow-sm dark:bg-slate-950/65">
            {siteContent.ui.labels.experienceTimeline}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
            {siteContent.about.timeline.title}
          </h2>
          <p className="text-lg leading-8 text-[color:var(--muted)]">
            {siteContent.about.timeline.description}
          </p>
        </AnimatedSection>

        <div className="space-y-5">
          {experienceTimeline.map((entry, index) => (
            <AnimatedSection key={`${entry.company}-${entry.period}`} delay={index * 0.05}>
              <article className="card-panel grid gap-5 p-6 sm:grid-cols-[13rem_1fr] sm:p-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">
                    {entry.period}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-[color:var(--foreground)]">
                    {entry.role}
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{entry.company}</p>
                </div>
                <div>
                  <p className="leading-8 text-[color:var(--muted)]">{entry.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.stack.map((item) => (
                      <span
                        key={item}
                        className="skill-badge rounded-full border border-[color:var(--border)] bg-white/80 px-3 py-1 text-xs font-medium text-[color:var(--foreground)] dark:bg-slate-950/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <AnimatedSection>
        <section className="card-panel flex flex-col gap-6 p-8 sm:flex-row sm:items-end sm:justify-between sm:p-10">
          <div className="max-w-3xl space-y-4">
            <p className="inline-flex items-center rounded-full border border-indigo-200/80 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-indigo-500/20 dark:text-indigo-300">
              {siteContent.ui.labels.nextStep}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              {siteContent.about.nextStep.title}
            </h2>
            <p className="text-lg leading-8 text-[color:var(--muted)]">
              {siteContent.about.nextStep.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/skills" className="button-primary inline-flex items-center gap-2">
              {siteContent.about.nextStep.primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="button-secondary inline-flex items-center gap-2">
              {siteContent.about.nextStep.secondaryLabel}
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
