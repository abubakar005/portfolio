import AnimatedSection from "@/components/animated-section";
import { ApigeeCertArt, UipathCertArt } from "@/components/certification-art";
import { Award } from "lucide-react";
import type { ComponentType } from "react";

const certifications: {
  title: string;
  issuer: string;
  track: string;
  date: string;
  bullets: string[];
  imageAlt: string;
  Art: ComponentType<{ className?: string; "aria-label"?: string }>;
}[] = [
  {
    title: "Apigee API Engineer",
    issuer: "Google",
    track: "APIs Development",
    date: "December 2018",
    bullets: [
      "Proficient in Apigee APIs development, installation, and monetization.",
    ],
    imageAlt: "Apigee API Engineer — Google Cloud certification graphic",
    Art: ApigeeCertArt,
  },
  {
    title: "RPA Certified",
    issuer: "UiPath",
    track: "Robotics",
    date: "June 2018",
    bullets: ["Robotic Process Automation certified developer"],
    imageAlt: "UiPath RPA certification graphic",
    Art: UipathCertArt,
  },
];

export default function CertificationsPage() {
  return (
    <div className="w-full py-8">
      <AnimatedSection className="mb-10 max-w-3xl">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 uppercase dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
          <Award className="h-3.5 w-3.5 text-indigo-500" />
          Credentials
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Certifications
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Professional certifications earned across API platforms and automation.
        </p>
      </AnimatedSection>

      <div className="grid gap-8 lg:grid-cols-2">
        {certifications.map((cert, index) => {
          const Art = cert.Art;
          return (
            <AnimatedSection
              key={cert.title}
              delay={index * 0.08}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="flex w-full items-center justify-center bg-slate-100 p-4 dark:bg-slate-950">
                <Art
                  className="h-auto w-full max-w-full"
                  aria-label={cert.imageAlt}
                />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {cert.title}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {cert.issuer} · {cert.track} · {cert.date}
                  </p>
                </div>
                <ul className="list-inside list-disc space-y-1.5 text-slate-600 dark:text-slate-300">
                  {cert.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
