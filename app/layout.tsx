import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { OrderSheetProvider } from "@/components/site/OrderOnlineSheet";
import { JsonLd } from "@/components/site/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Modern Indian in Brooklyn`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Modern Indian in Brooklyn`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Modern Indian in Brooklyn`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#F6F4EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[color:var(--color-surface)] text-[color:var(--color-ink)]">
        <JsonLd />
        <OrderSheetProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </OrderSheetProvider>
      </body>
    </html>
  );
}
