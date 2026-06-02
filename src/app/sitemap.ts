import type { MetadataRoute } from "next";
import { APP_URL } from "~/components/const/constants";

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/services/mediation", priority: 0.95, changeFrequency: "monthly" },
  { path: "/training", priority: 0.94, changeFrequency: "weekly" },
  { path: "/services/restorative-justice", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/police-referral", priority: 0.89, changeFrequency: "monthly" },
  { path: "/training/co-parenting", priority: 0.86, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.75, changeFrequency: "monthly" },
  { path: "/training/ethics", priority: 0.7, changeFrequency: "monthly" },
] satisfies Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${APP_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
