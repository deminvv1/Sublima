"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Preloader.module.css";

const SESSION_KEY = "sublima_preloader_shown";
const HERO_VIDEO_SRC = "/videos/main-video.MP4";
const PRELOADER_VIDEO_SRC = "/videos/preloader-loop.mp4";
const SAFETY_TIMEOUT_MS = 7000;

/** Smoothly animates the displayed number toward whatever target it's given,
 * instead of jumping — so discrete readiness milestones still feel fluid. */
function useAnimatedPercent(target: number): number {
  const [display, setDisplay] = useState(0);
  const fromRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const from = fromRef.current;
    if (target === from) return;
    const duration = 500;
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (target - from) * eased));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        fromRef.current = target;
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target]);

  return display;
}

export default function Preloader() {
  const [target, setTarget] = useState(0);
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");
  const percent = useAnimatedPercent(target);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (sessionStorage.getItem(SESSION_KEY)) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      setTarget(100);
      window.setTimeout(() => setPhase("leaving"), 350);
    };

    setTarget(15);

    document.fonts?.ready
      .then(() => setTarget((p) => Math.max(p, 40)))
      .catch(() => {});

    // A probe element buffers just enough of the hero video to know it can
    // play — far less than downloading the full (~50MB) file.
    const probe = document.createElement("video");
    probe.muted = true;
    probe.preload = "auto";
    probe.src = HERO_VIDEO_SRC;
    const onVideoReady = () => setTarget((p) => Math.max(p, 75));
    probe.addEventListener("loadeddata", onVideoReady, { once: true });
    probe.addEventListener("error", onVideoReady, { once: true });

    const onWindowLoad = () => finish();
    if (document.readyState === "complete") {
      onWindowLoad();
    } else {
      window.addEventListener("load", onWindowLoad, { once: true });
    }

    // Never block longer than this, even on a stalled connection.
    const safety = window.setTimeout(finish, SAFETY_TIMEOUT_MS);

    return () => {
      window.removeEventListener("load", onWindowLoad);
      probe.removeEventListener("loadeddata", onVideoReady);
      probe.removeEventListener("error", onVideoReady);
      probe.src = "";
      clearTimeout(safety);
    };
  }, []);

  useEffect(() => {
    if (phase !== "leaving") return;
    const t = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, 900);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={`${styles.pre} ${phase === "leaving" ? styles.leaving : ""}`} aria-hidden="true">
      <div className={styles.inner}>
        <span className={styles.word}>SUBLIMA</span>
        <div className={styles.bottleBox}>
          <video
            className={styles.bottleVideo}
            src={PRELOADER_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <span className={styles.count}>
          {percent}
          <em>%</em>
        </span>
        <span className={styles.barTrack}>
          <span className={styles.barFill} style={{ width: `${percent}%` }} />
        </span>
      </div>
    </div>
  );
}
