"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles, Target } from "lucide-react";
import { ReactNode } from "react";
console.log({
  motion,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Target,
});

interface ProjectCardProps {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  github: string;
  demo: string;
  preview: ReactNode;
  reverse?: boolean;
}

export default function ProjectCard({
  title,
  subtitle,
  challenge,
  solution,
  impact,
  technologies,
  github,
  demo,
  preview,
  reverse = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-24 grid gap-14 items-center lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-400">
          Enterprise Case Study
        </p>

        <h3 className="text-4xl font-bold text-white">{title}</h3>

        <p className="mt-3 text-xl text-slate-300">{subtitle}</p>

        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-3 flex items-center gap-2">
            <Target className="h-5 w-5 text-red-400" />
            <h4 className="font-semibold text-white">Challenge</h4>
          </div>
          <p className="leading-8 text-slate-400">{challenge}</p>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-cyan-400" />
            <h4 className="font-semibold text-white">Solution</h4>
          </div>
          <p className="leading-8 text-slate-400">{solution}</p>
        </section>

        <div className="mt-8">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            <h4 className="font-semibold text-white">Business Impact</h4>
          </div>

          <div className="flex flex-wrap gap-3">
            {impact.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h4 className="mb-3 font-semibold text-white">Technology Stack</h4>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300 hover:border-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-white hover:border-cyan-400"
          >
            <span className="text-lg">🔗</span>
            Source Code
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 hover:bg-cyan-400"
          >
            Live Demo
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-2xl" />
        <div className="relative rounded-3xl border border-slate-800 bg-slate-950 p-3">
          {preview}
        </div>
      </motion.div>
    </motion.article>
  );
}