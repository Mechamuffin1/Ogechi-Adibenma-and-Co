"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/* Scroll-reveal behaviour carried over from the static site's js/main.js:
   - [data-stagger] parents set incremental transition delays on .reveal children
   - .reveal elements get .is-visible when they enter the viewport
   Re-runs on every route change so newly rendered pages animate too. */
export default function SiteFx() {
  const pathname = usePathname();

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((parent) => {
      const step = parseFloat(parent.getAttribute("data-stagger") || "") || 0.14;
      parent.querySelectorAll<HTMLElement>(".reveal").forEach((el, i) => {
        el.style.transitionDelay = (i * step).toFixed(2) + "s";
      });
    });

    const revealEls = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window) || !revealEls.length) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
