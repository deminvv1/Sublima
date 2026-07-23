import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilosofiyaPage from "@/components/FilosofiyaPage";
import { getProducts } from "@/lib/products";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en"
    ? {
        title: "SUBLIMA — Philosophy",
        description: "Sublima house philosophy: the brand's concept and approach to fragrance.",
      }
    : {
        title: "SUBLIMA — Философия",
        description: "Философия дома Sublima: концепция бренда и подход к созданию ароматов.",
      };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
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
        active="filosofiya"
        crumbs={[{ label: dict.nav.philosophy }]}
      />
      <FilosofiyaPage dict={dict} posterImage={products[0].images.hero} />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
