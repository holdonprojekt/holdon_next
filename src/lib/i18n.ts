import "server-only";

const dictionaries = {
  en: () => import("@/locales/en/common.json").then((module) => module.default),
  hu: () => import("@/locales/hu/common.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;
export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = "hu";

export async function getDictionary(locale: Locale) {
  if (!locales.includes(locale)) {
    return dictionaries[defaultLocale]();
  }

  return dictionaries[locale]();
}
