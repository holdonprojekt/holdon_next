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
import { LangSetter } from "./components/LangSetter";

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

  return (
    <>
      <LangSetter locale={locale} />
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
              src="/legacy/assets/tagok.webp"
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
          <div className="flex w-full max-w-sm flex-col gap-3 rounded-3xl bg-white/80 p-6 text-base shadow-lg shadow-black/5">
            <RichText html={content.donate["donate-li1"]} className="font-light" />
            <RichText html={content.donate["donate-li2"]} className="font-light" />
            <RichText html={content.donate["donate-li3"]} className="font-light" />
            <RichText html={content.donate["donate-li4"]} className="font-light" />
          </div>
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
        footerLabels={{
          info: footer["footer-info"],
          credits: footer.credits,
          webDesign: footer["web-design"],
          legal: footer.legal,
        }}
        languageOptions={languageOptions}
        currentYear={currentYear}
      />
      <Script src="https://embedsocial.com/cdn/ht.js" strategy="afterInteractive" />
    </>
  );
}
