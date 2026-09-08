"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Product, VOLUMES, VolumeMl, PRICE_BY_VOLUME, volumeLabel, formatPrice, stockLabel } from "@/lib/products";
import { addToCart } from "@/lib/cart";
import { href, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({
  product: p,
  locale,
  dict,
}: {
  product: Product;
  locale: Locale;
  dict: Dictionary;
}) {
  const mainRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeDot, setActiveDot] = useState(0);
  const sectionCount = 6;

  const [ctaCur, setCtaCur] = useState(0);
  const [ctaArrowsVisible, setCtaArrowsVisible] = useState(false);
  const ctaPhotosRef = useRef<HTMLDivElement>(null);
  const [ctaArrowPos, setCtaArrowPos] = useState<{ left: number; right: number } | null>(null);

  const [volume, setVolume] = useState<VolumeMl>(50);
  const price = PRICE_BY_VOLUME[volume];

  const [toastVisible, setToastVisible] = useState(false);
  const [addedLabel, setAddedLabel] = useState(false);
  const toastTimer = useRef<number | undefined>(undefined);

  // section visibility → dot nav + fade-in animations
  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const secObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = sectionRefs.current.indexOf(entry.target as HTMLElement);
          if (idx !== -1) setActiveDot(idx);
        });
      },
      { root, threshold: 0.5 },
    );
    sectionRefs.current.forEach((s) => s && secObs.observe(s));

    const animEls = root.querySelectorAll(`.${styles.da}`);
    const animObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.in);
            animObs.unobserve(entry.target);
          }
        });
      },
      { root, threshold: 0.1 },
    );
    animEls.forEach((el) => animObs.observe(el));

    return () => {
      secObs.disconnect();
      animObs.disconnect();
    };
  }, []);

  // CTA photo slider arrow positioning
  useEffect(() => {
    const container = ctaPhotosRef.current;
    if (!container) return;
    const positionArrows = () => {
      const cw = container.offsetWidth;
      const ch = container.offsetHeight;
      const image = new window.Image();
      image.onload = () => {
        const ir = image.naturalWidth / image.naturalHeight;
        const cr = cw / ch;
        let imgL: number;
        let imgR: number;
        if (ir < cr) {
          const rw = ch * ir;
          imgL = (cw - rw) / 2;
          imgR = imgL + rw;
        } else {
          imgL = 0;
          imgR = cw;
        }
        setCtaArrowPos({ left: imgL, right: cw - imgR });
      };
      image.onerror = () => setCtaArrowPos({ left: 0, right: 0 });
      image.src = p.images.cta[ctaCur];
    };
    positionArrows();
    window.addEventListener("resize", positionArrows);
    return () => window.removeEventListener("resize", positionArrows);
  }, [ctaCur, p.images.cta]);

  const ctaGo = (n: number) => {
    setCtaCur((n + p.images.cta.length) % p.images.cta.length);
  };

  const handleAddToCart = () => {
    addToCart({
      id: `${p.slug}-${volume}`,
      name: `${p.namePlain}${p.nameItalic}`,
      price,
      volume: volumeLabel(volume, locale),
      image: p.images.collection[0],
    });
    setAddedLabel(true);
    window.setTimeout(() => setAddedLabel(false), 2500);

    window.clearTimeout(toastTimer.current);
    setToastVisible(true);
    toastTimer.current = window.setTimeout(() => setToastVisible(false), 3000);
  };

  const setSection = (i: number) => (el: HTMLElement | null) => {
    sectionRefs.current[i] = el;
  };

  const scrollToSection = (i: number) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Link
        href={href(locale, "/kollektsiya")}
        className={styles["d-back"]}
        aria-label={dict.nav.collection}
      >
        <span className={styles["d-back-arrow"]}>←</span>
        {locale === "en" ? "Back to Collection" : "Назад в коллекцию"}
      </Link>

      <div className={styles["d-nav-dots"]}>
        {Array.from({ length: sectionCount }).map((_, i) => (
          <div
            key={i}
            className={`${styles["d-dot"]} ${i === activeDot ? styles.on : ""}`}
            onClick={() => scrollToSection(i)}
          />
        ))}
      </div>

      <main className={styles["d-main"]} ref={mainRef}>
        <section ref={setSection(0)} className={`${styles.ds} ${styles["ds-hero"]}`}>
          <Image
            src={p.images.hero}
            alt=""
            fill
            sizes="100vw"
            priority
            quality={90}
            className={styles["ds-hero-img"]}
          />
          <div className={styles["ds-hero-ovl"]} />
          <div className={styles["ds-hero-body"]}>
            <span
              className={`${styles["d-eyebrow"]} ${styles.da} ${styles["da-up"]}`}
              style={{ transitionDelay: "0.05s" }}
            >
              {dict.collectionLabel} · {p.num}
            </span>
            <h1
              className={`${styles["d-big-title"]} ${styles.da} ${styles["da-up"]}`}
              style={{ transitionDelay: "0.18s" }}
            >
              {p.namePlain}<em>{p.nameItalic}</em>
            </h1>
            <p
              className={`${styles["d-tagline"]} ${styles.da} ${styles["da-up"]}`}
              style={{ transitionDelay: "0.3s" }}
            >
              {p.sub}
            </p>
          </div>
          <div className={styles["d-scroll-cue"]}>
            <div className={styles["d-scroll-ln"]} />
          </div>
        </section>

        <section ref={setSection(1)} className={`${styles.ds} ${styles["ds-notes"]}`}>
          <div className={styles["ds-notes-img"]}>
            <Image src={p.images.notesImg} alt="" fill sizes="36vw" className={styles["ds-notes-img-el"]} />
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              className={`${styles["d-sec-label"]} ${styles.da} ${styles["da-left"]}`}
              style={{ transitionDelay: "0.04s" }}
            >
              {dict.product.topLabel}
            </div>
            {p.notes.top.map((n, i) => (
              <div
                key={n}
                className={`${styles["d-note-row"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: `${0.15 + i * 0.13}s` }}
              >
                <span className={styles["d-note-tick"]} />
                <span className={styles["d-note-name"]}>{n}</span>
              </div>
            ))}
          </div>
        </section>

        <section ref={setSection(2)} className={`${styles.ds} ${styles["ds-heart"]}`}>
          <Image
            src={p.images.heart}
            alt=""
            fill
            sizes="100vw"
            quality={90}
            className={styles["ds-heart-img"]}
          />
          <div className={styles["ds-heart-ovl"]} />
          <div className={styles["ds-heart-body"]}>
            <div
              className={`${styles["d-sec-label"]} ${styles.da} ${styles["da-left"]}`}
              style={{ transitionDelay: "0.04s" }}
            >
              {dict.product.heartLabel}
            </div>
            {p.notes.heart.map((n, i) => (
              <div
                key={n}
                className={`${styles["d-note-row"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: `${0.15 + i * 0.13}s` }}
              >
                <span className={styles["d-note-tick"]} />
                <span className={styles["d-note-name"]}>{n}</span>
              </div>
            ))}
          </div>
        </section>

        <section ref={setSection(3)} className={`${styles.ds} ${styles["ds-base"]}`}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              className={`${styles["d-sec-label"]} ${styles.da} ${styles["da-left"]}`}
              style={{ transitionDelay: "0.04s" }}
            >
              {dict.product.baseLabel}
            </div>
            {p.notes.base.map((n, i) => (
              <div
                key={n}
                className={`${styles["d-note-row"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: `${0.15 + i * 0.13}s` }}
              >
                <span className={styles["d-note-tick"]} />
                <span className={styles["d-note-name"]}>{n}</span>
              </div>
            ))}
          </div>
        </section>

        <section ref={setSection(4)} className={`${styles.ds} ${styles["ds-story"]}`}>
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className={`${styles["d-story-pre"]} ${styles.da} ${styles["da-up"]}`}
              style={{ transitionDelay: "0.05s" }}
            >
              {dict.product.storyLabel}
            </div>
            <p
              className={`${styles["d-story-text"]} ${styles.da} ${styles["da-up"]}`}
              style={{ transitionDelay: "0.2s" }}
            >
              &quot;{p.story}&quot;
            </p>
            <div
              className={`${styles["d-story-sig"]} ${styles.da} ${styles["da-up"]}`}
              style={{ transitionDelay: "0.38s" }}
            >
              {dict.product.storySignature}
            </div>
          </div>
        </section>

        <section
          ref={setSection(5)}
          className={`${styles.ds} ${styles["ds-cta"]}`}
          style={{ background: p.sceneColor }}
        >
          <div
            className={styles["cta-photos"]}
            ref={ctaPhotosRef}
            onMouseEnter={() => setCtaArrowsVisible(true)}
            onMouseLeave={() => setCtaArrowsVisible(false)}
          >
            {p.images.cta.map((src, i) => (
              <div key={i} className={`${styles["cta-slide"]} ${i === ctaCur ? styles.on : ""}`}>
                <Image src={src} alt="" fill sizes="50vw" className={styles["cta-slide-img"]} />
              </div>
            ))}
            {ctaArrowPos && (
              <>
                <button
                  className={`${styles["cta-arr"]} ${styles["cta-arr-l"]} ${
                    ctaArrowsVisible ? styles["arr-show"] : ""
                  }`}
                  style={{ left: ctaArrowPos.left }}
                  onClick={() => ctaGo(ctaCur - 1)}
                  aria-label={dict.prevPhotoAria}
                >
                  ‹
                </button>
                <button
                  className={`${styles["cta-arr"]} ${styles["cta-arr-r"]} ${
                    ctaArrowsVisible ? styles["arr-show"] : ""
                  }`}
                  style={{ right: ctaArrowPos.right }}
                  onClick={() => ctaGo(ctaCur + 1)}
                  aria-label={dict.nextPhotoAria}
                >
                  ›
                </button>
              </>
            )}
          </div>

          <div className={styles["cta-panel"]}>
            <Image
              src={p.images.hero}
              alt=""
              fill
              sizes="55vw"
              quality={90}
              className={styles["cta-panel-img"]}
            />
            <div className={styles["cta-panel-ovl"]} />
            <div className={styles["cta-panel-body"]}>
              <div
                className={`${styles["cta-p-eyebrow"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: "0.08s" }}
              >
                {dict.collectionLabel}
              </div>
              <div
                className={`${styles["cta-p-num"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: "0.14s" }}
              >
                {p.num}
              </div>
              <div
                className={`${styles["cta-p-title"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: "0.22s" }}
              >
                {p.namePlain}<em>{p.nameItalic}</em>
              </div>
              <div
                className={`${styles["cta-p-sub"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: "0.28s" }}
              >
                {p.sub}
              </div>
              <div
                className={`${styles["cta-p-pyramid"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: "0.34s" }}
              >
                {dict.pyramidLabel}
              </div>
              <div
                className={`${styles["cta-p-notes"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: "0.4s" }}
              >
                <div className={styles["cta-p-note-line"]}>{p.notes.top.join(" · ")}</div>
                <div className={styles["cta-p-note-line"]}>{p.notes.heart.join(" · ")}</div>
                <div className={styles["cta-p-note-line"]}>{p.notes.base.join(" · ")}</div>
              </div>
              <div
                className={`${styles["cta-p-volumes"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: "0.42s" }}
              >
                {VOLUMES.map((ml) => (
                  <button
                    key={ml}
                    type="button"
                    className={`${styles["cta-p-vol"]} ${ml === volume ? styles.on : ""}`}
                    onClick={() => setVolume(ml)}
                  >
                    {volumeLabel(ml, locale)}
                  </button>
                ))}
              </div>
              <div
                className={`${styles["cta-p-price"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: "0.46s" }}
              >
                {formatPrice(price, locale)} <span>₽ / {volumeLabel(volume, locale)}</span>
              </div>
              <div
                className={`${styles["cta-p-stock"]} ${styles.da} ${styles["da-up"]}`}
                style={{ transitionDelay: "0.5s" }}
              >
                <span className={styles["cta-p-sdot"]} />
                {stockLabel(p.stock, locale)}
              </div>
              <div className={`${styles.da} ${styles["da-up"]}`} style={{ transitionDelay: "0.54s" }}>
                <Link className={styles["cta-p-btn"]} href={href(locale, `/zakaz?aroma=${p.id}`)}>
                  {dict.product.consultBtn}
                </Link>
                <button className={styles["cta-p-btn2"]} onClick={handleAddToCart}>
                  {addedLabel ? dict.product.addedLabel : dict.product.addToCartBtn}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className={`${styles["c-toast"]} ${toastVisible ? styles.show : ""}`}>
        <div className={styles["ct-ring"]}>✓</div>
        <div>
          <div className={styles["ct-top"]}>{dict.product.toastTitle}</div>
          <div className={styles["ct-bot"]}>
            {p.namePlain}{p.nameItalic} · {volumeLabel(volume, locale)}
          </div>
          <Link className={styles["ct-link"]} href={href(locale, "/zakaz")}>
            {dict.product.toastLink}
          </Link>
        </div>
      </div>

    </>
  );
}
