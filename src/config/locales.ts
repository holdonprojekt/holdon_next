export const localeList = ["hu", "en", "de", "fr"] as const;

export type Locale = (typeof localeList)[number];

export const locales: Locale[] = [...localeList];

export const defaultLocale: Locale = "hu";
