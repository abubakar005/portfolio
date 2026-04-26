import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/metadata";
import { navigationLinks } from "@/lib/site-content";

const routes = navigationLinks.map((link) => link.href);

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return routes.map((route, index) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
