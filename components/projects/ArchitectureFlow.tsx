"use client";

import { motion } from "framer-motion";
import { ArrowDown, AlertCircle } from "lucide-react";

interface ArchitectureFlowProps {
  steps?: string[];
}

export default function ArchitectureFlow({
  steps = [],
}: ArchitectureFlowProps) {
  if (steps.length === 0) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5 text-yellow-300">
        <AlertCircle size={20} />
        <span>No architecture defined for this project.</span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <div className="flex flex-col items-center">
        {steps.map((step, index) => (
          <div
            key={`${step}-${index}`}
            className="flex w-full flex-col items-center"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.12,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800/60 px-5 py-4 text-center transition-colors hover:border-emerald-500 hover:bg-emerald-500/10"
            >
              <span className="text-sm font-semibold text-zinc-100">
                {step}
              </span>
            </motion.div>

            {index < steps.length - 1 && (
              <div className="py-3">
                <ArrowDown
                  size={22}
                  className="text-emerald-400"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}