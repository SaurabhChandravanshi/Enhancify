import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/websites", changeFrequency: "monthly", priority: 0.9 },
  { path: "/applications", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  // Per-app product marketing landing. Higher priority than legal pages
  // because this is the discoverable "product" URL we want search
  // engines and social share cards to prefer.
  {
    path: "/apps/insights",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  // Per-app legal documents. Google Play requires the privacy policy URL
  // submitted with an app to describe that specific app; we mint a fresh
  // one per product under `/apps/<slug>/policies/*`.
  {
    path: "/apps/insights/policies/privacy",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/apps/insights/policies/terms",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/apps/insights/account-deletion",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/apps/insights/help",
    // Help page content (FAQ + form) evolves as we ship features and
    // adjust support copy, so allow crawlers to revisit sooner than
    // long-tail legal docs.
    changeFrequency: "monthly",
    priority: 0.5,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
