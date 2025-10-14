import Link from "next/link";
import { pressItems } from "@/content/press";

export function PressList() {
  return (
    <div className="grid w-full max-w-5xl gap-8">
      {pressItems.map((item) => (
        <article
          key={`${item.date}-${item.href}`}
          className="rounded-3xl bg-white/85 p-8 shadow-lg shadow-black/5 backdrop-blur"
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h3 className="text-2xl font-serif text-shakespeare">
              <Link
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="font-light transition-colors hover:text-black"
              >
                {item.title}
              </Link>
            </h3>
            <time className="text-sm font-sans uppercase tracking-wide text-gray-600 font-light whitespace-nowrap md:text-right">
              {item.date}
            </time>
          </div>
          <p className="mt-4 text-base leading-relaxed text-black/80 font-light">
            {item.excerpt}
          </p>
          <p className="mt-4 text-sm font-sans uppercase tracking-wide">
            <Link
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-shakespeare transition-colors hover:text-black"
            >
              {item.sourceLabel}
            </Link>
          </p>
        </article>
      ))}
    </div>
  );
}
