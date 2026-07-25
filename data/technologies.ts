import {
  ShieldCheck,
  Cloud,
  Database,
  BrainCircuit,
  Server,
  Lock,
  Workflow,
  BarChart3,
  Network,
  SearchCheck,
  Cpu,
  Globe,
} from "lucide-react";

export const technologies = [
  {
    title: "Microsoft Azure",
    category: "Cloud Security",
    level: 90,
    color: "from-blue-500 to-cyan-500",
    icon: Cloud,
    description:
      "Identity, networking, security monitoring and enterprise cloud governance.",
  },

  {
    title: "Microsoft Sentinel",
    category: "SIEM",
    level: 92,
    color: "from-cyan-500 to-blue-500",
    icon: SearchCheck,
    description:
      "Threat detection, incident investigation and automation.",
  },

  {
    title: "OpenAI",
    category: "Generative AI",
    level: 90,
    color: "from-emerald-500 to-green-500",
    icon: BrainCircuit,
    description:
      "LLM integrations, AI governance and enterprise copilots.",
  },

  {
    title: "AWS",
    category: "Cloud",
    level: 80,
    color: "from-orange-500 to-yellow-500",
    icon: Server,
    description:
      "Cloud infrastructure and security fundamentals.",
  },

  {
    title: "ISO/IEC 42001",
    category: "AI Governance",
    level: 95,
    color: "from-purple-500 to-fuchsia-500",
    icon: ShieldCheck,
    description:
      "AI Management System implementation and governance.",
  },

  {
    title: "NIST AI RMF",
    category: "Framework",
    level: 96,
    color: "from-green-500 to-emerald-500",
    icon: Workflow,
    description:
      "AI risk identification, measurement and governance.",
  },

  {
    title: "NIST CSF",
    category: "Cybersecurity",
    level: 92,
    color: "from-indigo-500 to-blue-500",
    icon: Lock,
    description:
      "Govern, Identify, Protect, Detect, Respond and Recover.",
  },

  {
    title: "Splunk",
    category: "SIEM",
    level: 87,
    color: "from-lime-500 to-green-500",
    icon: Database,
    description:
      "Enterprise log analysis and threat hunting.",
  },

  {
    title: "CrowdStrike",
    category: "EDR",
    level: 88,
    color: "from-red-500 to-orange-500",
    icon: Cpu,
    description:
      "Endpoint Detection & Response and threat intelligence.",
  },

  {
    title: "Microsoft Defender XDR",
    category: "XDR",
    level: 89,
    color: "from-sky-500 to-cyan-500",
    icon: Network,
    description:
      "Extended Detection & Response across enterprise assets.",
  },

  {
    title: "Power BI",
    category: "Analytics",
    level: 86,
    color: "from-yellow-400 to-amber-500",
    icon: BarChart3,
    description:
      "Security dashboards and executive reporting.",
  },

  {
    title: "Zero Trust",
    category: "Architecture",
    level: 91,
    color: "from-violet-500 to-indigo-500",
    icon: Globe,
    description:
      "Identity-first security architecture and continuous verification.",
  },
];