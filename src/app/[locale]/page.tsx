import Image from "next/image";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Hero } from "./components/Hero";
import { SiteHeader } from "./components/SiteHeader";
import { Section } from "./components/Section";
import { SiteFooter } from "./components/SiteFooter";
import { RichText } from "@/components/RichText";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { PressList } from "./components/PressList";
import { CopyField } from "./components/CopyField";

const projectBackground = "rgba(228, 218, 175, 0.95)";
const aboutBackground = "rgba(233, 227, 188, 0.95)";
const donateBackground = "rgba(241, 236, 207, 0.9)";
const instaBackground = "rgba(247, 244, 224, 0.88)";
const pressBackground = "rgba(251, 249, 237, 0.95)";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type PageParams = {
  locale: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

export const dynamicParams = false;

export default async function HoldOnPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!locales.includes(localeParam as Locale)) {
    notFound();
  }

  const locale = localeParam as Locale;

  const dictionary = await getDictionary(locale);
  const navigation = dictionary.navigation;
  const footer = dictionary.footer;
  const content = dictionary.content;
  const currentYear = new Date().getFullYear();
  const donateDetails = (content.donate["donate-details"] ?? []) as Array<{
    label: string;
    value: string;
  }>;
  const copyLabel = content.donate["donate-copy-label"] ?? "Copy";
  const copiedLabel = content.donate["donate-copied-label"] ?? "Copied";
  const scrollLabel =
    locale === "hu"
      ? "Görgetés lefelé"
      : "Scroll down";

  const menuItems = [
    { href: "#project", label: navigation["nav-link-project"] },
    { href: "#about", label: navigation["nav-link-about"] },
    { href: "#donate", label: navigation["nav-link-donate"] },
    { href: "#insta-content", label: navigation["nav-link-insta"] },
    { href: "#press", label: navigation["nav-link-press"] },
  ];

  const languageOptions = locales.map((lang) => ({
    href: `/${lang}`,
    label: lang,
    isActive: lang === locale,
  }));

  const footerMenuItems = [
    { href: "#project", label: footer["footer-link-project"] },
    { href: "#about", label: footer["footer-link-about"] },
    { href: "#donate", label: footer["footer-link-donate"] },
    { href: "#insta-content", label: footer["footer-link-insta"] },
    { href: "#press", label: footer["footer-link-press"] },
  ];
  const legalMenuItems = [
    { href: `/${locale}/legal/terms`, label: footer["footer-link-terms"] },
    { href: `/${locale}/legal/privacy`, label: footer["footer-link-privacy"] },
  ];

  return (
    <>
      <SiteHeader
        menuItems={menuItems}
        languageOptions={languageOptions}
        title={dictionary.head["page-title"]}
      />
      <main className="relative flex flex-col gap-0 overflow-hidden">
        <Hero
          title={dictionary.head["page-title"]}
          scrollTarget="#project"
          scrollLabel={scrollLabel}
        />
        <Section
          id="project"
          title={content.project["project-title"]}
          backgroundColor={projectBackground}
        >
          <div className="flex w-full max-w-3xl flex-col gap-6">
            <RichText html={content.project["project-p1"]} className="text-lg font-light leading-relaxed" />
            <RichText html={content.project["project-p2"]} className="text-lg font-light leading-relaxed" />
            <RichText html={content.project["project-p3"]} className="text-lg font-light leading-relaxed" />
          </div>
        </Section>
        <Section
          id="about"
          title={content.about["about-title"]}
          backgroundColor={aboutBackground}
        >
          <div className="flex w-full max-w-3xl flex-col gap-6">
            <RichText html={content.about["about-p1"]} className="text-lg font-light leading-relaxed" />
            <RichText html={content.about["about-p2"]} className="text-lg font-light leading-relaxed" />
          </div>
          <div className="flex w-full items-center justify-center md:w-auto">
            <Image
              src="/assets/tagok.webp"
              alt="A HoldOn projekt tagjai"
              width={480}
              height={640}
              className="h-auto w-full max-w-sm rounded-3xl shadow-lg"
            />
          </div>
        </Section>
        <Section
          id="donate"
          title={content.donate["donate-title"]}
          backgroundColor={donateBackground}
        >
          <div className="flex w-full max-w-3xl flex-col gap-6">
            <RichText html={content.donate["donate-p1"]} className="text-lg font-light leading-relaxed" />
            <RichText html={content.donate["donate-p2"]} className="text-lg font-light leading-relaxed" />
            <RichText html={content.donate["donate-p3"]} className="text-lg font-light leading-relaxed" />
          </div>
          {donateDetails.length > 0 ? (
            <div className="flex w-full max-w-md flex-col gap-4">
              {donateDetails.map((detail) => (
                <CopyField
                  key={`${detail.label}-${detail.value}`}
                  label={detail.label}
                  value={detail.value}
                  copyLabel={copyLabel}
                  copiedLabel={copiedLabel}
                />
              ))}
            </div>
          ) : null}
        </Section>
        <section
          id="insta-content"
          className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16"
          style={{ backgroundColor: instaBackground }}
        >
          <div
            className="embedsocial-hashtag w-full max-w-5xl"
            data-ref="72bc8b89bafe46e11ca936c8cb29e1d147173b2d"
          />
        </section>
        <Section
          id="press"
          title={content.press["press-title"]}
          backgroundColor={pressBackground}
        >
          <PressList />
        </Section>
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
      <Script src="https://embedsocial.com/cdn/ht.js" strategy="lazyOnload" />
    </>
  );
}
