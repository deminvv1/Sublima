import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactsPage from "@/components/ContactsPage";
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
        title: "SUBLIMA — Contacts",
        description: "Sublima contacts: Instagram, Telegram, concierge service, showroom.",
      }
    : {
        title: "SUBLIMA — Контакты",
        description: "Контакты дома Sublima: Instagram, Telegram, консьерж-служба, шоурум.",
      };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Header
        locale={locale}
        dict={dict}
        active="kontakty"
        crumbs={[{ label: dict.nav.contacts }]}
      />
      <ContactsPage dict={dict} />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
