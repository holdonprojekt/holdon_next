import type { ReactNode } from "react";

export type SectionProps = {
  id: string;
  title: string;
  backgroundColor: string;
  children: ReactNode;
};

export function Section({ id, title, backgroundColor, children }: SectionProps) {
  return (
    <section
      id={id}
      className="flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:items-start md:justify-evenly"
      style={{ backgroundColor }}
    >
      <div className="w-full max-w-xs text-center md:max-w-sm md:text-left">
        <h2 className="text-3xl font-serif text-black md:text-4xl">{title}</h2>
      </div>
      <div className="flex w-full max-w-5xl flex-1 flex-col gap-8 text-lg leading-relaxed text-black md:flex-row md:items-start md:gap-12">
        {children}
      </div>
    </section>
  );
}
