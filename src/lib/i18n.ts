import { cache } from "react";
import "server-only";
import { defaultLocale, locales, type Locale } from "@/config/locales";

type Dictionary = typeof import("@/locales/hu/common.json");

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  hu: () => import("@/locales/hu/common.json").then((module) => module.default),
  en: () => import("@/locales/en/common.json").then((module) => module.default),
  de: () => import("@/locales/de/common.json").then((module) => module.default),
  fr: () => import("@/locales/fr/common.json").then((module) => module.default),
};

const loadDictionary = cache(async (locale: Locale) => {
  if (!locales.includes(locale)) {
    return dictionaries[defaultLocale]();
  }

  return dictionaries[locale]();
});

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return loadDictionary(locale);
}
export { locales, defaultLocale };
export type { Locale, Dictionary };
