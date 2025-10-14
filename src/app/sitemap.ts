import type { MetadataRoute } from "next";
import { defaultLocale, locales } from "@/lib/i18n";
import { legalSlugs } from "@/lib/legal";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://holdonprojekt.hu";

const normalizeBase = (url: string) => url.replace(/\/$/, "");

const buildUrl = (base: string, path: string) => {
  if (!path) {
    return base;
  }

  return `${base}/${path.replace(/^\//, "")}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = normalizeBase(BASE_URL);
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    const localePath = locale === defaultLocale ? "" : locale;
    entries.push({
      url: buildUrl(base, localePath),
      lastModified,
      changeFrequency: "weekly",
      priority: locale === defaultLocale ? 1 : 0.8,
    });

    legalSlugs.forEach((slug) => {
      const path = `${localePath ? `${localePath}/` : ""}legal/${slug}`;
      entries.push({
        url: buildUrl(base, path),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return entries;
}
