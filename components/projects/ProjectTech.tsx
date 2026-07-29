"use client";

import { motion } from "framer-motion";

interface ProjectTechProps {
  technologies: string[];
}

export default function ProjectTech({
  technologies,
}: ProjectTechProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.3,
          }}
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          className="transform-gpu rounded-xl border border-zinc-700 bg-zinc-900/60 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-300"
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
}