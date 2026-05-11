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

const trustedFirms = [
  { name: "The New York Times", src: "https://www.whitecollaradvice.com/wp-content/uploads/2024/07/The_New_York_Times_logo-1024x151.webp" },
  { name: "CNN", src: "https://www.whitecollaradvice.com/wp-content/uploads/2024/07/cnn-logo-topwca-1024x492.webp" },
  { name: "Business Insider", src: "https://www.whitecollaradvice.com/wp-content/uploads/2024/07/business-insider-logo-topwca-1024x492.webp" },
  { name: "Fortune", src: "https://www.whitecollaradvice.com/wp-content/uploads/2024/07/fortune-logo-topwca-1024x492.webp" },
  { name: "CNBC", src: "https://www.whitecollaradvice.com/wp-content/uploads/2024/07/cnbc-logo-topwca-1024x492.webp" },
];

const differentiators = [
  {
    icon: "⚖️",
    title: "Not Boilerplate. Not Outsourced.",
    description: "We only ask clients to do what our team has already done. Co-founder Michael Santos spent 26 years inside the federal prison system and built our methodology from the inside out. Every strategy is proven, not theoretical.",
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
    quote: "The government was asking for 57–71 months, and I was sentenced to 15. They are so much more than 'prison consultants' — more like disaster specialists, therapists, and friends.",
    author: "Kent Courtheyn",
    role: "",
    initials: "KC",
  },
  {
    badge: "17 months on a 51-month sentence",
    quote: "The plan I built with WCA helped me serve 17 months on a 51-month sentence. The judge called my efforts 'extraordinary' and took 11 months off, plus 12 months in the halfway house.",
    author: "Tracii Hutsona",
    role: "",
    initials: "TH",
  },
  {
    badge: "48–60 months → Probation + 21 days",
    quote: "I faced 48–60 months, but the judge said 'I'm going to do something unusual.' I got probation and 21 days in jail. That wasn't luck — I built my record.",
    author: "David Moulder",
    role: "",
    initials: "DM",
  },
  {
    badge: "37 months → 10.5 months served",
    quote: "If your lawyer won't hire them, fire your lawyer. Justin and the White Collar Advice team guided me through every step. I served 10.5 months on a 37-month sentence.",
    author: "Branden Coluccio",
    role: "",
    initials: "BC",
  },
];

const attorneyEndorsements = [
  {
    quote: "WCA has been an invaluable partner since 2009, guiding my clients through sentencing and prison with practical strategies and firsthand knowledge.",
    author: "Mark Werksman",
    role: "Criminal Defense Attorney · Former Deputy D.A. & Former AUSA",
    image: "https://www.whitecollaradvice.com/wp-content/uploads/2025/02/1516586731077-e1757118865766.webp",
  },
  {
    quote: "They are the only consultants I trust and recommend. They eliminate fear and uncertainty with expert guidance.",
    author: "Bernard Brody",
    role: "Federal Defense Attorney, Atlanta",
    image: "https://www.whitecollaradvice.com/wp-content/uploads/2025/02/BrodyBernardGA250x250.webp",
    badge: "Since 2009",
  },
  {
    quote: "I worked with WCA during the Varsity Blues case in 2019 — they achieved significant results.",
    author: "David Rosenfield",
    role: "Former Assistant U.S. Attorney, D.N.J.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop",
    badge: "Varsity Blues Case",
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
            Founded by Justin Paperny. Methodology by co-founder Michael Santos, who spent 26 years inside the federal system building this knowledge from the inside out.
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
              As seen in
            </span>
            {trustedFirms.map((f) => (
              <img
                key={f.name}
                src={f.src}
                alt={f.name}
                style={{
                  height: "24px",
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.45,
                }}
              />
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

      {/* ── ATTORNEY ENDORSEMENTS ────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
                marginBottom: "1rem",
              }}
            >
              Trusted by Defense Attorneys
            </span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.04em",
                color: "#030712",
              }}
            >
              The attorneys who refer us their clients.
            </motion.h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
            className="cards-grid"
          >
            {attorneyEndorsements.map((a, i) => (
              <motion.div
                key={a.author}
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
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {a.badge && (
                  <div style={{ marginBottom: "1rem" }}>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 700, color: "#385ff6", background: "rgba(56,95,246,0.1)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>
                      {a.badge}
                    </span>
                  </div>
                )}
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9375rem",
                    color: "#030712",
                    lineHeight: 1.65,
                    marginBottom: "1.25rem",
                    fontStyle: "italic",
                    flexGrow: 1,
                  }}
                >
                  &ldquo;{a.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginTop: "auto" }}>
                  <img
                    src={a.image}
                    alt={a.author}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #fff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                    }}
                  />
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "0.875rem", color: "#030712" }}>{a.author}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#64748b" }}>{a.role}</p>
                  </div>
                </div>
              </motion.div>
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

      {/* ── SECTION A — Long-Form Videos ──────────────────────────────────────── */}
      <section style={{ background: "var(--bg-primary, #ffffff)", padding: "5rem 0", borderTop: "1px solid var(--border, #e2e8f0)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
                marginBottom: "1rem",
              }}
            >
              Educational Authority
            </span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              style={{
                fontFamily: "var(--font-playfair, serif)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.04em",
                color: "#030712",
                marginBottom: "1rem",
              }}
            >
              Learn from the people who&apos;ve lived it.
            </motion.h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1.125rem", color: "#64748b", maxWidth: "600px", margin: "0 auto" }}>
              Every strategy we use with clients is documented publicly. Watch before you call.
            </p>
          </div>

          <div
            style={{
              background: "var(--bg-surface, #f8fafc)",
              border: "1px solid var(--border, #e2e8f0)",
              borderRadius: "16px",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr",
              marginBottom: "2rem",
            }}
            className="featured-video-grid"
          >
            <a
              href="https://www.youtube.com/watch?v=KgP_9aRrEZs"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: "relative",
                display: "block",
                background: "#000",
                aspectRatio: "16/9",
              }}
            >
              <img
                src="https://img.youtube.com/vi/KgP_9aRrEZs/maxresdefault.jpg"
                alt="Why White Collar Defendants Need More Than a Lawyer"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "56px",
                  height: "56px",
                  background: "var(--accent, #385ff6)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  transition: "transform 0.2s",
                }}
              >
                <div style={{ width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "14px solid white", marginLeft: "4px" }}></div>
              </div>
            </a>
            <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", fontWeight: 700, color: "#385ff6", background: "rgba(56,95,246,0.1)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>
                  CNN Interview
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "1.2rem", color: "#030712", marginBottom: "1rem", lineHeight: 1.4 }}>
                Why White Collar Defendants Need More Than a Lawyer
              </h3>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "var(--text-secondary, #64748b)", lineHeight: 1.6, marginBottom: "2rem" }}>
                Justin Paperny explains to CNN why the work done before sentencing — narrative, documentation, community service — determines outcomes more than courtroom arguments.
              </p>
              <a href="https://www.youtube.com/watch?v=KgP_9aRrEZs" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                Watch Now →
              </a>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              marginBottom: "3rem",
            }}
            className="cards-grid"
          >
            {[
              {
                id: "9uaSWQdCt4c",
                badge: "Fox News",
                title: "Federal Sentencing — What Defendants Get Wrong",
                link: "https://www.youtube.com/watch?v=9uaSWQdCt4c"
              },
              {
                id: "7wYxISAHpRI",
                badge: "Dr. Phil",
                title: "The Truth About Federal Prison Preparation",
                link: "https://www.youtube.com/watch?v=7wYxISAHpRI"
              }
            ].map((v, i) => (
              <a
                key={`${v.id}-${i}`}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--bg-surface, #f8fafc)",
                  border: "1px solid var(--border, #e2e8f0)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ position: "relative", background: "#000", aspectRatio: "16/9" }}>
                  <img 
                    src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`} 
                    alt={v.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "40px",
                      height: "40px",
                      background: "rgba(0,0,0,0.6)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid #fff",
                    }}
                  >
                    <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid white", marginLeft: "3px" }}></div>
                  </div>
                </div>
                <div style={{ padding: "1.25rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ marginBottom: "0.75rem" }}>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 700, color: "#385ff6", background: "rgba(56,95,246,0.1)", padding: "0.2rem 0.5rem", borderRadius: "4px" }}>
                      {v.badge}
                    </span>
                  </div>
                  <h4 style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "0.875rem", color: "#030712", lineHeight: 1.4, margin: 0 }}>
                    {v.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.youtube.com/@WhiteCollarAdviceOfficial" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              See All Videos
            </a>
            <a href="https://www.whitecollaradvice.com/complimentary-consultation-call" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join the Tuesday Webinar →
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION B — Shorts ──────────────────────────────────────── */}
      <section style={{ background: "var(--bg-surface, #f8fafc)", padding: "5rem 0", borderTop: "1px solid var(--border, #e2e8f0)", borderBottom: "1px solid var(--border, #e2e8f0)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
                marginBottom: "1rem",
              }}
            >
              Quick Answers
            </span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              style={{
                fontFamily: "var(--font-playfair, serif)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.04em",
                color: "#030712",
                marginBottom: "1rem",
              }}
            >
              60 seconds. Real answers.
            </motion.h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: "#64748b", maxWidth: "500px", margin: "0 auto" }}>
              Filmed between client calls. No scripts. The exact questions defendants and families ask us every day.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: "1rem",
              paddingBottom: "1.5rem",
              marginBottom: "2rem",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="hide-scrollbar"
          >
            {[
              { id: "_3SdyzByZmI", title: "Should you hire a prison consultant?" },
              { id: "cbCqjWF3gjY", title: "What judges actually read at sentencing" },
              { id: "Ibin5tbeer8", title: "The #1 mistake defendants make" },
              { id: "TBXHFAILGXg", title: "When to start your mitigation strategy" },
              { id: "55lN1Jp3AnU", title: "Preparing for the PSR interview" },
              { id: "4ig-SijyfDM", title: "Common federal sentencing myths" },
              { id: "FRWLv8BurSA", title: "How to write a character letter" },
              { id: "KgP_9aRrEZs", title: "What happens if you do nothing" },
              { id: "9uaSWQdCt4c", title: "Understanding federal guidelines" },
              { id: "7wYxISAHpRI", title: "Life inside a federal prison camp" }
            ].map((short, i) => (
              <a
                key={i}
                href={`https://www.youtube.com/shorts/${short.id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "160px",
                  aspectRatio: "9/16",
                  background: "#000",
                  border: "1px solid var(--border, #e2e8f0)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                  position: "relative",
                  display: "flex",
                  textDecoration: "none",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                className="short-card"
              >
                <img 
                  src={`https://img.youtube.com/vi/${short.id}/maxresdefault.jpg`} 
                  alt={short.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                />
                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40px", height: "40px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(4px)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.3)" }}>
                  <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid white", marginLeft: "2px" }}></div>
                </div>
                
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.95))", padding: "2rem 0.75rem 0.75rem" }}>
                  <h4 style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "0.75rem", color: "#fff", lineHeight: 1.4, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {short.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <a 
              href="https://www.youtube.com/@WhiteCollarAdviceOfficial/shorts" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="YouTube Shorts"
              style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #e2e8f0", background: "transparent", color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
              className="social-pill-icon"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/></svg>
            </a>
            <a 
              href="https://www.tiktok.com/@whitecollaradvice" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="TikTok"
              style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #e2e8f0", background: "transparent", color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
              className="social-pill-icon"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.25v7.39c.02 1.94-.39 3.91-1.58 5.46-1.57 2.11-4.03 3.39-6.66 3.39-2.07 0-4.11-.8-5.63-2.22-1.51-1.47-2.43-3.51-2.43-5.69 0-2.13.88-4.16 2.36-5.64 1.51-1.55 3.65-2.49 5.86-2.49h.2v4.06c-1.12.02-2.21.36-3.11 1.05-.88.66-1.43 1.68-1.54 2.77-.01.12-.02.24-.02.37 0 .8.27 1.58.78 2.19.53.65 1.3 1.12 2.11 1.25.13.02.26.03.39.03.8 0 1.57-.27 2.19-.78.65-.53 1.12-1.3 1.25-2.11.02-.13.03-.26.03-.39V0h1.42z"/></svg>
            </a>
            <a 
              href="https://www.instagram.com/whitecollaradvice" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Instagram"
              style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1px solid #e2e8f0", background: "transparent", color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
              className="social-pill-icon"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.059-1.646.071-4.85.071s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.071-1.646-.071-4.85s.013-3.584.071-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.26-2.911.557-.79.306-1.459.717-2.126 1.384-.667.667-1.078 1.335-1.384 2.126-.297.763-.5 1.634-.557 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.148.557 2.911.306.79.717 1.459 1.384 2.126.667.667 1.335 1.078 2.126 1.384.763.297 1.634.5 2.911.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.26 2.911-.557.79-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.335 1.384-2.126.297-.763.5-1.634.557-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.148-.557-2.911-.306-.79-.717-1.459-1.384-2.126-.667-.667-1.335-1.078-2.126-1.384-.763-.297-1.634-.5-2.911-.557-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>

          <div style={{ textAlign: "center" }}>
            <a href="https://www.youtube.com/@WhiteCollarAdviceOfficial" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Follow for Daily Strategy
            </a>
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
          .featured-video-grid { grid-template-columns: 1fr !important; }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .short-card:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.3); }
        .social-pill-icon:hover { border-color: #385ff6 !important; color: #385ff6 !important; transform: translateY(-2px); }
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </main>
  );
}
