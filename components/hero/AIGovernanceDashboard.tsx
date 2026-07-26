"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const complianceItems = [
  "ISO 42001",
  "NIST AI RMF",
  "ISO 27001",
  "COBIT",
];

const domains = [
  {
    name: "AI Governance",
    value: 95,
  },
  {
    name: "Technology Risk",
    value: 92,
  },
  {
    name: "Cybersecurity",
    value: 90,
  },
  {
    name: "Responsible AI",
    value: 88,
  },
];

export default function AIGovernanceDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-[320px] rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
    >
      {/* Header */}

      <h3 className="text-xl font-semibold text-white">
        AI Governance Dashboard
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        Enterprise Readiness
      </p>

      {/* Compliance Score */}

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-slate-300">
            Compliance Score
          </span>

          <span className="font-semibold text-cyan-400">
            94%
          </span>
        </div>

        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "94%" }}
            transition={{ duration: 1.2 }}
            className="h-full rounded-full bg-cyan-400"
          />
        </div>
      </div>

      {/* Compliance */}

      <div className="mt-8">
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Compliance
        </h4>

        <div className="space-y-3">
          {complianceItems.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                <span className="text-sm text-slate-300">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Domains */}

      <div className="mt-8">
        <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Active Domains
        </h4>

        <div className="space-y-5">
          {domains.map((domain) => (
            <div key={domain.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-slate-300">
                  {domain.name}
                </span>

                <span className="text-sm text-cyan-400">
                  {domain.value}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${domain.value}%`,
                  }}
                  transition={{
                    duration: 1.3,
                  }}
                  className="h-full rounded-full bg-cyan-400"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <p className="font-semibold text-cyan-300">
          Enterprise AI Governance Ready
        </p>

        <p className="mt-2 text-xs leading-6 text-slate-400">
          Focused on AI Governance, Technology Risk,
          Responsible AI, Cybersecurity,
          and Enterprise Compliance.
        </p>
      </div>
    </motion.div>
  );
}