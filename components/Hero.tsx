import Link from "next/link";
import { href, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Hero.module.css";

export default function Hero({
  locale,
  dict,
  posterImage,
}: {
  locale: Locale;
  dict: Dictionary;
  posterImage: string;
}) {
  return (
    <section className={styles.hero}>
      <video className={styles.video} poster={posterImage} autoPlay muted loop playsInline>
        <source src="/videos/main-video.MP4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>{dict.hero.eyebrow}</div>
        <h1 className={styles.title}>
          {dict.hero.titleLine1}
          <br />
          <em>{dict.hero.titleItalic}</em>
        </h1>
        <p className={styles.subtitle}>{dict.hero.subtitle}</p>
        <div className={styles.ctaRow}>
          <Link className={styles.ctaPrimary} href={href(locale, "/kollektsiya")}>
            {dict.hero.ctaPrimary}
          </Link>
          <Link className={styles.ctaSecondary} href={href(locale, "/zakaz")}>
            {dict.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      <Link className={styles.scrollCue} href={href(locale, "/kollektsiya")}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>{dict.hero.scrollLabel}</span>
      </Link>
    </section>
  );
}
