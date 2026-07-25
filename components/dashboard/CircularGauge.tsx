"use client";

import { motion } from "framer-motion";

interface CircularGaugeProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
}

export default function CircularGauge({
  value,
  size = 180,
  strokeWidth = 14,
  color = "#22c55e",
  label = "Overall Risk",
}: CircularGaugeProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = (value / 100) * circumference;
  const offset = circumference - progress;

  return (
    <div className="flex flex-col items-center">

      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          className="-rotate-90"
        >
          {/* Background Ring */}

          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#1e293b"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Animated Ring */}

          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={circumference}
            initial={{
              strokeDashoffset: circumference,
            }}
            animate={{
              strokeDashoffset: offset,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
            }}
          />
        </svg>

        {/* Center Text */}

        <div className="absolute flex flex-col items-center">

          <span className="text-5xl font-extrabold text-white">
            {value}%
          </span>

          <span className="mt-1 text-sm text-slate-400">
            Risk Score
          </span>

        </div>
      </div>

      <p className="mt-5 text-lg font-semibold text-white">
        {label}
      </p>

    </div>
  );
}