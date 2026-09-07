import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import CollectionScene from "@/components/CollectionScene";
import Footer from "@/components/Footer";
import { getProducts } from "@/lib/products";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) && locale === "en"
    ? { title: "SUBLIMA — Collection", description: "Sublima fragrance collection — 7 signature compositions." }
    : { title: "SUBLIMA — Коллекция", description: "Коллекция ароматов Sublima — 7 авторских композиций." };
}

export default async function KollektsiyaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const products = getProducts(locale);

  return (
    <>
      <Header
        locale={locale}
        dict={dict}
        active="collection"
        crumbs={[{ label: dict.nav.collection }]}
        transparent
      />
      <div style={{ position: "relative", height: "100vh" }}>
        <Suspense fallback={null}>
          <CollectionScene products={products} locale={locale} dict={dict} />
        </Suspense>
      </div>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
