"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid transparent",
          transition: "border-color 0.2s, background 0.2s",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            height: "60px",
            gap: "2rem",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ flexShrink: 0 }}>
            <img 
              src="https://www.whitecollaradvice.com/wp-content/uploads/2024/07/White-Collar-Advice-3.png" 
              alt="White Collar Advice" 
              style={{ height: "40px", width: "auto", display: "block" }}
            />
          </Link>

          {/* Desktop nav links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              flex: 1,
            }}
            className="nav-desktop"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: pathname === link.href ? "#030712" : "#64748b",
                  padding: "0.4rem 0.75rem",
                  borderRadius: "8px",
                  transition: "color 0.15s, background 0.15s",
                  background: pathname === link.href ? "#f1f5f9" : "transparent",
                }}
                className="nav-link-item"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side — CTA */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginLeft: "auto" }}
            className="nav-desktop"
          >
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "0.8125rem",
                color: "#64748b",
                padding: "0.4rem 0.75rem",
                borderRadius: "8px",
                transition: "color 0.15s",
              }}
            >
              Log in
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "0.8125rem",
                color: "#fff",
                background: "#385ff6",
                padding: "0.45rem 1rem",
                borderRadius: "10px",
                transition: "background 0.15s",
              }}
              className="nav-cta"
            >
              Get Started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
              marginLeft: "auto",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 22,
                  height: 2,
                  background: "#030712",
                  borderRadius: 2,
                  transition: "all 0.2s",
                  transform:
                    open && i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : open && i === 2
                      ? "translateY(-7px) rotate(-45deg)"
                      : open && i === 1
                      ? "scaleX(0)"
                      : "none",
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            background: "#fff",
            borderBottom: "1px solid #e2e8f0",
            zIndex: 99,
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                fontSize: "1rem",
                color: pathname === link.href ? "#385ff6" : "#030712",
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                background: pathname === link.href ? "rgba(56,95,246,0.06)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
            <Link href="/contact" className="btn-ghost" style={{ flex: 1, justifyContent: "center" }}>
              Log in
            </Link>
            <Link href="/contact" className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>
              Get Started
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        .nav-link-item:hover {
          color: #030712 !important;
          background: #f1f5f9 !important;
        }
        .nav-cta:hover {
          background: #2d4fd4 !important;
        }
      `}</style>
    </>
  );
}
