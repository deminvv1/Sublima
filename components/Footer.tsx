import Link from "next/link";
import { href, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Footer.module.css";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className={styles.footer}>
      <Link className={styles.logo} href={href(locale, "/")}>
        Sublima
      </Link>
      <nav className={styles.links}>
        <Link href={href(locale, "/kollektsiya")}>{dict.nav.collection}</Link>
        <Link href={href(locale, "/zakaz")}>{dict.nav.order}</Link>
        <Link href={href(locale, "/filosofiya")}>{dict.nav.philosophy}</Link>
        <Link href={href(locale, "/kontakty")}>{dict.nav.contacts}</Link>
        <Link href={href(locale, "/politika-konfidentsialnosti")}>{dict.footer.privacyLink}</Link>
      </nav>
      <div className={styles.meta}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} {dict.footer.copyright}
        </span>
      </div>
    </footer>
  );
}
