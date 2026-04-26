import Link from "next/link";


export default function NotFound() {
  return (
    <div className="flex w-full items-center py-16 sm:py-20">
      <section className="card-panel mx-auto max-w-3xl p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
          This page does not exist.
        </h1>
        <p className="mt-4 text-lg leading-8 text-[color:var(--muted)]">
          The link may be outdated, or the page may have moved. You can return home or continue exploring the portfolio from the main sections below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            Go to homepage
          </Link>
          <Link
            href="/projects"
            className="inline-flex rounded-full border border-[color:var(--border)] bg-white/80 px-6 py-3 text-sm font-semibold text-[color:var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white dark:bg-slate-950/70"
          >
            Browse projects
          </Link>
        </div>
      </section>
    </div>
  );
}
