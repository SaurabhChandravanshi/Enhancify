import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const app = site.apps.insights;

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

// Enhancify marketing site — served on `site.url` (enhancify.in).
const enhancifyRoutes: Entry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/websites", changeFrequency: "monthly", priority: 0.9 },
  { path: "/applications", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

// Insights app — served on `app.url` (insightsapp.in) with clean paths.
// The pages live under `/apps/insights/*` internally but are canonical
// on their own domain (see `src/proxy.ts`), so the sitemap must list the
// public, clean URLs rather than the `enhancify.in/apps/insights/*` ones.
const insightsRoutes: Entry[] = [
  { path: app.paths.home, changeFrequency: "weekly", priority: 0.9 },
  { path: app.paths.help, changeFrequency: "monthly", priority: 0.5 },
  { path: app.paths.privacy, changeFrequency: "yearly", priority: 0.3 },
  { path: app.paths.terms, changeFrequency: "yearly", priority: 0.3 },
  { path: app.paths.deleteAccount, changeFrequency: "yearly", priority: 0.3 },
];

// `path.home` is "/"; strip it so we emit the bare origin (no trailing
// slash) to match how the other entries are formed.
const toUrl = (base: string, path: string) =>
  `${base}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...enhancifyRoutes.map(({ path, changeFrequency, priority }) => ({
      url: toUrl(site.url, path),
      lastModified,
      changeFrequency,
      priority,
    })),
    ...insightsRoutes.map(({ path, changeFrequency, priority }) => ({
      url: toUrl(app.url, path),
      lastModified,
      changeFrequency,
      priority,
    })),
  ];
}
