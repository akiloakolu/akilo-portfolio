"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "./AnimatedCounter";

interface MetricCardProps {
  icon: ReactNode;
  value: number;
  label: string;
  color: string;
  suffix?: string;
}

export default function MetricCard({
  icon,
  value,
  label,
  color,
  suffix = "",
}: MetricCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Card className="cursor-pointer border border-slate-700 bg-slate-800 transition-all duration-300 hover:bg-slate-700 hover:shadow-xl">

        <CardContent className="flex flex-col items-center justify-center p-5">

          <div className={`mb-3 ${color}`}>
            {icon}
          </div>

          <div className={`text-3xl font-bold ${color}`}>
            <AnimatedCounter
              value={value}
              suffix={suffix}
            />
          </div>

          <p className="mt-2 text-center text-xs uppercase tracking-wider text-slate-400">
            {label}
          </p>

        </CardContent>

      </Card>
    </motion.div>
  );
}