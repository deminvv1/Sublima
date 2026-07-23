"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { cartQty, CART_EVENT } from "@/lib/cart";
import { getProducts } from "@/lib/products";
import { LOCALES, href, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./Header.module.css";

export type Crumb = { label: string; href?: string };

function stripLocale(pathname: string, locale: Locale): string {
  const prefix = `/${locale}`;
  if (pathname === prefix) return "/";
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname;
}

export default function Header({
  locale,
  dict,
  active,
  transparent = false,
  crumbs = [],
}: {
  locale: Locale;
  dict: Dictionary;
  active?: "collection" | "zakaz" | "filosofiya" | "kontakty";
  transparent?: boolean;
  crumbs?: Crumb[];
}) {
  const [qty, setQty] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();
  const products = getProducts(locale);
  const restPath = stripLocale(pathname, locale);

  useEffect(() => {
    const update = () => setQty(cartQty());
    update();
    window.addEventListener(CART_EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(CART_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setIsAtTop(window.scrollY < 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const showTransparent = transparent && isAtTop;

  const setLocaleCookie = (next: Locale) => {
    document.cookie = `locale=${next}; path=/; max-age=31536000`;
  };

  return (
    <header className={`${styles.header} ${showTransparent ? styles.transparent : ""}`}>
      <div className={styles.brandRow}>
        <Link className={styles.logo} href={href(locale, "/")}>
          Sublima
        </Link>
        {crumbs.length > 0 && (
          <nav className={styles.crumbs} aria-label="breadcrumb">
            {crumbs.map((c, i) => (
              <Fragment key={i}>
                <span className={styles.crumbSep}>/</span>
                {c.href ? (
                  <Link href={c.href} className={styles.crumbLink}>
                    {c.label}
                  </Link>
                ) : (
                  <span className={styles.crumbCurrent}>{c.label}</span>
                )}
              </Fragment>
            ))}
          </nav>
        )}
      </div>
      <nav className={styles.nav}>
        <Link
          href={href(locale, "/filosofiya")}
          className={`${styles.navExtra} ${active === "filosofiya" ? styles.on : ""}`}
        >
          {dict.nav.philosophy}
        </Link>
        <div className={styles.dropdownWrap}>
          <Link
            href={href(locale, "/kollektsiya")}
            className={active === "collection" ? styles.on : undefined}
          >
            {dict.nav.collection}
          </Link>
          <div className={styles.dropdown}>
            {products.map((p) => (
              <Link
                key={p.id}
                href={href(locale, `/kollektsiya?scene=${p.slug}`)}
                className={styles.dropdownItem}
              >
                <span className={styles.dropdownNum}>{p.num}</span>
                <span className={styles.dropdownName}>
                  {p.namePlain} <em>{p.nameItalic}</em>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <Link href={href(locale, "/zakaz")} className={active === "zakaz" ? styles.on : undefined}>
          {dict.nav.order}
          <span className={`${styles.cartBadge} ${qty > 0 ? styles.show : ""}`}>{qty}</span>
        </Link>
        <Link
          href={href(locale, "/kontakty")}
          className={`${styles.navExtra} ${active === "kontakty" ? styles.on : ""}`}
        >
          {dict.nav.contacts}
        </Link>
        <div className={styles.langSwitch}>
          {LOCALES.map((l) => (
            <Link
              key={l}
              href={href(l, restPath)}
              onClick={() => setLocaleCookie(l)}
              className={`${styles.langBtn} ${l === locale ? styles.langActive : ""}`}
            >
              {l.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
