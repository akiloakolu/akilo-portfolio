import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BackToTop from "@/components/ui/BackToTop";
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
  metadataBase: new URL("https://akiloportforlio.com"),
  title: "Akilo | AI Governance & Technology Risk",

  description:
    "Building secure, trustworthy AI through AI governance, technology risk management, cybersecurity, enterprise GRC, cloud security, and internationally recognized frameworks including NIST AI RMF and ISO/IEC 42001.",

  applicationName: "Akilo Portfolio",

  category: "Technology",

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

    url: "https://your-domain.com",

    siteName: "Akilo Portfolio",

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akilo Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Akilo | AI Governance & Technology Risk",

    description:
      "AI Governance • Technology Risk • Cybersecurity • Responsible AI",

    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Akilo",

  alternateName: "Akilo A.",

  url: "https://your-domain.com",

  image: "https://your-domain.com/og-image.png",

  jobTitle: "AI Governance & Technology Risk Professional",

  description:
    "AI Governance, Technology Risk, Cybersecurity, Enterprise GRC, Cloud Security and Responsible AI professional helping organizations build secure, trustworthy AI through governance, cybersecurity, and internationally recognized frameworks including NIST AI RMF and ISO/IEC 42001.",

  email: "mailto:your-email@example.com",

  sameAs: [
    "https://www.linkedin.com/in/akilo/",
    "https://github.com/akiloakolu"
  ],

  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Fanshawe College"
  },

  knowsLanguage: [
    "English"
  ],

  knowsAbout: [
    "AI Governance",
    "Responsible AI",
    "Technology Risk",
    "Enterprise Risk Management",
    "Cybersecurity",
    "Cloud Security",
    "Information Security",
    "Security Operations",
    "Governance, Risk & Compliance",
    "Enterprise GRC",
    "Risk Assessments",
    "Third-Party Risk",
    "AI Risk Management",
    "NIST AI RMF",
    "ISO/IEC 42001",
    "NIST Cybersecurity Framework",
    "Microsoft Sentinel",
    "Microsoft Defender",
    "Azure Security",
    "AWS Security",
    "Zero Trust",
    "Identity & Access Management",
    "Security Governance",
    "Risk Registers",
    "Executive Reporting",
    "ServiceNow IRM",
    "RSA Archer"
  ],

  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certified Information Security Manager (CISM)",
      credentialCategory: "Professional Certification"
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certified in Risk and Information Systems Control (CRISC)",
      credentialCategory: "Professional Certification"
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certified Information Systems Security Professional (CISSP)",
      credentialCategory: "In Progress"
    }
  ],

  worksFor: {
    "@type": "Organization",
    name: "Independent AI Governance & Technology Risk Professional"
  }
};
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-white">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(personSchema),
  }}
/> 
<BackgroundEffects />
        <ScrollProgress />

        <Navbar />

        {children}
        <BackToTop />
      </body>
    </html>
  );
}