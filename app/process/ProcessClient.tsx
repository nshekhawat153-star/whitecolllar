"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, viewportConfig } from "@/components/animations";

const phases = [
  {
    number: "01",
    tag: "Investigation & Charges",
    title: "Stop waiting. Start building.",
    description:
      "The moment a government investigation begins, time works against you. We help you document your narrative, begin community service, and create character evidence — before the Presentence Investigation Report (PSR) is written.",
    tags: ["Narrative Development", "Community Service Docs", "Pre-PSR Strategy"],
  },
  {
    number: "02",
    tag: "Pre-Sentencing Preparation",
    title: "Build a record judges rely on.",
    description:
      "We work with defendants and attorneys to craft a mitigation package that presents the full human picture: personal history, remorse, community ties, and concrete steps toward rehabilitation.",
    tags: ["Mitigation Package", "Character Letters", "Remorse Documentation"],
  },
  {
    number: "03",
    tag: "Sentencing Hearing",
    title: "Show up prepared. Not surprised.",
    description:
      "Our attorneys-only network reviews your completed mitigation strategy before sentencing. We help you understand what the judge is looking for and how to present your strongest possible case.",
    tags: ["Sentencing Strategy", "Attorney Coordination", "Judge Analysis"],
  },
  {
    number: "04",
    tag: "Post-Sentencing & BOP",
    title: "Your sentence is not the end.",
    description:
      "First Step Act credits, RDAP programs, facility placement — the Bureau of Prisons system has more flexibility than most defendants know. We navigate it so you serve the fewest days possible.",
    tags: ["BOP Navigation", "RDAP Eligibility", "First Step Act Credits"],
  },
];

const comparison = [
  { feature: "Legal motions & courtroom argument", attorney: "✓", consultant: "✗", wca: "✓ We connect you to the right attorney" },
  { feature: "Starts before PSR is written", attorney: "✗", consultant: "✗", wca: "✓" },
  { feature: "Personal narrative development", attorney: "✗", consultant: "Boilerplate", wca: "✓ Custom" },
  { feature: "Community service documentation", attorney: "✗", consultant: "✗", wca: "✓" },
  { feature: "Character letter strategy", attorney: "✗", consultant: "Generic", wca: "✓ Tailored" },
  { feature: "Lived inside the federal system", attorney: "✗", consultant: "Varies", wca: "✓ 26 yrs" },
  { feature: "BOP policy navigation", attorney: "✗", consultant: "✓", wca: "✓" },
  { feature: "Post-sentencing support", attorney: "✗", consultant: "Limited", wca: "✓ All phases" },
];

export default function ProcessClient() {
  return (
    <main style={{ background: "#fff", paddingTop: "60px" }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ paddingTop: "4.5rem", paddingBottom: "3.5rem", background: "#fff" }}>
        <div className="container">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(56,95,246,0.08)",
              color: "#385ff6",
              border: "1px solid rgba(56,95,246,0.2)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.3rem 0.9rem",
              borderRadius: "999px",
              fontFamily: "var(--font-inter)",
              marginBottom: "1.5rem",
            }}
          >
            The System
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#030712",
              marginBottom: "1.25rem",
              maxWidth: "700px",
            }}
          >
            Four phases.<br />
            <span style={{ color: "#385ff6" }}>One documented outcome.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "1.0625rem",
              color: "#64748b",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Most people start too late. The government is already building their story.
            We help you build yours — from investigation through supervised release.
          </motion.p>
        </div>
      </section>

      {/* ── PHASE LIST ───────────────────────────────────────── */}
      <section style={{ padding: "0 0 5rem 0" }}>
        <div className="container">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              custom={i * 0.3}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "2.5rem",
                padding: "3rem 0",
                borderBottom: i < phases.length - 1 ? "1px solid #e2e8f0" : "none",
              }}
              className="phase-row"
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 900,
                  fontSize: "3.5rem",
                  color: "#e2e8f0",
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  paddingTop: "0.25rem",
                }}
              >
                {phase.number}
              </div>

              {/* Content */}
              <div>
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
                    padding: "0.25rem 0.65rem",
                    borderRadius: "999px",
                    fontFamily: "var(--font-inter)",
                    marginBottom: "0.85rem",
                  }}
                >
                  {phase.tag}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 800,
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    letterSpacing: "-0.02em",
                    color: "#030712",
                    marginBottom: "0.75rem",
                  }}
                >
                  {phase.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9375rem",
                    color: "#64748b",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                    maxWidth: "600px",
                  }}
                >
                  {phase.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {phase.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#64748b",
                        background: "#f1f5f9",
                        border: "1px solid #e2e8f0",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "6px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MICHAEL SANTOS CALLOUT ───────────────────────────── */}
      <section style={{ background: "var(--bg-surface, #f8fafc)", padding: "5rem 0", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="split-grid">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
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
                Why Trust Us
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair, serif)",
                  fontWeight: 900,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  letterSpacing: "-0.03em",
                  color: "#030712",
                  marginBottom: "1rem",
                  lineHeight: 1.1,
                }}
              >
                26 years inside. Built from the inside out.
              </h2>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "#64748b", lineHeight: 1.7 }}>
                Michael Santos entered federal prison in 1987 and served 26 years. During that time, he documented exactly what worked — and what didn't — when it came to influencing case managers, wardens, judges on appeal, and the parole commission. White Collar Advice is that system. We don't theorize about what judges respond to. We know.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} custom={1}>
              <div
                style={{
                  background: "var(--accent-glow, rgba(56,95,246,0.05))",
                  border: "1px solid var(--accent-border, rgba(56,95,246,0.2))",
                  borderRadius: "16px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "1.125rem", color: "#385ff6", width: "100px" }}>1987 – 2013</span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "#64748b" }}>· Inside the Federal System</span>
                </div>
                <div style={{ width: "100%", height: "1px", background: "rgba(56,95,246,0.1)" }}></div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "1.125rem", color: "#385ff6", width: "100px" }}>26 years</span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "#64748b" }}>· Building this methodology</span>
                </div>
                <div style={{ width: "100%", height: "1px", background: "rgba(56,95,246,0.1)" }}></div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "1.125rem", color: "#385ff6", width: "100px" }}>400+ cases</span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "#64748b" }}>· Guided since release</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────── */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "-0.03em",
              color: "#385ff6",
              marginBottom: "0.5rem",
            }}
          >
            How We Compare
          </motion.h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "#64748b", marginBottom: "2rem" }}>
            See why our approach produces different results than conventional consultants.
          </p>

          {/* Table */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 120px 120px 140px",
                padding: "1rem 1.5rem",
                background: "#f8fafc",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "0.8125rem", color: "#64748b" }}>
                Feature
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "0.8125rem", color: "#64748b", textAlign: "center" }}>
                Defense Attorney
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "0.8125rem", color: "#64748b", textAlign: "center" }}>
                Prison Consultant
              </span>
              <span style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "0.8125rem", color: "var(--accent, #385ff6)", textAlign: "center" }}>
                White Collar Advice
              </span>
            </div>

            {comparison.map((row, i) => (
              <motion.div
                key={row.feature}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                custom={i * 0.05}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 120px 120px 140px",
                  padding: "1rem 1.5rem",
                  borderBottom: i < comparison.length - 1 ? "1px solid #e2e8f0" : "none",
                  background: i % 2 === 0 ? "#fff" : "#fafafa",
                }}
              >
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.9rem", color: "#030712" }}>
                  {row.feature}
                </span>
                <span style={{ textAlign: "center", fontSize: "0.875rem", color: row.attorney.includes("✓") ? "#030712" : "var(--text-muted, #94a3b8)" }}>{row.attorney}</span>
                <span style={{ textAlign: "center", fontSize: "0.875rem", color: row.consultant.includes("✓") ? "#030712" : (row.consultant.includes("✗") ? "var(--text-muted, #94a3b8)" : "#64748b") }}>{row.consultant}</span>
                <span style={{ textAlign: "center", fontSize: "0.875rem", fontWeight: row.wca.includes("✓") ? 600 : 400, color: row.wca.includes("✓") ? "var(--accent, #385ff6)" : "var(--text-muted, #94a3b8)" }}>{row.wca}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
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
            Ready to start building<br />your record?
          </motion.h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "rgba(255,255,255,0.75)", marginBottom: "2rem" }}>
            Every day without a documented mitigation strategy is a day the government is building theirs.
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
                transition: "background 0.18s",
              }}
            >
              Schedule a Confidential Call
            </Link>
            <Link href="/contact" className="btn-ghost-white">
              Join Free Webinar
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .phase-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .split-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </main>
  );
}
