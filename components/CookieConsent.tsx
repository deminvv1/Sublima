"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { href, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "sublima_cookie_consent";

export default function CookieConsent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setLeaving(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div className={`${styles.bar} ${leaving ? styles.leaving : ""}`} role="dialog" aria-label="Cookies">
      <p className={styles.text}>
        {dict.cookieConsent.text}{" "}
        <Link className={styles.link} href={href(locale, "/politika-konfidentsialnosti")}>
          {dict.cookieConsent.policyLink}
        </Link>
      </p>
      <button className={styles.accept} onClick={accept} type="button">
        {dict.cookieConsent.accept}
      </button>
    </div>
  );
}
