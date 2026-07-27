"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Shield,
  Server,
  Database,
  GitBranch,
  BarChart3,
} from "lucide-react";

interface ProjectPreviewProps {
  title: string;
  category: string;
}

interface Metric {
  label: string;
  value: string;
  icon: React.ElementType;
}

function getMetrics(category: string): Metric[] {
  switch (category) {
    case "AI Governance":
      return [
        {
          label: "AI Models",
          value: "186",
          icon: Shield,
        },
        {
          label: "Controls",
          value: "142",
          icon: GitBranch,
        },
        {
          label: "Compliance",
          value: "97%",
          icon: Activity,
        },
        {
          label: "Risk Score",
          value: "24",
          icon: BarChart3,
        },
      ];

    case "Cybersecurity":
      return [
        {
          label: "Alerts",
          value: "1,248",
          icon: Shield,
        },
        {
          label: "Incidents",
          value: "37",
          icon: Activity,
        },
        {
          label: "Endpoints",
          value: "514",
          icon: Server,
        },
        {
          label: "Threats",
          value: "89",
          icon: Database,
        },
      ];

    case "Cloud Security":
      return [
        {
          label: "Azure",
          value: "248",
          icon: Server,
        },
        {
          label: "AWS",
          value: "127",
          icon: Database,
        },
        {
          label: "Policies",
          value: "412",
          icon: Shield,
        },
        {
          label: "Identity",
          value: "99%",
          icon: Activity,
        },
      ];

    default:
      return [
        {
          label: "Events",
          value: "845",
          icon: Activity,
        },
        {
          label: "Analytics",
          value: "98%",
          icon: BarChart3,
        },
        {
          label: "Sources",
          value: "54",
          icon: Database,
        },
        {
          label: "Coverage",
          value: "100%",
          icon: Shield,
        },
      ];
  }
}

const chartHeights = [
  22,
  35,
  30,
  42,
  48,
  37,
  58,
  46,
  54,
  68,
  62,
  78,
];

function MiniChart() {
  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
          Activity Trend
        </span>

        <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
          Live
        </span>
      </div>

      <div className="flex h-24 items-end gap-2">
        {chartHeights.map((height, index) => (
          <motion.div
            key={index}
            initial={{
              height: 8,
              opacity: 0,
            }}
            animate={{
              height,
              opacity: 1,
            }}
            transition={{
              delay: index * 0.05,
              duration: 0.35,
            }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-emerald-600 to-emerald-400"
          />
        ))}
      </div>
    </div>
  );
}
export default function ProjectPreview({
  title,
  category,
}: ProjectPreviewProps) {
  const metrics = getMetrics(category);

  const recentActivity =
    category === "AI Governance"
      ? [
          "AI model risk assessment completed",
          "ISO 42001 control mapped",
          "NIST AI RMF profile updated",
          "Executive report generated",
        ]
      : category === "Cybersecurity"
      ? [
          "Critical alert investigated",
          "Phishing incident contained",
          "IOC correlation completed",
          "Analyst report published",
        ]
      : category === "Cloud Security"
      ? [
          "Azure policy evaluated",
          "AWS workload scanned",
          "Identity risk detected",
          "Defender recommendation applied",
        ]
      : [
          "Threat intelligence updated",
          "MITRE technique mapped",
          "Detection rule deployed",
          "Dashboard synchronized",
        ];

  const badges =
    category === "AI Governance"
      ? ["ISO 42001", "NIST AI RMF", "Responsible AI"]
      : category === "Cybersecurity"
      ? ["SOC", "MITRE", "AI Copilot"]
      : category === "Cloud Security"
      ? ["Azure", "AWS", "Zero Trust"]
      : ["SIEM", "Threat Intel", "Analytics"];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl"
    >
      {/* Browser Header */}
      <div className="border-b border-zinc-800 bg-zinc-900 px-5 py-4">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {title}
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              Enterprise Dashboard
            </p>
          </div>

          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
            ● LIVE
          </span>
        </div>
      </div>

      {/* Dashboard */}
      <div className="p-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <Icon
                    size={18}
                    className="text-emerald-400"
                  />

                  <span className="text-[10px] uppercase tracking-widest text-zinc-500">
                    KPI
                  </span>
                </div>

                <div className="text-2xl font-bold text-white">
                  {metric.value}
                </div>

                <div className="mt-1 text-sm text-zinc-400">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Activity Chart */}
        <MiniChart />

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Recent Activity
          </div>

          <div className="space-y-3">
            {recentActivity.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.45 + index * 0.08,
                }}
                className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3"
              >
                <div className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-sm text-zinc-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compliance / Technology Tags */}
        <div className="mt-8">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Platform Capabilities
          </div>

          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}