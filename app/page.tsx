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

type Stat = { end: number; suffix: string; label: string; prefix?: string; decimal?: boolean };

const stats: Stat[] = [
  { end: 400, suffix: "+", label: "Federal Cases Guided" },
  { end: 26, suffix: " yrs", label: "Inside the Federal System — Our Foundation" },
  { prefix: "57→", end: 15, suffix: "", label: "Months Reduced — Documented Client Outcome" },
  { end: 85, suffix: "%+", label: "Federal Conviction Rate in Cases We Handle" },
];

function StatItem({ end, suffix, label, decimal, prefix = "" }: { end: number; suffix: string; label: string; decimal?: boolean; prefix?: string }) {
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
        {prefix}{display}{suffix}
      </p>
      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
        {label}
      </p>
    </div>
  );
}

const trustedFirms = ["Bloomberg Law", "American Bar Association", "Business Insider", "Prison Professors", "Insider"];

const differentiators = [
  {
    icon: "⚖️",
    title: "Not Boilerplate. Not Outsourced.",
    description: "We only ask clients to do what our team has already done. Michael Santos spent 26 years inside the federal prison system and built this method from the inside out. Every strategy is proven, not theoretical.",
    tags: [],
  },
  {
    icon: "🏛️",
    title: "We Build the Documented Record",
    description: "Your lawyer handles the law. We handle the work most people delay until panic sets in — creating the narrative, character letters, and evidence that influence judges and probation officers before sentencing.",
    tags: [],
  },
  {
    icon: "✍️",
    title: "Attorney-Endorsed, Not Attorney-Replaced",
    description: "Hundreds of defense attorneys refer clients to us. We work alongside your legal team — adding the documented preparation that courtrooms respond to, without replacing a single legal argument.",
    tags: [],
  },
  {
    icon: "📊",
    title: "Every Phase. One Team.",
    description: "From the moment of investigation through supervised release, we stay with you. The record you build inside federal prison is reviewed by case managers, wardens, and the parole commission. We help you build it.",
    tags: [],
  },
];

const testimonials = [
  {
    badge: "57 months → 15 months",
    quote: "The government was asking for 57–71 months and I was sentenced to 15. They are so much more than 'prison consultants' — more like disaster specialists, therapists, and friends. I am forever grateful.",
    author: "— Federal Defendant",
    role: "",
    initials: "FD",
  },
  {
    badge: "51–63 months → 33 months",
    quote: "Dr. Nate Schott faced a government recommendation of 51–63 months. After building a complete mitigation package with White Collar Advice, he received 33 months and was home in 10.",
    author: "— Dr. Nate Schott, Client",
    role: "",
    initials: "NS",
  },
  {
    badge: "EU Extradition Blocked",
    quote: "White Collar Advice helped me fight extradition from the EU to the U.S. Carole's detailed medical affidavit played a key role. Their professionalism and timely delivery make them my top recommendation.",
    author: "— International Client",
    role: "",
    initials: "IC",
  },
  {
    badge: "10 Years → 2 Years",
    quote: "When Mario Hernandez reached out facing ten years, the strategy they helped build cut his sentence dramatically — as featured in Insider.",
    author: "— Mario Hernandez, via Insider",
    role: "",
    initials: "MH",
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
              Federal Sentencing Experts · Est. 2008
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
            We are not prison consultants. We help white collar federal defendants create documented
            evidence — narrative, character letters, community service — that influences
            judges, probation officers, and the Bureau of Prisons.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2.5}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.9rem",
              color: "#94a3b8",
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
            }}
          >
            Built by Michael Santos — who spent 26 years inside the federal prison system designing this from the inside out.
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
              As seen & cited in
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
                Our Differentiators
              </span>
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
                A System Built by Someone Who Lived It.
              </motion.h2>
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
            Client Outcomes
          </span>
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
              marginBottom: "3rem",
            }}
          >
            Real sentences. Documented reductions.
          </motion.h2>

          {/* Testimonials */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
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
                <div style={{ marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 700, color: "#385ff6", background: "rgba(56,95,246,0.1)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>
                    {t.badge}
                  </span>
                </div>
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
              <StatItem key={s.label} end={s.end} suffix={s.suffix} label={s.label} decimal={s.decimal} prefix={s.prefix} />
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
                Prison consultants tell you what to expect. We help you build what actually matters — a documented record of who you are, what you&apos;ve done, and why the judge should consider a different path. We specialize in white collar cases — executives, professionals, and business owners who have careers, families, and reputations worth fighting for.
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
            Every day without a documented mitigation strategy is a day the government is building theirs.
          </motion.h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "rgba(255,255,255,0.75)", marginBottom: "2rem" }}>
            The earlier you start, the more we can build. Schedule a confidential call — no obligation, response within 24 hours.
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
              Join Free Webinar
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
