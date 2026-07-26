"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BrainCircuit,
  BadgeCheck,
  Lock,
  ArrowRight,
  Download,
} from "lucide-react";

import HeroStats from "@/components/hero/HeroStats";
import FloatingCard from "@/components/hero/FloatingCard";
import AIGovernanceDashboard from "@/components/hero/AIGovernanceDashboard";

const frameworks = [
  "ISO 42001",
  "NIST AI RMF",
  "ISO 27001",
  "COBIT",
  "NIST CSF",
  "Responsible AI",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-28 pb-24 lg:pt-36 lg:pb-32"
    >
      {/* ================= Animated Background ================= */}

      <div className="absolute inset-0 -z-20">

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-150px] top-40 h-[360px] w-[360px] rounded-full bg-indigo-500/20 blur-[120px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[140px]"
        />
      </div>

      {/* ================= Grid Overlay ================= */}

      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* ================= Hero Content ================= */}

      <div className="mx-auto grid max-w-7xl items-center gap-24 px-6 lg:grid-cols-2">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur">
            AI Governance • Technology Risk • Cybersecurity
          </div>

          <h1 className="text-5xl font-black leading-[1.05] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
            Building secure,
            <span className="block text-cyan-400">
              trustworthy AI
            </span>

            <span className="block text-white">
              through governance,
              cybersecurity,
              and technology risk.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            I help organizations design and implement AI governance,
            enterprise technology risk, cybersecurity,
            responsible AI,
            and regulatory compliance frameworks that are secure,
            scalable, and aligned with business objectives.
          </p>

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="/resume/Akilo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-400"
            >
              <Download size={18} />
              Download Resume
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/40 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              View Projects
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Divider */}

          <div className="mt-12 h-px w-full max-w-md bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          {/* Framework Badges */}

          <div className="mt-8 flex flex-wrap gap-3">

            {frameworks.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:text-cyan-300"
              >
                {item}
              </span>
            ))}

          </div>
        </motion.div>
                {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="flex flex-col items-center gap-10 xl:flex-row">

            {/* ================= Dashboard ================= */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <AIGovernanceDashboard />
            </motion.div>

            {/* ================= Image ================= */}

            <div className="relative">

              {/* Animated Glow */}

              <motion.div
                animate={{
                  scale: [1.15, 1.25, 1.15],
                  opacity: [0.45, 0.65, 0.45],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl"
              />

              {/* Profile Image */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: -1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                }}
              >
                <Image
                  src="/images/profile.jpeg"
                  alt="Akilo"
                  width={480}
                  height={480}
                  priority
                  className="relative rounded-3xl border border-white/10 object-cover shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
                />
              </motion.div>

              {/* Floating Cards */}

              <div className="hidden lg:block">

                <FloatingCard
                  icon={<ShieldCheck size={22} />}
                  title="ISO 42001"
                  subtitle="AI Governance"
                  className="-left-40 top-8"
                />

                <FloatingCard
                  icon={<BrainCircuit size={22} />}
                  title="Responsible AI"
                  subtitle="NIST AI RMF"
                  className="-right-40 top-6"
                />

                <FloatingCard
                  icon={<BadgeCheck size={22} />}
                  title="Enterprise GRC"
                  subtitle="Technology Risk"
                  className="-left-40 bottom-10"
                />

                <FloatingCard
                  icon={<Lock size={22} />}
                  title="Cybersecurity"
                  subtitle="ISO 27001"
                  className="-right-40 bottom-14"
                />

              </div>

            </div>

          </div>
        </motion.div>
              </div>
    </section>
  );
}