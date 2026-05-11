import type { Metadata } from "next";
import ProcessPageClient from "./ProcessClient";

export const metadata: Metadata = {
  title: "Our Process | White Collar Advice",
  description:
    "Four phases, one documented outcome. From investigation through supervised release — we build the record that influences judges, probation officers, and the Bureau of Prisons.",
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
