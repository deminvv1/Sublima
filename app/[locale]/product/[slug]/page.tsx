import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";
import { getProduct, getAllSlugs, PRICE_BY_VOLUME, volumeLabel } from "@/lib/products";
import { href, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};
  const locale: Locale = rawLocale;
  const product = getProduct(locale, slug);
  if (!product) return {};

  const title = `SUBLIMA — ${product.namePlain} ${product.nameItalic} — ${product.sub}`;
  const description =
    locale === "en"
      ? `${product.namePlain} ${product.nameItalic} — ${product.sub}. ${[
          ...product.notes.top,
          ...product.notes.heart,
          ...product.notes.base,
        ].join(", ")}. ${PRICE_BY_VOLUME[50].toLocaleString("en-US")} ₽ — ${volumeLabel(50, locale)}. Sublima 2024 Collection.`
      : `${product.namePlain} ${product.nameItalic} — ${product.sub}. ${[
          ...product.notes.top,
          ...product.notes.heart,
          ...product.notes.base,
        ].join(", ")}. ${PRICE_BY_VOLUME[50].toLocaleString("ru-RU")} ₽ — ${volumeLabel(50, locale)}. Коллекция Sublima 2024.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [product.images.hero],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const product = getProduct(locale, slug);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.namePlain} ${product.nameItalic}`,
    description: `${product.sub}. ${[...product.notes.top, ...product.notes.heart, ...product.notes.base].join(", ")}.`,
    image: product.images.hero,
    brand: { "@type": "Brand", name: "Sublima" },
    offers: {
      "@type": "Offer",
      price: String(PRICE_BY_VOLUME[50]),
      priceCurrency: "RUB",
      availability:
        product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header
        locale={locale}
        dict={dict}
        active="collection"
        crumbs={[
          { label: dict.nav.collection, href: href(locale, "/kollektsiya") },
          { label: `${product.namePlain}${product.nameItalic}` },
        ]}
      />
      <ProductDetail product={product} locale={locale} dict={dict} />
    </>
  );
}
