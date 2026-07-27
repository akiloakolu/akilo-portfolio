"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

interface ProjectValueProps {
  values: string[];
}

export default function ProjectValue({
  values,
}: ProjectValueProps) {
  return (
    <div className="space-y-3">
      {values.map((value, index) => (
        <motion.div
          key={value}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.08,
          }}
          className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4"
        >
          <div className="rounded-xl bg-emerald-500/10 p-2">
            <TrendingUp
              size={18}
              className="text-emerald-400"
            />
          </div>

          <p className="leading-7 text-zinc-300">
            {value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}