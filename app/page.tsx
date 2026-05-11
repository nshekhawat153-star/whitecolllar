"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, viewportConfig } from "@/components/animations";

/* ── Count-up hook ─────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.floor(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
}

const stats = [
  { end: 10, suffix: "M+", label: "Documents Scanned" },
  { end: 1.2, suffix: "M+", label: "Hours Automated", decimal: true },
  { end: 250, suffix: "+", label: "Active Firms" },
  { end: 99.99, suffix: "%", label: "Uptime SLA", decimal: true },
];

function StatItem({ end, suffix, label, decimal }: { end: number; suffix: string; label: string; decimal?: boolean }) {
  const target = decimal ? Math.round(end * 10) : end;
  const { val, ref } = useCountUp(target);
  const display = decimal ? (val / 10).toFixed(decimal ? 1 : 0) : val;
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: "#fff",
          marginBottom: "0.4rem",
        }}
      >
        {display}{suffix}
      </p>
      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
        {label}
      </p>
    </div>
  );
}

const trustedFirms = ["White Collar Advice", "Prison Professors", "Sentencing Hub", "Justice Solutions"];

const differentiators = [
  {
    icon: "⚖️",
    title: "Investigation Timeline",
    description: "Organize government discovery and personal records into a cohesive timeline to identify weaknesses in the government case.",
    tags: ["Discovery Mapping", "Evidence Chronology"],
  },
  {
    icon: "🏛️",
    title: "BOP Policy Navigator",
    description: "Real-time guidance on Bureau of Prisons policies, including First Step Act credits, RDAP eligibility, and facility placement.",
    tags: ["First Step Act Calculator", "Facility Placement"],
  },
  {
    icon: "✍️",
    title: "Mitigation Narrative Bot",
    description: "AI-assisted drafting for personal narratives, helping clients articulate their background and remorse effectively for the PSR.",
    tags: ["Remorse Articulation", "Character Reference"],
  },
  {
    icon: "📊",
    title: "Sentencing Matrix Pro",
    description: "Advanced calculator for Federal Sentencing Guidelines, helping defendants understand their base offense level and potential departures.",
    tags: ["Offense Level Calculation", "Criminal History Scoring"],
  },
];

const testimonials = [
  {
    quote: "The mitigation narrative bot helped me find my voice when I was too paralyzed by fear to write my own story for the judge.",
    author: "David L.",
    role: "Client · Federal Defendant",
    initials: "DL",
  },
  {
    quote: "Preparation is the antidote to fear. These tools help our clients build the documented record they need to return home sooner.",
    author: "Michael Santos",
    role: "Partner · Prison Professors",
    initials: "MS",
  },
  {
    quote: "Our platform gives defendants the same level of preparation usually reserved for high-stakes corporate litigation. It changes the outcome.",
    author: "Justin Paperny",
    role: "Founder · White Collar Advice",
    initials: "JP",
  },
];

export default function Home() {
  return (
    <main style={{ background: "#fff", paddingTop: "60px" }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          {/* Version badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "rgba(56, 95, 246, 0.08)",
                color: "#385ff6",
                border: "1px solid rgba(56, 95, 246, 0.2)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.3rem 0.9rem",
                borderRadius: "999px",
                fontFamily: "var(--font-inter)",
                marginBottom: "2rem",
              }}
            >
              <span style={{ width: 6, height: 6, background: "#385ff6", borderRadius: "50%", display: "inline-block" }} />
              Federal Sentencing Experts · Est. 2013
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 900,
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "#030712",
              marginBottom: "1.75rem",
            }}
          >
            Build a Record That<br />
            <span style={{ color: "#385ff6" }}>Changes What Judges</span><br />
            Do Next.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#64748b",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
            }}
          >
            We are not prison consultants. We help federal defendants create documented
            evidence — narrative, character letters, community service — that influences
            judges, probation officers, and the Bureau of Prisons.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3.5rem" }}
          >
            <Link href="/contact" className="btn-primary btn-lg">
              Schedule a Confidential Call
            </Link>
            <Link href="/process" className="btn-ghost btn-lg">
              How It Works →
            </Link>
          </motion.div>

          {/* Trusted by */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{ display: "flex", alignItems: "center", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#94a3b8",
              }}
            >
              Trusted by attorneys at
            </span>
            {trustedFirms.map((f) => (
              <span
                key={f}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#64748b",
                }}
              >
                {f}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CAPABILITIES SECTION ──────────────────────────────────── */}
      <section style={{ background: "#f8fafc", padding: "5rem 0", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.03em",
                  color: "#385ff6",
                  marginBottom: "0.5rem",
                }}
              >
                Strategic Mitigation
              </motion.h2>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "#64748b", maxWidth: "420px" }}>
                Our platform combines proprietary sentencing data with human-centered mitigation strategy to change the trajectory of federal cases.
              </p>
            </div>
            <Link
              href="/process"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#385ff6",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                flexShrink: 0,
              }}
            >
              View all capabilities →
            </Link>
          </div>

          {/* 2×2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
            }}
            className="cards-grid"
          >
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={i}
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "2rem",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                whileHover={{ borderColor: "#385ff6", boxShadow: "0 4px 24px rgba(56,95,246,0.1)" }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(56,95,246,0.08)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    marginBottom: "1rem",
                  }}
                >
                  {d.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#030712",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {d.title}
                </h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#64748b", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  {d.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        color: "#385ff6",
                        background: "rgba(56,95,246,0.07)",
                        border: "1px solid rgba(56,95,246,0.15)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "6px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTS YOU CAN TRUST ─────────────────────────────────── */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              letterSpacing: "-0.02em",
              color: "#385ff6",
              marginBottom: "0.5rem",
            }}
          >
            Experts You Can Trust
          </motion.h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "#64748b", maxWidth: "400px", margin: "0 auto 3rem" }}>
            Lead by Justin Paperny and the White Collar Advice team, we provide the tools needed for a successful outcome in the federal system.
          </p>

          {/* Testimonials */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="testimonials-grid"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={i}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9375rem",
                    color: "#030712",
                    lineHeight: 1.65,
                    marginBottom: "1.25rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "#385ff6",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "0.875rem", color: "#030712" }}>{t.author}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#64748b" }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────────────────── */}
      <section style={{ background: "#385ff6", padding: "4rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
            }}
            className="stats-grid"
          >
            {stats.map((s) => (
              <StatItem key={s.label} end={s.end} suffix={s.suffix} label={s.label} decimal={s.decimal} />
            ))}
          </div>
        </div>
      </section>

      {/* ── NOT A PRISON CONSULTANT ──────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="split-grid"
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(56,95,246,0.08)",
                  color: "#385ff6",
                  border: "1px solid rgba(56,95,246,0.2)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "999px",
                  fontFamily: "var(--font-inter)",
                  marginBottom: "1.25rem",
                }}
              >
                The Difference
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.03em",
                  color: "#030712",
                  marginBottom: "1rem",
                  lineHeight: 1.1,
                }}
              >
                We are not prison<br />consultants.
              </h2>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "#64748b", lineHeight: 1.7, marginBottom: "2rem" }}>
                Prison consultants tell you what to expect. We help you build what actually matters — a documented record of who you are, what you&apos;ve done, and why the judge should consider a different path.
              </p>
              <Link href="/process" className="btn-primary">
                See Our Process →
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={1}
            >
              {[
                { label: "Prison Consultants", items: ["Tell you what to expect", "Reactive to the PSR", "No documented evidence"] },
                { label: "White Collar Advice", items: ["Build your record before sentencing", "Proactive mitigation strategy", "Documented evidence that judges rely on"], accent: true },
              ].map((col) => (
                <div
                  key={col.label}
                  style={{
                    background: col.accent ? "#fff" : "#f1f5f9",
                    border: col.accent ? "2px solid #385ff6" : "1px solid #e2e8f0",
                    borderRadius: "16px",
                    padding: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      color: col.accent ? "#385ff6" : "#64748b",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {col.label}
                  </p>
                  {col.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                      <span style={{ color: col.accent ? "#385ff6" : "#94a3b8", fontSize: "0.875rem" }}>
                        {col.accent ? "✓" : "✕"}
                      </span>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#030712" }}>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section style={{ background: "#385ff6", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 900,
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              letterSpacing: "-0.04em",
              color: "#fff",
              marginBottom: "0.75rem",
              lineHeight: 1.1,
            }}
          >
            Ready to lead the<br />future of your defense?
          </motion.h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "rgba(255,255,255,0.75)", marginBottom: "2rem" }}>
            Join the nation&apos;s most innovative defense teams already using White Collar Advice to gain a massive advantage.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "#385ff6",
                background: "#fff",
                padding: "1rem 2.5rem",
                borderRadius: "16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "background 0.18s",
              }}
            >
              Get Started Now
            </Link>
            <Link href="/contact" className="btn-ghost-white">
              Contact Strategy
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .cards-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .split-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
