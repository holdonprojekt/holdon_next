import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/app/components/RichText";
import type { LanguageOption, MenuItem } from "./SiteHeader";

type FooterLabels = {
  info: string;
  credits: string;
  webDesign: string;
  legal: string;
};

type SiteFooterProps = {
  menuItems: MenuItem[];
  legalMenuItems: MenuItem[];
  footerLabels: FooterLabels;
  languageOptions: LanguageOption[];
  currentYear: number;
};

const socialLinks = [
  {
    id: "mail",
    href: "mailto:holdon@holdonprojekt.hu",
    label: "holdon@holdonprojekt.hu",
  icon: "/assets/mail.webp",
  },
  {
    id: "insta",
    href: "https://www.instagram.com/holdon_projekt/",
    label: "holdon_projekt",
  icon: "/assets/instagram.webp",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/HoldOn-projekt-102266192323581",
    label: "HoldOn projekt",
  icon: "/assets/facebook.webp",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/holdon-projekt/",
    label: "HoldOn projekt",
  icon: "/assets/linkedin.webp",
  },
] as const;

export function SiteFooter({
  menuItems,
  legalMenuItems,
  footerLabels,
  languageOptions,
  currentYear,
}: SiteFooterProps) {
  return (
  <footer className="bg-white px-6 py-12 backdrop-blur">
      <div className="mx-auto flex w-[calc(100%-3rem)] max-w-8xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col gap-8 md:w-2/3">
          <nav
            className="flex flex-wrap gap-6 text-lg font-serif font-light"
            aria-label="Footer"
          >
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-umami-event="footer-menu-link"
                className="transition-all duration-200 hover:underline hover:underline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {legalMenuItems.length > 0 ? (
            <nav
              className="flex flex-wrap gap-6 text-lg font-serif font-light"
              aria-label="Legal"
            >
              {legalMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  hrefLang={item.href.split("/")[1] ?? undefined}
                  data-umami-event="footer-legal-menu-link"
                  className="transition-all duration-200 hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : null}
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-nowrap sm:items-center sm:gap-8">
            {socialLinks.map((link) => {
              const isExternal = !link.href.startsWith("mailto");
              return (
                <div key={link.id} className="flex items-center gap-2">
                <Image
                  src={link.icon}
                  alt={`${link.label} icon`}
                  width={24}
                  height={24}
                  loading="lazy"
                  className="h-6 w-6"
                />
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    data-umami-event={`footer-social-${link.id}-link`}
                    className="font-sans text-sm uppercase tracking-wide font-light transition-all duration-200 hover:underline hover:underline-offset-3 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="flex gap-3 text-sm uppercase">
            {languageOptions.map((option) => (
              <Link
                key={option.label}
                href={option.href}
                scroll={false}
                hrefLang={option.label}
                data-umami-event={`footer-language-${option.label}-link`}
                className={
                  option.isActive
                    ? "rounded-full border border-black px-3 py-1 font-medium text-black"
                    : "rounded-full border border-gray-300 px-3 py-1 text-gray-600 font-light transition-all duration-200 hover:border-black/30 hover:text-black"
                }
              >
                {option.label}
              </Link>
            ))}
          </div>
          <RichText
            html={footerLabels.info}
            className="max-w-2xl text-sm font-sans font-light leading-relaxed text-gray-600"
          />
        </div>
        <div className="flex w-full max-w-sm flex-col items-start gap-4 text-start font-sans text-sm text-gray-600 lg:items-end lg:text-end">
          <RichText html={footerLabels.credits} className="font-light" />
          <RichText html={footerLabels.webDesign} className="font-light transition-colors hover:text-black" />
          <div className="flex flex-wrap justify-center gap-1 lg:justify-end">
            <span>©2021-{currentYear}</span>
            <RichText html={footerLabels.legal} className="inline font-light" as="span" />
          </div>
        </div>
      </div>
    </footer>
  );
}
