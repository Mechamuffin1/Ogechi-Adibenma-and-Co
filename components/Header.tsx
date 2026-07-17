"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/insights", label: "Insights" },
  { href: "/people", label: "People" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when navigating to a new page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">OA</span>
          <span className="brand-text">
            <span className="brand-name">Ogechi Adibenma &amp; Co</span>
            <span className="brand-sub">Legal Chambers</span>
          </span>
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.5" /></svg>
        </button>
        <nav className={"site-nav" + (open ? " is-open" : "")} aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
