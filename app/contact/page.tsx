import AnimatedSection from "@/components/animated-section";
import ContactForm from "@/components/contact-form";
import { LinkedInIcon, WhatsAppIcon } from "@/components/social-icons";
import PageIntro from "@/components/page-intro";
import { createMetadata } from "@/lib/metadata";
import { contactServices, siteConfig, siteContent } from "@/lib/site-content";
import {
  BrainCircuit,
  BriefcaseBusiness,
  Globe,
  Mail,
  MessagesSquare,
} from "lucide-react";
import Link from "next/link";

export const metadata = createMetadata(siteContent.seo.pages.contact);

const serviceIcons = [BriefcaseBusiness, BrainCircuit, Globe];

export default function ContactPage() {
  return (
    <div className="w-full space-y-16 py-10 sm:py-14">
      <AnimatedSection>
        <PageIntro {...siteContent.contact.intro} />
      </AnimatedSection>

      <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <AnimatedSection className="space-y-6 lg:sticky lg:top-28">
          <article className="card-panel p-6 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {siteContent.ui.labels.directContact}
                </p>
                <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
                  {siteContent.contact.direct.title}
                </h2>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[color:var(--muted)]">
              <p className="leading-7">{siteContent.contact.direct.description}</p>
              <div className="flex flex-wrap gap-3">
                <Link href={`mailto:${siteConfig.email}`} className="button-secondary inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </Link>
                <Link
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open LinkedIn profile in a new tab"
                  className="button-secondary inline-flex items-center gap-2"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </Link>
                {siteConfig.contactLinks.whatsapp ? (
                  <Link
                    href={siteConfig.contactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Start a WhatsApp chat in a new tab"
                    className="button-secondary inline-flex items-center gap-2"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {siteContent.ui.buttons.whatsapp}
                  </Link>
                ) : null}
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {contactServices.map((service, index) => {
              const Icon = serviceIcons[index] ?? MessagesSquare;
              return (
                <article key={service.title} className="card-panel hover-panel p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                        {siteContent.ui.labels.whatICanHelpWith}
                      </p>
                      <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
                        {service.title}
                      </h2>
                    </div>
                  </div>
                  <p className="mt-5 leading-7 text-[color:var(--muted)]">{service.description}</p>
                  <ul className="mt-5 space-y-3 text-[color:var(--muted)]">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-7">
                        <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <section className="card-panel p-6 sm:p-8">
            <div className="mb-8 space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)]">
                {siteContent.contact.form.title}
              </h2>
              <p className="leading-7 text-[color:var(--muted)]">
                {siteContent.contact.form.description}
              </p>
            </div>
            <ContactForm />
          </section>
        </AnimatedSection>
      </section>
    </div>
  );
}
