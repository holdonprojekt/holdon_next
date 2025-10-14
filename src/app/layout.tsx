import type { Metadata } from "next";
import "./globals.css";
import { ContextMenuBlocker } from "./components/ContextMenuBlocker";
import { arbutus, cookie, sourceSans } from "./fonts";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL("https://holdonprojekt.hu"),
  title: "HoldOn projekt",
  description: "HoldOn projekt a menstruációs szegénységben élőkért.",
  keywords: [
    "HoldOn",
    "HoldOn projekt",
    "menstruációs szegénység",
    "adományozás",
  ],
  authors: [{ name: "Tamas Csertan" }],
  robots: "index, follow",
  openGraph: {
    title: "HoldOn projekt",
    description: "HoldOn projekt a menstruációs szegénységben élőkért.",
    siteName: "HoldOn projekt",
    url: "https://holdonprojekt.hu",
    type: "website",
  },
  icons: {
    icon: "favicon.ico",
  },
  other: {
    "revised": "14/10/2025",
  },
};

type RootLayoutParams = {
  locale?: string;
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<RootLayoutParams>;
}>;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const fallbackLocale = defaultLocale;
  const resolvedParams = await params;
  const localeParam = resolvedParams?.locale;
  const locale = (locales.includes(localeParam as Locale)
    ? localeParam
    : fallbackLocale) as Locale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${arbutus.variable} ${sourceSans.variable} ${cookie.variable} antialiased`}>
        <ContextMenuBlocker>{children}</ContextMenuBlocker>
      </body>
    </html>
  );
}
