import type { Metadata } from "next";
import "./globals.css";
import { ContextMenuBlocker } from "./components/ContextMenuBlocker";
import { Arbutus_Slab, Cookie, Source_Sans_3 } from "next/font/google";

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

const arbutus = Arbutus_Slab({ subsets: ["latin"], weight: "400", variable: "--font-serif" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-sans" });
const cookie = Cookie({ subsets: ["latin"], weight: "400", variable: "--font-cookie" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body className={`${arbutus.variable} ${sourceSans.variable} ${cookie.variable} antialiased`}>
        <ContextMenuBlocker>{children}</ContextMenuBlocker>
      </body>
    </html>
  );
}
