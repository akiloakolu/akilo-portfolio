export interface Project {
  id: string;
  featured?: boolean;

  title: string;
  category: string;
  tagline: string;

  image: string;

  challenge: string;
  solution: string;

  businessValue: string[];

  technologies: string[];

  architecture: string[];

  stats?: {
  label: string;
  value: string;
}[];

  github: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "riskcommand",
    featured: true,

    title: "RiskCommand AI",

    category: "AI Governance",

    tagline:
      "Enterprise Technology Risk & AI Governance Platform",

    image: "/images/projects/riskcommand.png",

    challenge:
      "Organizations require a centralized platform to manage AI risks, technology governance, regulatory compliance, and executive reporting across the enterprise.",

    solution:
      "Designed and developed an enterprise governance platform inspired by Archer and ServiceNow IRM that centralizes AI inventories, risk registers, control mapping, policy management, and executive dashboards.",

    businessValue: [
      "Enterprise AI Governance",
      "Technology Risk Management",
      "Executive Dashboards",
      "AI Risk Register",
      "ISO 42001 Alignment",
      "NIST AI RMF Alignment",
      "Responsible AI Governance"
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "OpenAI API"
    ],

    architecture: [
  "Next.js",
  "Express API",
  "OpenAI",
  "MongoDB",
],

stats: [
  {
    value: "98%",
    label: "Detection Accuracy",
  },
  {
    value: "60%",
    label: "Faster Response",
  },
  {
    value: "24/7",
    label: "AI Monitoring",
  },
  {
    value: "NIST",
    label: "AI Governance",
  },
],


    github: "https://github.com/akiloakolu/riskcommand-ai",

    demo: "https://riskcommand.vercel.app"
  },

  {
    id: "secureops",

    title: "SecureOps AI",

    category: "Cybersecurity",

    tagline:
      "AI-powered Security Operations Copilot",

    image: "/images/projects/secureops.png",

    challenge:
      "Security analysts spend significant time triaging alerts, correlating incidents, and documenting investigations.",

    solution:
      "Built an AI-powered SOC assistant that prioritizes alerts, recommends remediation steps, summarizes incidents, and supports analyst workflows.",

    businessValue: [
      "Threat Detection",
      "Incident Response",
      "SOC Automation",
      "Executive Reporting",
      "AI-assisted Investigation"
    ],

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "OpenAI",
      "Tailwind CSS"
    ],

    architecture: [
      "React",
      "API",
      "OpenAI",
      "MongoDB"
    ],
    
    stats: [
  {
    value: "95%",
    label: "Alert Accuracy",
  },
  {
    value: "50%",
    label: "Faster Triage",
  },
  {
    value: "24/7",
    label: "AI Monitoring",
  },
  {
    value: "SOC",
    label: "Automation",
  },
],

    github: "https://github.com/akiloakolu/secureops-ai",

    demo: "https://secureops-ai.vercel.app"
  },

  {
    id: "ai-governance",

    title: "AI Governance Dashboard",

    category: "Responsible AI",

    tagline:
      "Governance, Compliance & AI Lifecycle Management",

    image: "/images/projects/governance.png",

    challenge:
      "Organizations need visibility into AI models, governance processes, risk posture, and compliance with emerging AI regulations.",

    solution:
      "Developed a governance dashboard that tracks AI inventories, model lifecycle, risk scoring, control compliance, and executive reporting.",

    businessValue: [
      "Model Inventory",
      "AI Risk Scoring",
      "Compliance Monitoring",
      "Executive Reporting",
      "Responsible AI"
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Chart.js",
      "Tailwind CSS"
    ],
    
    stats: [
  {
    value: "100%",
    label: "Model Inventory",
  },
  {
    value: "ISO 42001",
    label: "Compliance",
  },
  {
    value: "NIST",
    label: "AI Governance",
  },
  {
    value: "360°",
    label: "Executive Visibility",
  },
],

    architecture: [
      "Dashboard",
      "Analytics",
      "Governance Engine",
      "Reporting"
    ],

    github: "https://github.com/akiloakolu/ai-governance-dashboard",

    demo: "https://ai-governance.vercel.app"
  },

  {
    id: "cloud-security",

    title: "Enterprise Cloud Security",

    category: "Cloud Security",

    tagline:
      "Azure • AWS • Identity & Zero Trust",

    image: "/images/projects/cloud-security.png",

    challenge:
      "Modern enterprises require secure cloud environments with centralized identity, governance, and Zero Trust controls.",

    solution:
      "Implemented enterprise cloud security architectures leveraging Microsoft Entra ID, Microsoft Defender, Azure, AWS, and Zero Trust principles.",

    businessValue: [
      "Identity Security",
      "Zero Trust",
      "Cloud Governance",
      "Hybrid Security",
      "Secure Access"
    ],

    technologies: [
      "Azure",
      "AWS",
      "Microsoft Entra ID",
      "Microsoft Defender",
      "Microsoft Sentinel"
    ],

    architecture: [
      "Users",
      "Identity",
      "Cloud",
      "Defender",
      "Monitoring"
    ],
    
    stats: [
  {
    value: "Zero Trust",
    label: "Architecture",
  },
  {
    value: "Azure",
    label: "Cloud Platform",
  },
  {
    value: "AWS",
    label: "Multi-Cloud",
  },
  {
    value: "24/7",
    label: "Security Monitoring",
  },
],

    github: "https://github.com/akiloakolu/cloud-security",

    demo: ""
  },

  {
    id: "soc-dashboard",

    title: "SOC Threat Detection Dashboard",

    category: "Security Operations",

    tagline:
      "Threat Hunting & Detection Engineering",

    image: "/images/projects/soc-dashboard.png",

    challenge:
      "Security Operations Centers require centralized visibility into threats, detections, and incidents.",

    solution:
      "Developed a SOC dashboard integrating SIEM analytics, MITRE ATT&CK mapping, threat intelligence, and executive reporting.",

    businessValue: [
      "Threat Hunting",
      "Detection Engineering",
      "MITRE ATT&CK",
      "Incident Management",
      "Security Analytics"
    ],

    technologies: [
      "Microsoft Sentinel",
      "Splunk",
      "QRadar",
      "KQL",
      "MITRE ATT&CK"
    ],

    architecture: [
      "SIEM",
      "Threat Intelligence",
      "Analytics",
      "Dashboard"
    ],
    
    stats: [
  {
    value: "MITRE",
    label: "ATT&CK Framework",
  },
  {
    value: "SIEM",
    label: "Threat Analytics",
  },
  {
    value: "99%",
    label: "Threat Visibility",
  },
  {
    value: "SOC",
    label: "Operations",
  },
],

    github: "https://github.com/akiloakolu/soc-dashboard",

    demo: ""
  }
];