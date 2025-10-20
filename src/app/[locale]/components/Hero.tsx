import Image from "next/image";
import { cookie } from "../../fonts";

type HeroProps = {
  title: string;
  scrollTarget: string;
  scrollLabel: string;
};

export function Hero({ title, scrollTarget, scrollLabel }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#e9e3bc] bg-[url('/assets/bg.webp')] bg-cover bg-top bg-no-repeat px-4 pt-32 md:flex-row md:items-stretch md:bg-contain md:bg-fixed md:bg-right-top md:px-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -left-[30vw] hidden w-[70vw] max-w-[900px] md:block">
          <Image
            src="/assets/holdcikk-01.webp"
            alt="HoldOn logó"
            width={900}
            height={900}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center gap-8 md:ml-auto md:max-w-2xl md:items-center md:justify-center">
        <div className="w-full max-w-xs md:hidden">
          <Image
            src="/assets/holdcikk-01.webp"
            alt="HoldOn logó"
            width={200}
            height={200}
            priority
            className="mx-auto"
          />
        </div>
        <h1
          className={`${cookie.className} text-center text-6xl text-black drop-shadow-md md:text-8xl lg:text-9xl`}
        >
          {title}
        </h1>
      </div>
      <a
        href={scrollTarget}
        data-umami-event="scroll-down-indicator"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black transition-colors hover:text-black/75"
      >
        <span className="sr-only">{scrollLabel}</span>
        <span className="relative block h-20 w-10 rounded-full border-2 border-current">
          <span className="scroll-indicator-dot absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}
