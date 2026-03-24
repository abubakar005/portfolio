import AnimatedSection from "@/components/animated-section";
import { ArrowRight } from "lucide-react";
import { Source_Serif_4 } from "next/font/google";
import Link from "next/link";

const taglineSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center py-16">
      <AnimatedSection className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-indigo-500 uppercase">
          Senior Software Developer | System Architect
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          I build secure, scalable software solutions.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          I am a senior software developer with extensive experience across the full Software Development Life Cycle (SDLC).
          I specialize in building scalable, high-performance systems while also delivering seamless user-facing solutions.
          With strong expertise in Java and modern frameworks, I design and develop robust applications across fintech and other domains.
        </p>
        <p
          className={`${taglineSerif.className} mt-8 max-w-2xl border-t border-slate-300 pt-8 text-xl font-medium leading-snug tracking-tight text-slate-800 dark:border-slate-600 dark:text-slate-200`}
        >
          Let&apos;s build reliable and scalable software solutions together.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
