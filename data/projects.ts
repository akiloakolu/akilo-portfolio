import { ComponentType } from "react";

import AIGovernancePreview from "@/components/projects/AIGovernancePreview";

export interface Project {
  title: string;
  subtitle: string;

  challenge: string;

  solution: string;

  impact: string[];

  technologies: string[];

  github: string;

  demo: string;

  featured?: boolean;

  preview: ComponentType;
}

export const projects: Project[] = [
  {
    title: "RiskCommand AI",

    subtitle:
      "Enterprise AI Governance & Technology Risk Management Platform",

    challenge:
      "Organizations adopting AI often struggle with fragmented governance processes, disconnected risk registers, and limited visibility into AI model compliance across business units.",

    solution:
      "Designed and built a centralized AI Governance platform inspired by Archer IRM and ServiceNow. The platform enables AI inventory management, technology risk assessments, control mapping, executive dashboards, and compliance reporting through an intuitive interface.",

    impact: [
      "Enterprise AI Governance",
      "Technology Risk Visibility",
      "Executive Decision Support",
      "Regulatory Compliance",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "OpenAI API",
    ],

    github: "https://github.com/akiloakolu",

    demo: "#",

    featured: true,

    preview: AIGovernancePreview,
  },

  {
    title: "SecureOps AI",

    subtitle:
      "AI-Powered Security Operations Center Assistant",

    challenge:
      "Security analysts spend significant time manually triaging alerts, classifying incidents, and generating response recommendations, resulting in slower incident response.",

    solution:
      "Developed an AI-powered SOC assistant capable of analyzing alerts, assigning severity levels, recommending response actions, and presenting findings through a modern operational dashboard.",

    impact: [
      "Faster Incident Triage",
      "Reduced Analyst Workload",
      "Improved Threat Visibility",
      "Security Automation",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "OpenAI API",
    ],

    github: "https://github.com/akiloakolu",

    demo: "#",

    preview: AIGovernancePreview,
  },

  {
    title: "Enterprise AI Governance Dashboard",

    subtitle:
      "Executive AI Risk & Compliance Reporting",

    challenge:
      "Executive leadership requires clear visibility into AI governance metrics, compliance posture, and operational risks without navigating technical security tools.",

    solution:
      "Created an executive dashboard that visualizes AI risk scores, regulatory compliance, governance maturity, and enterprise KPIs using interactive analytics.",

    impact: [
      "Executive Reporting",
      "Governance Metrics",
      "Compliance Monitoring",
      "Business Intelligence",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion",
      "Tailwind CSS",
    ],

    github: "https://github.com/akiloakolu",

    demo: "#",

    preview: AIGovernancePreview,
  },

  {
    title: "Enterprise Security Labs",

    subtitle:
      "Cloud Security, Zero Trust & Infrastructure Projects",

    challenge:
      "Hands-on experience with enterprise technologies is essential for validating secure architecture, cloud security, and zero-trust implementation strategies.",

    solution:
      "Completed a portfolio of enterprise security labs covering Microsoft Azure, Active Directory, Hyper-V, SIEM, networking, identity management, Zero Trust, and cloud infrastructure.",

    impact: [
      "Cloud Security",
      "Infrastructure Hardening",
      "Zero Trust",
      "Enterprise Architecture",
    ],

    technologies: [
      "Azure",
      "Microsoft Sentinel",
      "Hyper-V",
      "Windows Server",
      "PowerShell",
      "Active Directory",
    ],

    github: "https://github.com/akiloakolu",

    demo: "#",

    preview: AIGovernancePreview,
  },
];