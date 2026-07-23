import type { Locale } from "@/lib/i18n/config";
import { getPrivacyContent, type PrivacyBlock } from "@/lib/legal/privacy";
import styles from "./PrivacyPage.module.css";

function Block({ block, index }: { block: PrivacyBlock; index: number }) {
  if (block.type === "p") {
    return <p className={styles.p}>{block.text}</p>;
  }
  if (block.type === "dash") {
    return (
      <ul className={styles.dashList}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <dl className={styles.defList}>
      {block.items.map((item) => (
        <div key={item.term} className={styles.defRow}>
          <dt>{item.term}</dt>
          <dd>{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function PrivacyPage({ locale }: { locale: Locale }) {
  const content = getPrivacyContent(locale);

  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <div className={styles.eyebrow}>{content.eyebrow}</div>
        <h1 className={styles.title}>{content.title}</h1>
      </div>

      <div className={styles.body}>
        {content.sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} index={i} />
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
