"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export default function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        y: -12,
      }}
      className={`
  pointer-events-none
  absolute
  rounded-2xl
  border
  border-white/10
  bg-white/5
  backdrop-blur-xl
  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
  px-5
  py-4
  min-w-[210px]
  select-none
  transition-all
  duration-300
  ${className}
`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
          {icon}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}