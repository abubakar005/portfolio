import AnimatedSection from "@/components/animated-section";
import PageIntro from "@/components/page-intro";
import ProjectShowcase from "@/components/project-showcase";
import { createMetadata } from "@/lib/metadata";
import { projects, siteContent } from "@/lib/site-content";

export const metadata = createMetadata(siteContent.seo.pages.projects);

export default function ProjectsPage() {
  return (
    <div className="w-full space-y-16 py-10 sm:py-14">
      <AnimatedSection>
        <PageIntro {...siteContent.projectsPage.intro} />
      </AnimatedSection>

      <AnimatedSection className="card-panel p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              {siteContent.projectsPage.summary.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
              {siteContent.projectsPage.summary.title}
            </h2>
          </div>
          <div className="space-y-4 leading-8 text-[color:var(--muted)] lg:col-span-2">
            {siteContent.projectsPage.summary.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <ProjectShowcase projects={projects} />
    </div>
  );
}
