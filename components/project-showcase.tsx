"use client";

import AnimatedSection from "@/components/animated-section";
import { siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/site-content";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type ProjectShowcaseProps = {
  projects: Project[];
  showFilters?: boolean;
  compact?: boolean;
};

export default function ProjectShowcase({
  projects,
  showFilters = true,
  compact = false,
}: ProjectShowcaseProps) {
  const filters = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects],
  );
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>(filters[0]);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div className="space-y-6">
      {showFilters ? (
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                activeFilter === filter
                  ? "border-indigo-500 bg-indigo-500 text-white shadow-sm"
                  : "border-[color:var(--border)] bg-white/75 text-[color:var(--foreground)] hover:-translate-y-0.5 hover:border-indigo-300 hover:bg-white dark:bg-slate-950/55",
              )}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
      ) : null}

      <div className={cn("grid gap-6", compact ? "lg:grid-cols-3" : "md:grid-cols-2")}>
        {visibleProjects.map((project, index) => (
          <AnimatedSection
            key={`${project.title}-${activeFilter}`}
            delay={index * 0.06}
            className="group h-full"
          >
            <article className="card-panel hover-panel flex h-full flex-col gap-5 p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <span className="inline-flex items-center rounded-full border border-indigo-200/80 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-indigo-500/20 dark:text-indigo-300">
                  {project.category}
                </span>
                {project.featured ? (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-[color:var(--muted)]">
                    <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                    {siteContent.ui.labels.featuredWork}
                  </span>
                ) : null}
              </div>

              <div className="space-y-3">
                <h2 className="text-[1.65rem] font-semibold tracking-tight text-[color:var(--foreground)]">
                  {project.title}
                </h2>
                <p className="text-sm font-medium leading-6 text-indigo-600 dark:text-indigo-300">
                  {project.summary}
                </p>
                <p className="leading-7 text-[color:var(--muted)]">{project.description}</p>
              </div>

              <div className="rounded-2xl border border-[color:var(--border)]/80 bg-[color:var(--surface)]/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {siteContent.ui.labels.projectImpact}
                </p>
                <p className="mt-2 leading-7 text-[color:var(--foreground)]">{project.impact}</p>
              </div>

              <ul className="space-y-2 text-sm leading-6 text-[color:var(--muted)]">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="skill-badge rounded-full border border-[color:var(--border)] bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--foreground)] dark:bg-slate-950/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>

      {!compact ? (
        <div className="flex justify-center pt-2">
          <Link href="/contact" className="button-secondary inline-flex items-center gap-2">
            {siteContent.ui.buttons.discussProject}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </div>
  );
}
