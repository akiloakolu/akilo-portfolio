import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import BackgroundEffects from "@/components/layout/BackgroundEffects";

import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akilo | AI Governance & Technology Risk",
  description:
    "Portfolio of Akilo – AI Governance, Technology Risk, Cybersecurity, AI Risk Management, GRC, and Responsible AI Professional.",

  keywords: [
    "AI Governance",
    "Technology Risk",
    "Cybersecurity",
    "GRC",
    "NIST AI RMF",
    "ISO 42001",
    "Risk Management",
    "Information Security",
    "Cloud Security",
    "Responsible AI",
  ],

  authors: [
    {
      name: "Akilo",
    },
  ],

  creator: "Akilo",

  openGraph: {
    title: "Akilo | AI Governance & Technology Risk",
    description:
      "Helping organizations build secure, responsible, and trustworthy AI through governance, cybersecurity, and technology risk management.",
    type: "website",
    locale: "en_CA",
  },

  twitter: {
    card: "summary_large_image",
    title: "Akilo | AI Governance & Technology Risk",
    description:
      "AI Governance • Technology Risk • Cybersecurity • Responsible AI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-white">
        <BackgroundEffects />
        <ScrollProgress />

        <Navbar />

        {children}
      </body>
    </html>
  );
}