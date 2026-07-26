import {
  ShieldCheck,
  BrainCircuit,
  BadgeCheck,
  Radar,
  Cloud,
  Building2,
} from "lucide-react";

export const impactCards = [
  {
    title: "Technology Risk",
    metric: "20+",
    subtitle: "Risk Assessments",
    description: "Enterprise governance, controls, and technology risk management.",
    icon: ShieldCheck,
  },
  {
    title: "AI Governance",
    metric: "ISO 42001",
    subtitle: "NIST AI RMF",
    description: "Responsible AI, governance frameworks, and AI risk oversight.",
    icon: BrainCircuit,
  },
  {
    title: "Professional Credentials",
    metric: "6 Certified",
    subtitle: "3 In Progress",
    description: "Industry-recognized certifications across cybersecurity and GRC.",
    icon: BadgeCheck,
  },
  {
    title: "Security Operations",
    metric: "SOC",
    subtitle: "Sentinel • Splunk • QRadar",
    description: "Threat detection, monitoring, incident response, and SIEM.",
    icon: Radar,
  },
  {
    title: "Cloud Security",
    metric: "Azure • AWS",
    subtitle: "Microsoft Entra ID",
    description: "Identity, cloud governance, and secure hybrid environments.",
    icon: Cloud,
  },
  {
    title: "Enterprise Frameworks",
    metric: "ISO 27001",
    subtitle: "COBIT • NIST CSF",
    description: "Security governance and compliance aligned to global standards.",
    icon: Building2,
  },
];