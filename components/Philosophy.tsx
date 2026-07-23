import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Philosophy.module.css";

export default function Philosophy({ dict, image }: { dict: Dictionary; image: string }) {
  return (
    <section className={styles.section}>
      <div className={styles.visual}>
        <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 46vw" className={styles.visualImg} />
      </div>
      <div className={styles.text}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>{dict.homePhilosophy.eyebrow}</div>
          <p className={styles.statement}>{dict.homePhilosophy.statement}</p>
          <div className={styles.line} />
          <p className={styles.detail}>{dict.homePhilosophy.detail}</p>
        </div>
      </div>
    </section>
  );
}
