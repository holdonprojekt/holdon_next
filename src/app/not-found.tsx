"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, locales, type Locale } from "@/config/locales";
import huDictionary from "@/locales/hu/common.json";
import enDictionary from "@/locales/en/common.json";
import deDictionary from "@/locales/de/common.json";
import frDictionary from "@/locales/fr/common.json";

type NotFoundCopy = {
  title: string;
  description: string;
  cta: string;
};

const fallbackCopy: Record<Locale, NotFoundCopy> = {
  hu: {
    title: "Úgy tűnik, ez az oldal eltűnt",
    description:
      "Lehet, hogy elköltözött, vagy sosem létezett. Térj vissza a főoldalra, és fedezd fel a HoldOn projektet!",
    cta: "Vissza a főoldalra",
  },
  en: {
    title: "We can't find that page",
    description:
      "It may have moved or never existed. Head back to the main page and keep exploring HoldOn.",
    cta: "Back to homepage",
  },
  de: {
    title: "Diese Seite gibt es hier nicht",
    description:
      "Vielleicht wurde sie verschoben oder hat nie existiert. Kehre zur Startseite zurück und entdecke das HoldOn Projekt.",
    cta: "Zur Startseite",
  },
  fr: {
    title: "Nous ne trouvons pas cette page",
    description:
      "Elle a peut-être été déplacée ou n'a jamais existé. Revenez à la page principale pour continuer à découvrir HoldOn.",
    cta: "Retour à l'accueil",
  },
};

const dictionaries = {
  hu: huDictionary,
  en: enDictionary,
  de: deDictionary,
  fr: frDictionary,
} satisfies Record<Locale, { notFound?: Partial<NotFoundCopy> }>;

const resolveLocaleFromPath = (pathname: string): Locale => {
  const segments = pathname.split("/").filter(Boolean);
  const candidate = segments[0];

  if (candidate && locales.includes(candidate as Locale)) {
    return candidate as Locale;
  }

  return defaultLocale;
};

export default function NotFoundRoot() {
  const pathname = usePathname();
  const locale = resolveLocaleFromPath(pathname ?? "/");
  const homeHref = locale === defaultLocale ? "/" : `/${locale}`;
  const dictionaryCopy = dictionaries[locale]?.notFound ?? {};

  const copy: NotFoundCopy = {
    title:
      typeof dictionaryCopy.title === "string" && dictionaryCopy.title.trim().length > 0
        ? dictionaryCopy.title
        : fallbackCopy[locale].title,
    description:
      typeof dictionaryCopy.description === "string" && dictionaryCopy.description.trim().length > 0
        ? dictionaryCopy.description
        : fallbackCopy[locale].description,
    cta:
      typeof dictionaryCopy.cta === "string" && dictionaryCopy.cta.trim().length > 0
        ? dictionaryCopy.cta
        : fallbackCopy[locale].cta,
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f4e0] px-6 py-24 text-center">
      <span className="text-xl uppercase tracking-[0.5em] text-gray-500">404</span>
      <h1 className="mt-6 text-3xl font-serif text-black md:text-5xl">{copy.title}</h1>
      <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-gray-700 md:text-lg">
        {copy.description}
      </p>
      <Link
        href={homeHref}
        className="mt-10 inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-black/80"
      >
        {copy.cta}
      </Link>
    </main>
  );
}
