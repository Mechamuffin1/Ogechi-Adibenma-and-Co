"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __legacyLibs?: Record<string, Promise<void>>;
    gsap?: { globalTimeline: { clear: () => void } };
  }
}

function loadOnce(src: string): Promise<void> {
  const cache = (window.__legacyLibs = window.__legacyLibs || {});
  if (!cache[src]) {
    cache[src] = new Promise<void>((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error("failed to load " + src));
      document.body.appendChild(s);
    });
  }
  return cache[src];
}

function runScript(src: string): Promise<void> {
  return new Promise<void>((resolve) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => {
      s.remove();
      resolve();
    };
    s.onerror = () => resolve();
    document.body.appendChild(s);
  });
}

/* Loads the static site's ambience scripts (GSAP blobs, Three.js globe) in
   guaranteed order. `libs` are libraries loaded once per session; `inits` are
   the page effects (IIFEs keyed off the DOM), re-executed on every mount so
   they also work after client-side navigation. */
export default function LegacyFx({ libs = [], inits = [] }: { libs?: string[]; inits?: string[] }) {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        for (const lib of libs) await loadOnce(lib);
        if (cancelled) return;
        // Stop tweens from a previous page before the effects re-register.
        window.gsap?.globalTimeline.clear();
        for (const init of inits) {
          if (cancelled) return;
          await runScript(init);
        }
      } catch {
        /* Ambience only, the page works without it. */
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
