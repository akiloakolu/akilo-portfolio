"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  TriangleAlert,
  Bot,
  FileCheck,
  CircleCheck,
} from "lucide-react";

const activities = [
  {
    icon: ShieldCheck,
    title: "Risk assessment completed",
    time: "2 min ago",
    color: "text-green-400",
  },
  {
    icon: Bot,
    title: "New AI model registered",
    time: "5 min ago",
    color: "text-cyan-400",
  },
  {
    icon: FileCheck,
    title: "NIST AI RMF policy updated",
    time: "12 min ago",
    color: "text-blue-400",
  },
  {
    icon: TriangleAlert,
    title: "Critical risk detected",
    time: "18 min ago",
    color: "text-red-400",
  },
  {
    icon: CircleCheck,
    title: "Compliance scan completed",
    time: "25 min ago",
    color: "text-green-400",
  },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-lg font-bold text-white">
          Live Activity
        </h2>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
          LIVE
        </span>

      </div>

      <div className="space-y-4">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <motion.div
              key={activity.title}
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.4,
              }}
              className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-800/50 p-4 transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 ${activity.color}`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex-1">

                <p className="font-medium text-white">
                  {activity.title}
                </p>

                <p className="text-sm text-slate-400">
                  {activity.time}
                </p>

              </div>

            </motion.div>
          );
        })}

      </div>
    </div>
  );
}