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
      className="flex min-h-screen flex-col items-center justify-center gap-10 px-10 py-10 md:flex-row md:items-center md:justify-evenly"
      style={{ backgroundColor }}
    >
      <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:justify-evenly">
        <div className="w-full max-w-sm text-center md:max-w-[20%] md:text-center">
          <h2 className="mx-auto max-w-xs text-3xl font-serif text-black md:text-4xl md:leading-tight">
            <span className="font-light">{title}</span>
          </h2>
        </div>
          <div className="flex w-full flex-col gap-10 text-lg leading-relaxed text-black md:flex-row md:items-center md:justify-between">
            {Array.isArray(children) ? (
              <>
                <div className="flex w-full flex-col items-center md:w-[65%]">
                  {children[0]}
                </div>
                {children.length > 1 ? (
                  <div className="flex w-full flex-col items-center md:w-[35%]">
                    {children.slice(1)}
                  </div>
                ) : null}
              </>
            ) : (
              <div className="flex w-full flex-col items-center md:w-[100%]">
                {children}
              </div>
            )}
          </div>
      </div>
    </section>
  );
}
