import AnimatedSection from "@/components/animated-section";
import {
  CloudCog,
  Database,
  KeyRound,
  Layers3,
  ServerCog,
  Workflow,
} from "lucide-react";

const skills = [
  { name: "Java 8/11/17, Kotlin, JEE/J2EE", icon: Layers3 },
  { name: "Spring Boot/Cloud, Microservices, REST/SOAP", icon: ServerCog },
  { name: "Oracle, MySQL, PostgreSQL, MongoDB, Cassandra", icon: Database },
  { name: "Docker, Kubernetes, Jenkins, Azure, CI/CD", icon: CloudCog },
  { name: "OAuth2/JWT, API Security, AES/RSA", icon: KeyRound },
  { name: "Agile/Scrum, TDD, SOA, Solution Architecture", icon: Workflow },
];

const timeline = [
  {
    year: "Jul 2023 - Present",
    role: "Software Engineer · Keylane (Netherlands)",
    detail:
      "Building insurance and pension platform features, supporting production issues, and collaborating across distributed teams using Java 11, Spring Boot, JPA, Oracle, Jenkins, Docker, and SOAP.",
  },
  {
    year: "Mar 2022 - May 2023",
    role: "Senior Java Developer · Minsait (Indra)",
    detail:
      "Delivered Smart Meter Management solutions from Jira requirements, mentored team members, and built microservice-based services with Java 17, Spring Boot, Kafka, MongoDB, and MySQL.",
  },
  {
    year: "Aug 2021 - Jan 2023",
    role: "Principal Software Engineer · Telenor Microfinance Bank",
    detail:
      "Developed core Easypaisa features, managed production deployments, and resolved critical incidents in war-room operations with Spring Cloud microservices, RabbitMQ, Redis, and MySQL.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full space-y-16 py-8">
      <AnimatedSection className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          About Me
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          I&apos;m Abubakar, a senior software developer specializing in
          enterprise Java platforms, API-centric systems, and secure
          fintech-grade solutions. My background spans insurance, pension,
          telecom, and branchless banking products with hands-on ownership from
          architecture to production support.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
          Skills
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
            >
              <Icon className="h-5 w-5 text-indigo-500" />
              <p className="mt-3 font-medium text-slate-800 dark:text-slate-100">
                {name}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <h2 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
          Experience Timeline
        </h2>
        <div className="space-y-5">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="relative rounded-2xl border border-slate-200 bg-white/80 p-5 pl-8 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <span className="absolute top-6 left-4 h-2 w-2 rounded-full bg-indigo-500" />
              <p className="text-xs font-semibold tracking-wide text-indigo-500 uppercase">
                {item.year}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {item.role}
              </h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white/80 p-5 dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Previous roles include Senior Software Engineer at Confiz and
            Shopdev, and Senior Consultant at Abacus Consulting where I worked
            on Upaisa (Ubank Branchless Banking), Apigee monetization setup, and
            technical solution architecture.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
