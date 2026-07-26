"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface KPICardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export default function KPICard({
  icon,
  value,
  label,
}: KPICardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-5
        shadow-lg
      "
    >
      <div className="mb-4 text-cyan-400">
        {icon}
      </div>

      <h3 className="text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {label}
      </p>
    </motion.div>
  );
}