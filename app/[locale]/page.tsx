import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const philosophyImage = "/images/Sweetheart/sweetheart3.webp";

  return (
    <>
      <Preloader />
      <Header locale={locale} dict={dict} transparent />
      <Hero locale={locale} dict={dict} posterImage="/images/prescreen-video.webp" />
      <Philosophy dict={dict} image={philosophyImage} />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
