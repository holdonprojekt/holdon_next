import Image from "next/image";
import Link from "next/link";
import { RichText } from "@/components/RichText";
import type { LanguageOption, MenuItem } from "./SiteHeader";

type FooterLabels = {
  info: string;
  credits: string;
  webDesign: string;
  legal: string;
};

type SiteFooterProps = {
  menuItems: MenuItem[];
  footerLabels: FooterLabels;
  languageOptions: LanguageOption[];
  currentYear: number;
};

const socialLinks = [
  {
    id: "mail",
    href: "mailto:holdon@holdonprojekt.hu",
    label: "holdon@holdonprojekt.hu",
    icon: "/legacy/assets/mail.webp",
  },
  {
    id: "insta",
    href: "https://www.instagram.com/holdon_projekt/",
    label: "holdon_projekt",
    icon: "/legacy/assets/instagram.webp",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/HoldOn-projekt-102266192323581",
    label: "HoldOn projekt",
    icon: "/legacy/assets/facebook.webp",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/holdon-projekt/",
    label: "HoldOn projekt",
    icon: "/legacy/assets/linkedin.webp",
  },
] as const;

export function SiteFooter({
  menuItems,
  footerLabels,
  languageOptions,
  currentYear,
}: SiteFooterProps) {
  return (
  <footer className="bg-white px-6 py-12 text-black backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-8 md:w-2/3">
          <nav className="flex flex-wrap gap-4 text-lg font-serif font-light">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-all duration-200 hover:text-shakespeare hover:underline hover:underline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            {socialLinks.map((link) => {
              const isExternal = !link.href.startsWith("mailto");

              return (
                <div key={link.id} className="flex items-center gap-3">
                <Image
                  src={link.icon}
                  alt={`${link.label} icon`}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                  <a
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="font-sans text-sm uppercase tracking-wide text-shakespeare font-light transition-all duration-200 hover:text-tussock hover:underline hover:underline-offset-2"
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
                className={
                  option.isActive
                    ? "rounded-full border border-shakespeare px-3 py-1 font-medium text-shakespeare transition-all duration-200"
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
        <div className="flex w-full max-w-sm flex-col items-center gap-4 text-center font-sans text-sm text-gray-600 md:items-end md:text-right">
          <RichText html={footerLabels.credits} className="font-light transition-colors hover:text-gray-700" />
          <RichText html={footerLabels.webDesign} className="font-light transition-colors hover:text-gray-700" />
          <div className="flex flex-wrap items-center justify-center gap-1 transition-colors hover:text-gray-700 md:justify-end">
            <span>©2021-{currentYear}</span>
            <RichText html={footerLabels.legal} className="inline font-light" as="span" />
          </div>
        </div>
      </div>
    </footer>
  );
}
