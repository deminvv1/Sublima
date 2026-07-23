import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPage from "@/components/PrivacyPage";
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
        title: "SUBLIMA — Privacy Policy",
        description: "Sublima personal data processing policy.",
      }
    : {
        title: "SUBLIMA — Политика конфиденциальности",
        description: "Политика обработки персональных данных дома Sublima.",
      };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Header locale={locale} dict={dict} crumbs={[{ label: dict.footer.privacyLink }]} />
      <PrivacyPage locale={locale} />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
