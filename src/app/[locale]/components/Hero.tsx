import Image from "next/image";

type HeroProps = {
  title: string;
  scrollTarget: string;
  scrollLabel: string;
};

export function Hero({ title, scrollTarget, scrollLabel }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-raffia bg-[url('/legacy/assets/bg.webp')] bg-contain bg-right bg-no-repeat bg-fixed px-4 pt-24 md:flex-row md:justify-between md:px-12"
    >
      <div className="relative -left-12 -top-12 hidden max-w-xl md:block">
        <Image
          src="/legacy/assets/holdcikk-01.webp"
          alt="HoldOn logó"
          width={640}
          height={640}
          priority
          className="h-auto w-full max-w-[32rem] drop-shadow-xl"
        />
      </div>
      <div className="flex flex-col items-center gap-8 md:items-start md:gap-10">
        <Image
          src="/legacy/assets/holdcikk-01.webp"
          alt="HoldOn logó"
          width={480}
          height={480}
          priority
          className="h-auto w-64 drop-shadow-xl md:hidden"
        />
        <div className="text-center md:text-left">
          <h1 className="font-accent text-5xl text-black text-shadow md:text-7xl">
            {title}
          </h1>
        </div>
      </div>
      <a
        href={scrollTarget}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-gray-700 transition hover:text-black"
      >
        <span className="sr-only">{scrollLabel}</span>
        <span className="relative block h-20 w-10 rounded-full border-2 border-current">
          <span className="absolute left-1/2 top-4 h-2 w-2 -translate-x-1/2 rounded-full bg-current animate-scrollBounce" />
        </span>
      </a>
    </section>
  );
}
