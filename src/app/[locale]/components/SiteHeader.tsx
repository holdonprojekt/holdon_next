"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
};

export function SiteHeader({ menuItems, languageOptions }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    return undefined;
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 shadow-header backdrop-blur">
      <div
        ref={containerRef}
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8"
      >
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/legacy/assets/telihold2-01.webp"
            alt="HoldOn logó"
            width={64}
            height={64}
            priority
            className="h-12 w-12 md:h-16 md:w-16"
          />
          <span className="hidden text-2xl font-accent text-shakespeare drop-shadow-sm md:inline-block">
            HoldOn
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-serif tracking-wide text-gray-700 transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2 text-sm uppercase">
            {languageOptions.map((option) => (
              <Link
                key={option.label}
                href={option.href}
                className={
                  option.isActive
                    ? "rounded-full border border-shakespeare px-3 py-1 font-semibold text-shakespeare"
                    : "rounded-full border border-transparent px-3 py-1 text-gray-600 transition hover:border-shakespeare hover:text-shakespeare"
                }
                scroll={false}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 rounded bg-black transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 rounded bg-black transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 rounded bg-black transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } transition`}
      >
        <div className="bg-white/95 px-6 pb-8 pt-2 shadow-lg backdrop-blur">
          <nav className="flex flex-col gap-4 text-lg">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-serif text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex gap-2 text-sm uppercase">
            {languageOptions.map((option) => (
              <Link
                key={option.label}
                href={option.href}
                scroll={false}
                className={
                  option.isActive
                    ? "rounded-full border border-shakespeare px-3 py-1 font-semibold text-shakespeare"
                    : "rounded-full border border-transparent px-3 py-1 text-gray-600"
                }
                onClick={() => setIsOpen(false)}
              >
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
