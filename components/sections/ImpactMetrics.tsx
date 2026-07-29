"use client";

import { motion } from "framer-motion";
import { metrics } from "@/data/metrics";

export default function ImpactMetrics() {
  return (
    <section
      id="impact"
      className="bg-slate-950 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Impact
          </p>

          <h2 className="text-4xl font-bold leading-tight">
            Driving Measurable Business Outcomes
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-300">
            Technology Risk, AI Governance, and Cybersecurity leadership
            measured by real business results.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group transform-gpu overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-3 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
  <Icon className="h-10 w-10" />
</div>

                <h3 className="text-5xl font-bold text-white">
                  {metric.value}
                </h3>

                <p className="mt-3 text-lg font-semibold">
                  {metric.label}
                </p>

                <p className="mt-4 text-[15px] leading-7 text-slate-400">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}