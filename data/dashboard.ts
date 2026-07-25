import {
  ShieldCheck,
  ClipboardCheck,
  TriangleAlert,
  Activity,
} from "lucide-react";

export const dashboardData = {
  overview: {
    title: "AI Governance Dashboard",
    subtitle: "Enterprise AI Risk & Compliance Overview",
    status: "Operational",
    overallRisk: 96,
  },

  metrics: [
    {
      title: "Risk Score",
      value: 96,
      suffix: "%",
      color: "text-green-400",
      icon: ShieldCheck,
    },
    {
      title: "Compliance",
      value: 98,
      suffix: "%",
      color: "text-cyan-400",
      icon: ClipboardCheck,
    },
    {
      title: "Critical Risks",
      value: 3,
      suffix: "",
      color: "text-red-400",
      icon: TriangleAlert,
    },
  ],

  frameworks: [
    {
      name: "NIST AI RMF",
      value: 100,
      color: "text-green-400",
    },
    {
      name: "ISO/IEC 42001",
      value: 94,
      color: "text-cyan-400",
    },
    {
      name: "NIST Cybersecurity Framework",
      value: 88,
      color: "text-yellow-400",
    },
  ],

  aiModels: [
    {
      name: "GPT-4o",
      status: "Active",
      badgeColor: "bg-green-600",
    },
    {
      name: "Claude 4",
      status: "Active",
      badgeColor: "bg-green-600",
    },
    {
      name: "Gemini",
      status: "Monitoring",
      badgeColor: "bg-blue-600",
    },
    {
      name: "Llama",
      status: "Testing",
      badgeColor: "bg-amber-600",
    },
  ],

  summary: [
    {
      title: "Threats Blocked",
      value: "8,247",
      icon: Activity,
      color: "text-cyan-400",
    },
    {
      title: "Security Policies",
      value: "148",
      icon: ShieldCheck,
      color: "text-green-400",
    },
    {
      title: "Assessments",
      value: "56",
      icon: ClipboardCheck,
      color: "text-cyan-400",
    },
  ],
};