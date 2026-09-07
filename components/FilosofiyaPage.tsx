import type { Dictionary } from "@/lib/i18n/types";
import styles from "./FilosofiyaPage.module.css";

// NOTE: copy is a draft placeholder — swap for the brand-approved text
// (see lib/i18n/dictionaries), and drop the real video file at
// public/videos/philosophy.mp4 (poster image is shown until then / if
// the file is missing).
export default function FilosofiyaPage({
  dict,
  posterImage,
}: {
  dict: Dictionary;
  posterImage: string;
}) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <video className={styles.video} poster={posterImage} autoPlay muted loop playsInline>
          <source src="/videos/philosophy.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOvl} />
        <div className={styles.heroBody}>
          <div className={styles.eyebrow}>{dict.filosofiya.eyebrow}</div>
          <h1 className={styles.title}>
            {dict.filosofiya.titleLine1}
            <br />
            <em>{dict.filosofiya.titleItalic}</em>
          </h1>
        </div>
      </section>

      <section className={styles.concept}>
        <div className={styles.conceptInner}>
          <p className={styles.statement}>{dict.filosofiya.statement}</p>
          <div className={styles.line} />
          <p className={styles.detail}>{dict.filosofiya.detail1}</p>
        </div>
      </section>

      <section className={styles.values}>
        {dict.filosofiya.values.map((value, i) => (
          <div key={value.title} className={styles.valueItem}>
            <div className={styles.valueNum}>{String(i + 1).padStart(2, "0")}</div>
            <div className={styles.valueTitle}>{value.title}</div>
            <div className={styles.valueText}>{value.text}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
