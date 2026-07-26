"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export default function ExperienceCard({
  company,
  role,
  period,
  location,
  achievements,
  technologies,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {company}
          </h3>

          <p className="mt-1 text-cyan-400">
            {role}
          </p>

          <p className="mt-1 text-sm text-slate-400">
            {location}
          </p>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <Calendar size={18} />
          {period}
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {achievements.map((item) => (
          <div
            key={item}
            className="flex gap-3"
          >
            <Briefcase
              size={18}
              className="mt-1 text-cyan-400"
            />

            <p className="text-slate-300">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}