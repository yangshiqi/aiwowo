import type { MetadataRoute } from "next";
import { AGENT_RESOURCES, absoluteUrl } from "@/lib/site";

/** /robots.txt —— 全站开放抓取,并指向 sitemap。 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl(AGENT_RESOURCES.sitemap),
    host: absoluteUrl("/"),
  };
}
