import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import OrderForm from "@/components/OrderForm";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: locale === "en" ? "SUBLIMA — Order" : "SUBLIMA — Заказ" };
}

export default async function ZakazPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Header
        locale={locale}
        dict={dict}
        active="zakaz"
        crumbs={[{ label: dict.nav.order }]}
      />
      <Suspense fallback={null}>
        <OrderForm locale={locale} dict={dict} />
      </Suspense>
    </>
  );
}
