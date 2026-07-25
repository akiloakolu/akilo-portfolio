import {
  ShieldCheck,
  FileCheck,
  Bot,
  TriangleAlert,
  CircleCheck,
  ClipboardCheck,
} from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function DashboardCard() {
  return (
    <Card className="w-full max-w-xl border border-slate-700 bg-slate-900 text-white shadow-2xl">

      {/* Header */}
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight">
          AI Governance Dashboard
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">

        {/* =======================================
            SUMMARY METRICS
        ======================================== */}

        <div className="grid grid-cols-3 gap-4">

          {/* Risk Score */}

          <Card className="border border-slate-700 bg-slate-800 transition-all duration-300 hover:scale-105 hover:bg-slate-700 hover:shadow-lg cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-5">

              <ShieldCheck className="mb-2 h-8 w-8 text-green-400" />

              <p className="text-3xl font-bold text-green-400">
                96%
              </p>

              <p className="mt-2 text-xs uppercase tracking-wider text-slate-400">
                Risk Score
              </p>

            </CardContent>
          </Card>

          {/* Compliance */}

          <Card className="border border-slate-700 bg-slate-800 transition-all duration-300 hover:scale-105 hover:bg-slate-700 hover:shadow-lg cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-5">

              <ClipboardCheck className="mb-2 h-8 w-8 text-blue-400" />

              <p className="text-3xl font-bold text-blue-400">
                98%
              </p>

              <p className="mt-2 text-xs uppercase tracking-wider text-slate-400">
                Compliance
              </p>

            </CardContent>
          </Card>

          {/* Critical */}

          <Card className="border border-slate-700 bg-slate-800 transition-all duration-300 hover:scale-105 hover:bg-slate-700 hover:shadow-lg cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-5">

              <TriangleAlert className="mb-2 h-8 w-8 text-red-400" />

              <p className="text-3xl font-bold text-red-400">
                3
              </p>

              <p className="mt-2 text-xs uppercase tracking-wider text-slate-400">
                Critical Risks
              </p>

            </CardContent>
          </Card>

        </div>

        {/* =======================================
            Overall Risk
        ======================================== */}

        <div>

          <div className="mb-3 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <ShieldCheck className="h-5 w-5 text-green-400" />

              <span className="font-medium">
                Overall Risk
              </span>

            </div>

            <span className="font-bold text-green-400">
              96%
            </span>

          </div>

          <Progress value={96} />

        </div>

        {/* =======================================
            Compliance
        ======================================== */}

        <div>

          <div className="mb-3 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <ClipboardCheck className="h-5 w-5 text-blue-400" />

              <span className="font-medium">
                Compliance
              </span>

            </div>

            <span className="font-bold text-blue-400">
              98%
            </span>

          </div>

          <Progress value={98} />

        </div>

        {/* =======================================
            Framework
        ======================================== */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <FileCheck className="h-5 w-5 text-cyan-400" />

            <span className="font-medium">
              Framework
            </span>

          </div>

          <Badge variant="secondary">
            NIST AI RMF
          </Badge>

        </div>

        {/* =======================================
            AI Models
        ======================================== */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Bot className="h-5 w-5 text-purple-400" />

            <span className="font-medium">
              AI Models
            </span>

          </div>

          <span className="text-lg font-semibold">
            142
          </span>

        </div>

        {/* =======================================
            Critical Risks
        ======================================== */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <TriangleAlert className="h-5 w-5 text-red-400" />

            <span className="font-medium">
              Critical Risks
            </span>

          </div>

          <span className="text-lg font-semibold text-red-400">
            3
          </span>

        </div>

        {/* =======================================
            Status
        ======================================== */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <CircleCheck className="h-5 w-5 text-green-400" />

            <span className="font-medium">
              Status
            </span>

          </div>

          <Badge className="bg-green-600 px-3 py-1 hover:bg-green-600">
            Operational
          </Badge>

        </div>

      </CardContent>

    </Card>
  );
}