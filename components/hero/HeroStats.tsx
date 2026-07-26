"use client";

import {
  Award,
  ClipboardCheck,
  FolderKanban,
  Shield,
} from "lucide-react";

import KPICard from "./KPICard";

const stats = [
  {
    icon: <Award size={26} />,
    value: "7+",
    label: "Certifications",
  },
  {
    icon: <ClipboardCheck size={26} />,
    value: "6+",
    label: "Frameworks",
  },
  {
    icon: <FolderKanban size={26} />,
    value: "20+",
    label: "Projects",
  },
  {
    icon: <Shield size={26} />,
    value: "15+",
    label: "Security Skills",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <KPICard
          key={stat.label}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}