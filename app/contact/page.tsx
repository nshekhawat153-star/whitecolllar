import type { Metadata } from "next";
import ContactPageClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | White Collar Advice",
  description:
    "Schedule a confidential consultation with federal sentencing experts. We speak with defendants, families, and defense attorneys. Response within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
