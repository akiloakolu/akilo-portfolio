"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedCounter from "./AnimatedCounter";

interface MetricCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  color: string;
  suffix?: string;
}

export default function MetricCard({
  title,
  value,
  icon,
  color,
  suffix = "",
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
    >
      <Card className="border border-slate-700 bg-slate-800/80 backdrop-blur-md transition-all duration-300 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20">
        <CardContent className="flex flex-col items-center justify-center gap-3 p-6">

          <div className={`${color}`}>
            {icon}
          </div>

          <h3 className="text-sm font-medium uppercase tracking-widest text-slate-400">
            {title}
          </h3>

          <div className={`text-4xl font-bold ${color}`}>
            <AnimatedCounter
              value={value}
              suffix={suffix}
            />
          </div>

        </CardContent>
      </Card>
    </motion.div>
  );
}