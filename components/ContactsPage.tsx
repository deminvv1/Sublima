import type { Dictionary } from "@/lib/i18n/types";
import styles from "./ContactsPage.module.css";

// NOTE: row values are placeholders — replace with the real
// Instagram/Telegram links, concierge phone number and atelier address
// (see lib/i18n/dictionaries).
export default function ContactsPage({ dict }: { dict: Dictionary }) {
  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <div className={styles.eyebrow}>{dict.kontakty.eyebrow}</div>
        <h1 className={styles.title}>{dict.kontakty.title}</h1>
      </div>

      <div className={styles.list}>
        {dict.kontakty.rows.map((row) => (
          <a key={row.label} className={styles.row} href="#">
            <span className={styles.rowLabel}>{row.label}</span>
            <span className={styles.rowValue}>{row.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
