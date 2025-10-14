import { cache } from "react";
import "server-only";

const dictionaries = {
  hu: () => import("@/locales/hu/common.json").then((module) => module.default),
  en: () => import("@/locales/en/common.json").then((module) => module.default),
  de: () => import("@/locales/de/common.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;
export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = "hu";

const loadDictionary = cache(async (locale: Locale) => {
  if (!locales.includes(locale)) {
    return dictionaries[defaultLocale]();
  }

  return dictionaries[locale]();
});

export async function getDictionary(locale: Locale) {
  return loadDictionary(locale);
}
