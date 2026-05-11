"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { fadeUp, viewportConfig } from "@/components/animations";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  who: string;
  stage: string;
  message: string;
};

const trustItems = [
  {
    icon: "🔒",
    title: "Strictly Confidential",
    description: "Nothing shared without your explicit consent.",
  },
  {
    icon: "⚡",
    title: "Response Within 24 Hours",
    description: "Federal timelines don't wait. Neither do we.",
  },
  {
    icon: "📋",
    title: "No-Obligation Assessment",
    description: "We'll tell you honestly whether and how we can help.",
  },
  {
    icon: "📅",
    title: "Free Weekly Webinar",
    description: "Open Q&A with defendants, families, and attorneys every week.",
  },
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
  };

  return (
    <main style={{ background: "#fff", paddingTop: "60px" }}>
      <section style={{ padding: "4.5rem 0 5rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "5rem",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* ── LEFT COL ──────────────────────────────────── */}
            <div>
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                style={{
                  display: "inline-block",
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
                  marginBottom: "1.25rem",
                }}
              >
                Start the Conversation
              </motion.span>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  color: "#030712",
                  marginBottom: "1.25rem",
                }}
              >
                A confidential call<br />
                <span style={{ color: "#385ff6" }}>changes everything.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.9375rem",
                  color: "#64748b",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                We speak with defendants, families, and defense attorneys.
                All consultations are strictly confidential. There is no obligation — only clarity about your options and how much time you have left to act.
              </motion.p>

              {/* Trust items */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                {trustItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={i + 3}
                    style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        background: "rgba(56,95,246,0.08)",
                        border: "1px solid rgba(56,95,246,0.15)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "0.875rem", color: "#030712", marginBottom: "0.15rem" }}>
                        {item.title}
                      </p>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "#64748b" }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Webinar strip */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={7}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    background: "#385ff6",
                    color: "#fff",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "6px",
                    flexShrink: 0,
                  }}
                >
                  Free · Weekly
                </span>
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "0.875rem", color: "#030712" }}>
                    Federal Sentencing Webinar
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "#64748b" }}>
                    Open to defendants, families & attorneys. No registration required.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT COL — FORM ──────────────────────────── */}
            <div style={{ position: "relative" }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      background: "#fff",
                      border: "2px solid #385ff6",
                      borderRadius: "20px",
                      padding: "4rem 3rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        background: "#385ff6",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1.5rem",
                        fontSize: "1.75rem",
                      }}
                    >
                      ✓
                    </div>
                    <h2
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 900,
                        fontSize: "1.5rem",
                        letterSpacing: "-0.03em",
                        color: "#030712",
                        marginBottom: "0.75rem",
                      }}
                    >
                      We&apos;ll be in touch soon.
                    </h2>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.9375rem", color: "#64748b", lineHeight: 1.6, marginBottom: "2rem" }}>
                      Expect a response within one business day. All information is strictly confidential.
                    </p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "#94a3b8" }}>
                      Direct line: <span style={{ color: "#385ff6", fontWeight: 600 }}>hello@whitecollaradvice.com</span>
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                      background: "#fff",
                      border: "1px solid #e2e8f0",
                      borderRadius: "20px",
                      padding: "2.5rem",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                    }}
                  >
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", color: "#94a3b8", marginBottom: "1.75rem" }}>
                      All fields are confidential.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                      {/* Name row */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                        <div>
                          <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: "#030712", display: "block", marginBottom: "0.4rem" }}>
                            First Name
                          </label>
                          <input
                            {...register("firstName", { required: true })}
                            placeholder="Michael"
                            className={`form-input${errors.firstName ? " error" : ""}`}
                          />
                        </div>
                        <div>
                          <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: "#030712", display: "block", marginBottom: "0.4rem" }}>
                            Last Name
                          </label>
                          <input
                            {...register("lastName", { required: true })}
                            placeholder="Santos"
                            className={`form-input${errors.lastName ? " error" : ""}`}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: "#030712", display: "block", marginBottom: "0.4rem" }}>
                          Email Address
                        </label>
                        <input
                          {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                          type="email"
                          placeholder="you@example.com"
                          className={`form-input${errors.email ? " error" : ""}`}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: "#030712", display: "block", marginBottom: "0.4rem" }}>
                          Phone <span style={{ color: "#94a3b8", fontWeight: 400 }}>(optional)</span>
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="form-input"
                        />
                      </div>

                      {/* Who */}
                      <div>
                        <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: "#030712", display: "block", marginBottom: "0.4rem" }}>
                          Who Are You?
                        </label>
                        <select
                          {...register("who", { required: true })}
                          className={`form-select${errors.who ? " error" : ""}`}
                        >
                          <option value="">Select one...</option>
                          <option value="defendant">Defendant</option>
                          <option value="family">Family Member</option>
                          <option value="attorney">Defense Attorney</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Stage */}
                      <div>
                        <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: "#030712", display: "block", marginBottom: "0.4rem" }}>
                          Where in the Process?
                        </label>
                        <select
                          {...register("stage", { required: true })}
                          className={`form-select${errors.stage ? " error" : ""}`}
                        >
                          <option value="">Select one...</option>
                          <option value="investigation">Under Investigation</option>
                          <option value="indicted">Indicted / Charged</option>
                          <option value="plea">Plea Phase</option>
                          <option value="pre-sentencing">Pre-Sentencing</option>
                          <option value="sentenced">Sentenced / BOP</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.8125rem", fontWeight: 600, color: "#030712", display: "block", marginBottom: "0.4rem" }}>
                          Tell Us About Your Situation
                        </label>
                        <textarea
                          {...register("message", { required: true, minLength: 20 })}
                          rows={4}
                          placeholder="Brief overview — charges, timeline, what help you're looking for..."
                          className={`form-textarea${errors.message ? " error" : ""}`}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary"
                        style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "1rem", borderRadius: "12px" }}
                      >
                        {isSubmitting ? "Sending..." : "Request Confidential Consultation"}
                      </button>

                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#94a3b8", textAlign: "center", lineHeight: 1.5 }}>
                        By submitting, you confirm this communication is confidential. We do not share client information. You will receive a response within one business day.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        .form-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          padding-right: 2.5rem;
        }
      `}</style>
    </main>
  );
}
