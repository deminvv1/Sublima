"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { Product, formatPrice } from "@/lib/products";
import { href, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import styles from "./CollectionScene.module.css";

const DUR_MS = 920;

function stateClass(delta: number): string {
  if (delta === 0) return "sActive";
  if (delta === 1) return "sB1";
  if (delta === 2) return "sB2";
  if (delta >= 3) return "sB3";
  if (delta === -1) return "sA1";
  if (delta === -2) return "sA2";
  if (delta <= -3) return "sA3";
  return "sFar";
}

export default function CollectionScene({
  products,
  locale,
  dict,
}: {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
}) {
  const N = products.length;
  const searchParams = useSearchParams();
  const [cur, setCur] = useState(() => {
    const slug = searchParams.get("scene");
    const idx = products.findIndex((p) => p.slug === slug);
    return idx >= 0 ? idx : 0;
  });
  const [curSlides, setCurSlides] = useState<number[]>(() => new Array(N).fill(0));
  const [arrowsVisible, setArrowsVisible] = useState(false);
  const [arrowPos, setArrowPos] = useState<{ left: number; right: number; top: number } | null>(
    null,
  );

  const busyRef = useRef(false);
  const photosRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  // only hijack scroll/keys and show the fixed overlays once this section
  // has scrolled into its pinned (sticky) position
  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      threshold: 0.6,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback(
    (i: number) => {
      if (i === cur || busyRef.current || i < 0 || i >= N) return;
      busyRef.current = true;
      setCurSlides((prev) => {
        const next = [...prev];
        next[i] = 0;
        return next;
      });
      setCur(i);
      window.setTimeout(() => {
        busyRef.current = false;
      }, DUR_MS);
    },
    [cur, N],
  );

  // jump directly to a scene when the ?scene= param changes (e.g. from the
  // header's collection dropdown), even if this component is already mounted
  useEffect(() => {
    const slug = searchParams.get("scene");
    if (!slug) return;
    const idx = products.findIndex((p) => p.slug === slug);
    if (idx >= 0) goTo(idx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("scene")]);

  const changeSlide = useCallback((dir: 1 | -1) => {
    setCurSlides((prev) => {
      const next = [...prev];
      next[cur] = (next[cur] + dir + 3) % 3;
      return next;
    });
  }, [cur]);

  // wheel / keyboard / touch navigation
  useEffect(() => {
    let lastWheel = 0;
    const onWheel = (e: WheelEvent) => {
      if (!active) return;
      const t = Date.now();
      if (t - lastWheel < 750) return;
      lastWheel = t;
      if (e.deltaY > 0) goTo((cur + 1) % N);
      else goTo((cur - 1 + N) % N);
    };
    const onKey = (e: KeyboardEvent) => {
      if (!active) return;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goTo((cur + 1) % N);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goTo((cur - 1 + N) % N);
    };
    let touchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (!active) return;
      const d = touchY - e.changedTouches[0].clientY;
      if (Math.abs(d) > 45) {
        if (d > 0) goTo((cur + 1) % N);
        else goTo((cur - 1 + N) % N);
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [cur, N, goTo, active]);

  // position the photo-slide arrows around the letterboxed (contain) image,
  // in coordinates local to the .photos container (not the viewport) so the
  // arrows can live inside it as real children instead of overlapping siblings
  const positionArrows = useCallback(() => {
    const container = photosRef.current;
    if (!container) return;
    const cw = container.clientWidth;
    const ch = container.clientHeight;
    const activeUrl = products[cur].images.collection[curSlides[cur]];
    const image = new window.Image();
    image.onload = () => {
      const ir = image.naturalWidth / image.naturalHeight;
      const containerRatio = cw / ch;
      let imgL: number;
      let imgR: number;
      if (ir < containerRatio) {
        const rw = ch * ir;
        imgL = (cw - rw) / 2;
        imgR = imgL + rw;
      } else {
        imgL = 0;
        imgR = cw;
      }
      setArrowPos({ left: imgL, right: cw - imgR, top: ch / 2 });
    };
    image.onerror = () => {
      setArrowPos({ left: 0, right: 0, top: ch / 2 });
    };
    image.src = activeUrl;
  }, [cur, curSlides, products]);

  useEffect(() => {
    positionArrows();
    window.addEventListener("resize", positionArrows);
    return () => window.removeEventListener("resize", positionArrows);
  }, [positionArrows]);

  return (
    <div className={styles.page} id="collection" ref={pageRef}>
      <div
        className={styles.scene}
        style={{ background: products[cur].sceneColor }}
      >
        <div
          className={styles.photos}
          ref={photosRef}
          onMouseEnter={() => setArrowsVisible(true)}
          onMouseLeave={() => setArrowsVisible(false)}
        >
          {products.map((p, i) => (
            <div key={p.id} className={`${styles.ph} ${i === cur ? styles.on : ""}`}>
              {p.images.collection.map((src, si) => (
                <div key={si} className={`${styles.slide} ${si === curSlides[i] ? styles.on : ""}`}>
                  <Image src={src} alt="" fill sizes="50vw" className={styles.slideImg} />
                </div>
              ))}
            </div>
          ))}

          {arrowPos && active && (
            <>
              <button
                className={`${styles.phArr} ${arrowsVisible ? styles.arrShow : ""}`}
                style={{ left: arrowPos.left + 20, top: arrowPos.top }}
                onClick={() => changeSlide(-1)}
                aria-label={dict.prevPhotoAria}
              >
                &#8249;
              </button>
              <button
                className={`${styles.phArr} ${arrowsVisible ? styles.arrShow : ""}`}
                style={{ right: arrowPos.right + 20, top: arrowPos.top }}
                onClick={() => changeSlide(1)}
                aria-label={dict.nextPhotoAria}
              >
                &#8250;
              </button>
            </>
          )}
        </div>

        <div className={styles.panels}>
          {products.map((p, i) => {
            const delta = i - cur;
            const stateKey = stateClass(delta);
            return (
              <div
                key={p.id}
                className={`${styles.panel} ${styles[stateKey]}`}
                onClick={() => {
                  if (i !== cur) goTo(i);
                }}
              >
                <Image src={p.images.hero} alt="" fill sizes="55vw" className={styles.panelImg} />
                <span className={styles.tlabel}>
                  {p.namePlain} {p.nameItalic}
                </span>
                <div className={styles.pcont}>
                  <div className={styles.lbl}>{dict.collectionLabel}</div>
                  <div className={styles.num}>{p.num}</div>
                  <div className={styles.name}>
                    {p.namePlain} <em>{p.nameItalic}</em>
                  </div>
                  <div className={styles.sub}>{p.sub}</div>
                  <div className={styles.nlbl}>{dict.pyramidLabel}</div>
                  <div className={styles.notesText}>
                    {p.notes.top.join(". ")}.<br />
                    {p.notes.heart.join(". ")}.<br />
                    {p.notes.base.join(". ")}
                  </div>
                  <div className={styles.price}>
                    {formatPrice(p.price, locale)} <span>₽ / {p.volume}</span>
                  </div>
                  <Link
                    className={styles.btn}
                    href={href(locale, `/product/${p.slug}`)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {dict.exploreBtn}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <nav
        className={styles.snav}
        style={{ opacity: active ? 1 : 0, pointerEvents: active ? "auto" : "none" }}
      >
        {products.map((p, i) => (
          <Fragment key={p.id}>
            {i > 0 && <div className={styles.snl} />}
            <div
              className={`${styles.sni} ${i === cur ? styles.on : ""}`}
              onClick={() => goTo(i)}
              aria-label={`${p.namePlain} ${p.nameItalic}`}
              title={`${p.namePlain} ${p.nameItalic}`}
            >
              <div className={styles.snd} />
            </div>
          </Fragment>
        ))}
      </nav>

      <div className={styles.shint} style={{ opacity: active && cur === 0 ? 1 : 0 }}>
        <div className={styles.shline} />
      </div>
    </div>
  );
}
