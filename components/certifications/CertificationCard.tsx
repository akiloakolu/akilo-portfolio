"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Clock3 } from "lucide-react";

interface Props {
  certification: {
    name: string;
    fullName: string;
    issuer: string;
    status: string;
    logo: string;
  };
}

export default function CertificationCard({ certification }: Props) {
  const certified = certification.status === "Certified";

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-8 backdrop-blur-xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-cyan-500/20"
    >
      <div className="flex items-center justify-between">

        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 shadow-lg shadow-cyan-500/5">

  <Image
    src={certification.logo}
    alt={certification.name}
    width={70}
    height={70}
    className="object-contain"
  />

</div>

        <span
          className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
            certified
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-cyan-500/15 text-cyan-400"
          }`}
        >
          {certified ? (
            <CheckCircle2 size={14} />
          ) : (
            <Clock3 size={14} />
          )}

          {certification.status}
        </span>
      </div>

      <h3 className="mt-6 text-3xl font-black tracking-tight text-white">
        {certification.name}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {certification.fullName}
      </p>

      <div className="mt-6 text-base font-semibold tracking-wide text-cyan-300">
        {certification.issuer}
      </div>
    </motion.div>
  );
}