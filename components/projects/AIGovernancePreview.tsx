"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

const riskData = [
  {
    title: "AI Models",
    value: "24",
    icon: BrainCircuit,
    color: "text-cyan-400",
  },
  {
    title: "Controls",
    value: "182",
    icon: ShieldCheck,
    color: "text-emerald-400",
  },
  {
    title: "Open Risks",
    value: "7",
    icon: TriangleAlert,
    color: "text-amber-400",
  },
  {
    title: "Compliance",
    value: "96%",
    icon: Activity,
    color: "text-violet-400",
  },
];

export default function AIGovernancePreview() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="relative space-y-6">
        {/* Header */}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              AI Governance
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              Executive Dashboard
            </h3>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-3 w-3 rounded-full bg-emerald-400"
          />
        </div>

        {/* KPI Cards */}

        <div className="grid grid-cols-2 gap-4">
          {riskData.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
              >
                <div className="flex items-center justify-between">
                  <Icon className={`h-5 w-5 ${item.color}`} />

                  <span className="text-xs uppercase text-slate-500">
                    Live
                  </span>
                </div>

                <div className="mt-5 text-3xl font-bold text-white">
                  {item.value}
                </div>

                <div className="mt-2 text-sm text-slate-400">
                  {item.title}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Risk Score */}

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-300">
              Overall AI Risk Score
            </span>

            <span className="font-bold text-emerald-400">
              LOW
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "82%" }}
              transition={{
                duration: 1.5,
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
            />
          </div>

          <p className="mt-3 text-sm text-slate-400">
            Governance maturity continues to improve through
            automated controls, policy mapping, and continuous
            compliance monitoring.
          </p>
        </div>

        {/* Compliance */}

        <div className="space-y-3">
          {[
            ["EU AI Act", "94%"],
            ["NIST AI RMF", "98%"],
            ["ISO 42001", "91%"],
            ["OSFI B-13", "96%"],
          ].map(([framework, score]) => (
            <div
              key={framework}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3"
            >
              <span className="text-sm text-slate-300">
                {framework}
              </span>

              <span className="font-semibold text-cyan-400">
                {score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}