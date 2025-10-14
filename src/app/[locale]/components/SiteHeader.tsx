"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cookie } from "../../fonts";

export type MenuItem = {
  href: string;
  label: string;
};

export type LanguageOption = {
  href: string;
  label: string;
  isActive: boolean;
};

type SiteHeaderProps = {
  menuItems: MenuItem[];
  languageOptions: LanguageOption[];
  title: string;
};

export function SiteHeader({ menuItems, languageOptions, title }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: Event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Open navigation"
        onClick={() => setIsOpen(true)}
        className={`fixed right-4 top-6 z-40 flex items-center gap-3 rounded-full bg-white/90 px-5 py-3 backdrop-blur transition-all duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shakespeare md:right-12 ${
          isOpen ? "pointer-events-none -translate-y-2 opacity-0" : "pointer-events-auto"
        }`}
      >
        <Image
          src="/assets/telihold2-01.webp"
          alt="HoldOn logó"
          width={48}
          height={48}
          priority
          className="h-10 w-10"
        />
        <span className={`${cookie.className} text-2xl text-black md:text-3xl`}>
          {title}
        </span>
      </button>
      <div
        ref={panelRef}
        className={`fixed left-1/2 top-4 z-40 w-[calc(100%-1.5rem)] max-w-8xl -translate-x-1/2 overflow-hidden rounded-4xl bg-white/95 backdrop-blur transition-all duration-300 md:top-6 md:w-[calc(100%-6rem)] ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-[130%] opacity-0"
        }`}
      >
        <div className="grid gap-8 px-8 py-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-12 md:px-16 md:py-12">
          <a
            href="#"
            className="flex items-center gap-4 text-black"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/assets/telihold2-01.webp"
              alt="HoldOn logó"
              width={64}
              height={64}
              priority
              className="h-12 w-12 drop-shadow-md md:h-16 md:w-16"
            />
            <span className={`${cookie.className} text-4xl md:text-5xl`}>
              {title}
            </span>
          </a>
          <nav className="flex flex-col gap-5 text-xl font-serif font-light text-gray-700 md:flex-row md:items-center md:justify-center md:gap-12">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="transition-colors hover:text-black/60"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-end gap-6 md:items-end">
            <button
              type="button"
              aria-label="Close navigation"
              className="relative ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:border-black/20 hover:bg-white/90 hover:text-black md:ml-0"
              onClick={() => setIsOpen(false)}
            >
              <span className="absolute block h-6 w-6 rotate-45">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded bg-current" />
                <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded bg-current" />
              </span>
            </button>
            <div className="flex flex-wrap justify-end gap-4 text-sm uppercase tracking-wide">
              {languageOptions.map((option) => (
                <Link
                  key={option.label}
                  href={option.href}
                  scroll={false}
                  onClick={() => setIsOpen(false)}
                  className={
                    option.isActive
                      ? "rounded-full border border-black px-4 py-1 font-medium text-black"
                      : "rounded-full border border-gray-300 px-4 py-1 text-gray-600 font-light transition-all duration-200 hover:border-black/30 hover:text-black"
                  }
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
