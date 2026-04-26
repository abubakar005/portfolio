import { getSiteUrl } from "@/lib/metadata";
import { navigationLinks, siteConfig } from "@/lib/site-content";

function isSpecificProfileUrl(value: string) {
  try {
    const url = new URL(value);
    return url.pathname !== "/" && url.pathname !== "";
  } catch {
    return false;
  }
}

export default function StructuredData() {
  const siteUrl = getSiteUrl();
  const sameAs = [siteConfig.social.github, siteConfig.social.linkedin].filter(
    isSpecificProfileUrl,
  );

  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.title,
        description: siteConfig.description,
        email: siteConfig.email,
        knowsAbout: siteConfig.keywords,
        sameAs,
        url: siteUrl.toString(),
      },
      {
        "@type": "WebSite",
        name: `${siteConfig.name} Portfolio`,
        description: siteConfig.description,
        url: siteUrl.toString(),
        inLanguage: "en",
        publisher: {
          "@type": "Person",
          name: siteConfig.name,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: navigationLinks.map((link, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: link.label,
          item: new URL(link.href, siteUrl).toString(),
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
