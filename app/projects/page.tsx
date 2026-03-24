import AnimatedSection from "@/components/animated-section";

const projects = [
  {
    title: "Easypaisa Feature Platform",
    description:
      "Implemented and shipped multiple production features for the Easypaisa application, including deployment participation and critical issue resolution in war-room operations.",
    tags: ["Java 11", "Spring Cloud", "Microservices", "RabbitMQ", "Redis"],
  },
  {
    title: "Smart Meter Management System",
    description:
      "Built backend service enhancements and ticket-driven modules for a smart meter management solution at Minsait, while supporting team delivery and code quality.",
    tags: ["Java 17", "Spring Boot", "Kafka", "MongoDB", "MySQL"],
  },
  {
    title: "Walmart Cloud Migration (Confiz)",
    description:
      "Migrated enterprise workloads to Microsoft Azure and later to the client cloud (WCNP), and automated deployments with Jenkins and Docker-based pipelines.",
    tags: ["Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
  },
  {
    title: "Upaisa Branchless Banking",
    description:
      "Contributed across the full SDLC for Upaisa (Ubank Branchless Banking), including feature development, menu flows, unit testing, code reviews, and client coordination.",
    tags: ["Spring MVC", "SOA", "Oracle", "Apigee", "AES/RSA"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-full py-8">
      <AnimatedSection className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Projects
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Selected enterprise and fintech projects from my professional
          experience, focused on scalability, reliability, and secure platform
          engineering.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedSection
            key={project.title}
            delay={index * 0.08}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div className="h-44 bg-gradient-to-br from-indigo-500/40 via-sky-500/20 to-slate-200 dark:from-indigo-500/35 dark:via-sky-500/20 dark:to-slate-700" />
            <div className="space-y-4 p-6">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                {project.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
