"use client";

import { motion } from "framer-motion";
import {
  FileCheck,
  Bot,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import MetricCard from "./MetricCard";
import CircularGauge from "./CircularGauge";
import ActivityFeed from "./ActivityFeed";

import { dashboardData } from "@/data/dashboard";

export default function DashboardCard() {

  return (

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full"
    >

      <Card className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/90 shadow-2xl backdrop-blur-xl">

        {/* ================= HEADER ================= */}

        <CardHeader className="border-b border-slate-800">

          <div className="flex items-center justify-between">

            <div>

              <CardTitle className="text-2xl font-bold text-white">

                {dashboardData.overview.title}

              </CardTitle>

              <p className="mt-2 text-sm text-slate-400">

                {dashboardData.overview.subtitle}

              </p>

            </div>

            <Badge className="bg-green-600 hover:bg-green-600">

              {dashboardData.overview.status}

            </Badge>

          </div>

        </CardHeader>

        {/* ================= CONTENT ================= */}

        <CardContent className="space-y-8 p-8">

          {/* Top Metrics */}

          <div className="grid gap-5 md:grid-cols-3">

            {dashboardData.metrics.map((metric) => {

              const Icon = metric.icon;

              return (

                <MetricCard
                  key={metric.title}
                  title={metric.title}
                  value={metric.value}
                  suffix={metric.suffix}
                  color={metric.color}
                  icon={<Icon className="h-8 w-8" />}
                />

              );

            })}

          </div>

          {/* Risk Gauge + Frameworks */}

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">

              <CircularGauge
                value={dashboardData.overview.overallRisk}
                color="#22c55e"
                label="Overall Risk"
              />

            </div>

            <div className="space-y-5 rounded-2xl border border-slate-700 bg-slate-800/50 p-6">

              <div className="flex items-center gap-3">

                <FileCheck className="h-6 w-6 text-cyan-400" />

                <div>

                  <h3 className="font-semibold text-white">

                    Governance Frameworks

                  </h3>

                  <p className="text-sm text-slate-400">

                    Enterprise AI Controls

                  </p>

                </div>

              </div>

              <div className="space-y-4">

                {dashboardData.frameworks.map((framework) => (

                  <div key={framework.name}>

                    <div className="mb-2 flex justify-between">

                      <span className="text-sm text-slate-300">

                        {framework.name}

                      </span>

                      <span
                        className={`text-sm font-semibold ${framework.color}`}
                      >

                        {framework.value}%

                      </span>

                    </div>

                    <Progress value={framework.value} />

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* AI Models + Activity Feed */}

          <div className="grid gap-6 lg:grid-cols-2">

            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">

              <div className="mb-5 flex items-center gap-3">

                <Bot className="h-6 w-6 text-purple-400" />

                <div>

                  <h3 className="font-semibold text-white">

                    AI Model Inventory

                  </h3>

                  <p className="text-sm text-slate-400">

                    Models under governance

                  </p>

                </div>

              </div>

              <div className="space-y-4">

                {dashboardData.aiModels.map((model) => (

                  <div
                    key={model.name}
                    className="flex items-center justify-between rounded-lg bg-slate-900/60 p-3"
                  >

                    <span className="text-slate-200">

                      {model.name}

                    </span>

                    <Badge
                      className={`${model.badgeColor} hover:${model.badgeColor}`}
                    >

                      {model.status}

                    </Badge>

                  </div>

                ))}

              </div>

            </div>

            <ActivityFeed />

          </div>
                    {/* ================= SUMMARY ================= */}

          <div className="grid gap-6 md:grid-cols-3">

            {dashboardData.summary.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-700 bg-slate-800/50 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
                >

                  <div className="mb-3 flex items-center gap-2">

                    <Icon className={`h-5 w-5 ${item.color}`} />

                    <span className="text-sm text-slate-400">

                      {item.title}

                    </span>

                  </div>

                  <p className="text-3xl font-bold text-white">

                    {item.value}

                  </p>

                </div>

              );

            })}

          </div>

        </CardContent>

      </Card>

    </motion.div>

  );

}