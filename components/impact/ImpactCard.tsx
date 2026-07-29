"use client";

import { motion } from "framer-motion";

interface Props {
  card: {
    title: string;
    metric: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
  };
}

export default function ImpactCard({ card }: Props) {
  const Icon = card.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="group transform-gpu overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950 p-8 shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-cyan-500/20"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {card.title}
      </h3>

      <div className="mt-4 text-3xl font-black text-cyan-400">
        {card.metric}
      </div>

      <div className="mt-2 text-sm font-semibold text-slate-300">
        {card.subtitle}
      </div>

      <p className="mt-5 text-[15px] leading-7 text-slate-400">
        {card.description}
      </p>
    </motion.div>
  );
}