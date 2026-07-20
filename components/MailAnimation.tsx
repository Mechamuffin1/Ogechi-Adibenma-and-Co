"use client";

import { useEffect, useState } from "react";

/* Decorative envelope that opens once on arrival at the contact page.
   No hover behaviour: the .is-open class drives the CSS transitions. */
export default function MailAnimation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOpen(true);
      return;
    }
    const t = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={"contact-mail" + (open ? " is-open" : "")} aria-hidden="true">
      <div className="animated-mail">
        <div className="mail-back-fold"></div>
        <div className="mail-letter">
          <div className="mail-letter-border"></div>
          <div className="mail-letter-name">
            <span className="mail-brand">Ogechi Adibenma &amp; Co</span>
            <span className="mail-brand-sub">Legal Chambers</span>
          </div>
          <div className="mail-letter-stamp"></div>
        </div>
        <div className="mail-top-fold"></div>
        <div className="mail-body"></div>
        <div className="mail-left-fold"></div>
      </div>
      <div className="mail-shadow"></div>
    </div>
  );
}
