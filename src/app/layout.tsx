/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ContextMenuBlocker } from "./components/ContextMenuBlocker";

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
    icon: "/legacy/assets/holdcikk-01.ico",
  },
  other: {
    "Cache-Control": "no-cache",
    "revised": "22/01/2025",
    "author": "Tamas Csertan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://unpkg.com/sanitize.css" />
        <link rel="stylesheet" href="https://unpkg.com/sanitize.css/typography.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&family=Source+Sans+Pro:wght@300;400&family=Cookie&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0"
        />
        <link rel="stylesheet" href="/legacy/style/main.css" />
      </head>
      <body suppressHydrationWarning>
        <ContextMenuBlocker>{children}</ContextMenuBlocker>
        <Script
          src="https://unpkg.com/i18next/i18next.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/i18next-xhr-backend/i18nextXHRBackend.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/i18next-browser-languagedetector/i18nextBrowserLanguageDetector.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/legacy/scripts/i18_intern.js"
          strategy="afterInteractive"
        />
        <Script src="/legacy/scripts/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
