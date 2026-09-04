import type { MetadataRoute } from "next";
import { CONTENT_UPDATED, absoluteUrl } from "@/lib/site";

/** /sitemap.xml —— 列出全部可索引页面。 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED);
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/agents"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/privacy"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
