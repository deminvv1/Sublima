import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { notFound } from "next/navigation";
import { LOCALES, isLocale } from "@/lib/i18n/config";
import CookieConsent from "@/components/CookieConsent";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-sans",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "SUBLIMA — Коллекция",
  description: "Sublima — эксклюзивная парфюмерия. Коллекция 2024.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${jost.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        {children}
        <CookieConsent locale={locale} />
      </body>
    </html>
  );
}
