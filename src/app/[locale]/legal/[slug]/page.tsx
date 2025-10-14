import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cache } from "react";
import { marked } from "marked";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import { RichText } from "@/components/RichText";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { legalPages, legalSlugs, type LegalSlug } from "@/lib/legal";

type PageParams = {
  locale: string;
  slug: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

export const dynamicParams = false;

function isLegalSlug(value: string): value is LegalSlug {
  return value in legalPages;
}

const loadLegalContent = cache(async (locale: Locale, slug: LegalSlug) => {
  const filePath = path.join(process.cwd(), "src", "content", "legal", locale, `${slug}.md`);

  try {
    const markdown = await fs.readFile(filePath, "utf8");
    return marked.parse(markdown);
  } catch (error) {
    console.error(`Missing legal markdown at ${filePath}`, error);
    notFound();
    throw error instanceof Error ? error : new Error("Missing legal markdown");
  }
});

export async function generateStaticParams() {
  return locales.flatMap((locale) => legalSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!locales.includes(localeParam as Locale) || !isLegalSlug(slug)) {
    return {};
  }

  const locale = localeParam as Locale;
  const legalSlug = slug as LegalSlug;
  const dictionary = await getDictionary(locale);
  const footer = dictionary.footer;
  const legalDictionary = dictionary.content?.legal ?? {};
  const config = legalPages[legalSlug];

  const pageTitle =
    legalDictionary[config.titleKey] ?? footer[config.footerKey] ?? dictionary.head["page-title"];

  return {
    title: `${pageTitle} | ${dictionary.head["page-title"]}`,
  };
}

export default async function LegalPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;

  if (!locales.includes(localeParam as Locale) || !isLegalSlug(slug)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const legalSlug = slug as LegalSlug;
  const dictionary = await getDictionary(locale);
  const navigation = dictionary.navigation;
  const footer = dictionary.footer;
  const legalDictionary = dictionary.content?.legal ?? {};
  const config = legalPages[legalSlug];

  const menuItems = [
    { href: `/${locale}#project`, label: navigation["nav-link-project"] },
    { href: `/${locale}#about`, label: navigation["nav-link-about"] },
    { href: `/${locale}#donate`, label: navigation["nav-link-donate"] },
    { href: `/${locale}#insta-content`, label: navigation["nav-link-insta"] },
    { href: `/${locale}#press`, label: navigation["nav-link-press"] },
  ];

  const languageOptions = locales.map((lang) => ({
    href: `/${lang}/legal/${legalSlug}`,
    label: lang,
    isActive: lang === locale,
  }));

  const footerMenuItems = [
    { href: `/${locale}#project`, label: footer["footer-link-project"] },
    { href: `/${locale}#about`, label: footer["footer-link-about"] },
    { href: `/${locale}#donate`, label: footer["footer-link-donate"] },
    { href: `/${locale}#insta-content`, label: footer["footer-link-insta"] },
    { href: `/${locale}#press`, label: footer["footer-link-press"] },
  ];

  const legalMenuItems = [
    { href: `/${locale}/legal/terms`, label: footer["footer-link-terms"] },
    { href: `/${locale}/legal/privacy`, label: footer["footer-link-privacy"] },
  ];

  const currentYear = new Date().getFullYear();
  const pageTitle =
    legalDictionary[config.titleKey] ?? footer[config.footerKey] ?? dictionary.head["page-title"];
  const intro = legalDictionary.intro ?? "";
  const contentHtml = await loadLegalContent(locale, legalSlug);

  return (
    <>
      <SiteHeader menuItems={menuItems} languageOptions={languageOptions} title={dictionary.head["page-title"]} />
      <main className="relative flex min-h-screen flex-col bg-[#f5f1db] px-6 py-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
          <header className="flex flex-col gap-3 text-center">
            {intro ? (
              <p className="text-xs font-sans uppercase tracking-[0.4em] text-gray-500">{intro}</p>
            ) : null}
            <h1 className="text-4xl font-serif font-light text-black md:text-5xl">{pageTitle}</h1>
          </header>
          <RichText html={contentHtml} as="article" className="legal-content" />
        </div>
      </main>
      <SiteFooter
        menuItems={footerMenuItems}
        legalMenuItems={legalMenuItems}
        footerLabels={{
          info: footer["footer-info"],
          credits: footer.credits,
          webDesign: footer["web-design"],
          legal: footer.legal,
        }}
        languageOptions={languageOptions}
        currentYear={currentYear}
      />
    </>
  );
}
