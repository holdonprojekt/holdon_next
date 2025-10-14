import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://holdonprojekt.hu";

const normalizeBase = (url: string) => url.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  const base = normalizeBase(BASE_URL);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
