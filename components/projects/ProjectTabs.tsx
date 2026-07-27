"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectTabsProps {
  projects: Project[];
  selectedProject: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectTabs({
  projects,
  selectedProject,
  onSelect,
}: ProjectTabsProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {projects.map((project) => {
        const active = project.id === selectedProject.id;

        return (
          <motion.button
            key={project.id}
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => onSelect(project)}
            className={`relative overflow-hidden rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
              active
                ? "border-emerald-500 bg-emerald-500 text-black shadow-lg shadow-emerald-500/25"
                : "border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:border-emerald-400 hover:text-white"
            }`}
          >
            {active && (
              <motion.div
                layoutId="activeProjectTab"
                className="absolute inset-0 rounded-full bg-emerald-500"
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 35,
                }}
              />
            )}

            <span className="relative z-10">
              {project.title}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}