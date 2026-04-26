import type { Metadata } from "next";
import { siteConfig, siteContent } from "@/lib/site-content";

export function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return new URL(rawUrl);
}

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: readonly string[];
};

function buildTitle(title: string) {
  if (title === siteConfig.title) {
    return `${siteConfig.name} | ${siteConfig.title}`;
  }

  return `${title} | ${siteConfig.name}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}: MetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const pageUrl = new URL(normalizedPath, siteUrl).toString();
  const fullTitle = buildTitle(title);

  return {
    title: fullTitle,
    description,
    keywords: Array.from(new Set([...siteConfig.keywords, ...keywords])),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: `${siteConfig.name} Portfolio`,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export const sharedPageDescriptions = {
  home: siteContent.seo.pages.home.description,
  about: siteContent.seo.pages.about.description,
  skills: siteContent.seo.pages.skills.description,
  projects: siteContent.seo.pages.projects.description,
  certifications: siteContent.seo.pages.certifications.description,
  contact: siteContent.seo.pages.contact.description,
} as const;
