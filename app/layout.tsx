import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "White Collar Advice | Federal Sentencing & Mitigation Experts",
  description:
    "Not prison consultants. We build documented sentencing mitigation records — narratives, character letters, and evidence — that influence judges, probation officers, and the Bureau of Prisons.",
  openGraph: {
    title: "White Collar Advice | Federal Sentencing & Mitigation Experts",
    description:
      "Not prison consultants. We build documented sentencing mitigation records that influence judges, probation officers, and the Bureau of Prisons.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
