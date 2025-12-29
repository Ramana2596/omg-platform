"use client";
import Link from "next/link";
import { useState } from "react";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // add scroll listener to toggle compact scrolled state
  if (typeof window !== 'undefined') {
    // debounce small scroll handler
    let raf = 0 as any;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 8));
    };
    // attach once
    if (!((window as any).__topnav_listening)) {
      window.addEventListener('scroll', onScroll, { passive: true });
      (window as any).__topnav_listening = true;
    }
  }

  return (
    <header className={"topnav" + (scrolled ? " scrolled" : "") + " reveal"}>
      <div className="container nav-inner">
        <div className="brand">
          <Link href="/" className="logo">OMG</Link>
        </div>

        <nav className={"nav-links" + (open ? " open" : "")}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
