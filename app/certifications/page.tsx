import AnimatedSection from "@/components/animated-section";
import PageIntro from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";
import { certifications, siteContent } from "@/lib/site-content";
import { Award, CalendarDays, GraduationCap } from "lucide-react";
import Image from "next/image";

export const metadata = createMetadata(siteContent.seo.pages.certifications);

export default function CertificationsPage() {
  return (
    <div className="w-full space-y-16 py-10 sm:py-14">
      <AnimatedSection>
        <PageIntro {...siteContent.certificationsPage.intro} />
      </AnimatedSection>

      <section className="grid gap-8 lg:grid-cols-2">
        {certifications.map((cert, index) => (
          <AnimatedSection key={cert.title} delay={index * 0.06}>
            <article className="card-panel hover-panel overflow-hidden">
              <div className="border-b border-[color:var(--border)] bg-[color:var(--surface)]/80 px-6 py-7 dark:bg-slate-950/85">
                <div className="rounded-3xl border border-[color:var(--border)] bg-white/90 px-6 py-6 shadow-sm dark:bg-slate-950/75">
                  <Image
                    src={
                      cert.logo === "google-cloud"
                        ? "/certifications/google-cloud-apigee.svg"
                        : "/certifications/uipath.svg"
                    }
                    alt={cert.imageAlt}
                    width={320}
                    height={84}
                    className="h-14 w-auto max-w-full"
                  />
                </div>
              </div>

              <div className="space-y-5 p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] dark:bg-slate-950/70">
                      <Award className="h-3.5 w-3.5 text-indigo-500" />
                      {siteContent.ui.labels.certification}
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                      {cert.title}
                    </h2>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">
                      {cert.issuer} · {cert.track}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/70 px-3 py-1.5 text-xs font-medium text-[color:var(--foreground)]">
                    <CalendarDays className="h-3.5 w-3.5 text-indigo-500" />
                    {cert.date}
                  </span>
                </div>

                <p className="leading-7 text-[color:var(--muted)]">{cert.summary}</p>

                <ul className="space-y-3 text-[color:var(--muted)]">
                  {cert.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </section>

      <AnimatedSection>
        <section className="card-panel grid gap-6 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                {siteContent.ui.labels.ongoingLearning}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
                {siteContent.certificationsPage.ongoingLearning.title}
              </h2>
            </div>
          </div>
          <div className="space-y-4 leading-8 text-[color:var(--muted)]">
            {siteContent.certificationsPage.ongoingLearning.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
