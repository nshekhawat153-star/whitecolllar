import Link from "next/link";

const platformLinks = [
  { href: "/", label: "Home" },
  { href: "/process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

const companyLinks = [
  { href: "/contact", label: "Blog" },
  { href: "/", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#fff",
        borderTop: "1px solid #e2e8f0",
      }}
    >
      <div className="container" style={{ paddingTop: "3.5rem", paddingBottom: "2.5rem" }}>
        {/* 4-col grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Col 1 — Brand */}
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <img 
                src="https://www.whitecollaradvice.com/wp-content/uploads/2024/07/White-Collar-Advice-3.png" 
                alt="White Collar Advice" 
                style={{ height: "36px", width: "auto" }}
              />
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.8125rem",
                color: "#64748b",
                lineHeight: 1.7,
                maxWidth: "240px",
              }}
            >
              Federal sentencing mitigation for white collar defendants. Confidential, experience-based, and built from the inside out.
            </p>
          </div>

          {/* Col 2 — Platform */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#030712",
                marginBottom: "1rem",
              }}
            >
              Platform
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {platformLinks.map((link) => (
                <Link key={link.label} href={link.href} className="footer-nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Company */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#030712",
                marginBottom: "1rem",
              }}
            >
              Company
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {companyLinks.map((link) => (
                <Link key={link.label} href={link.href} className="footer-nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4 — CTA */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#030712",
                marginBottom: "1rem",
              }}
            >
              Get Help Now
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <Link href="/contact" className="btn-primary" style={{ justifyContent: "center", fontSize: "0.875rem", padding: "0.7rem 1.25rem", borderRadius: "10px" }}>
                Schedule a Call
              </Link>
              <Link href="/contact" className="btn-ghost" style={{ justifyContent: "center", fontSize: "0.875rem", padding: "0.7rem 1.25rem", borderRadius: "10px" }}>
                Join Free Webinar
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#94a3b8" }}>
            © 2026 White Collar Advice. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#94a3b8" }}>
            Built with Next.js
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
