import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

type Entry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const routes: Entry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/websites", changeFrequency: "monthly", priority: 0.9 },
  { path: "/applications", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/apps/study-planner/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/apps/percentage-calculator/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
