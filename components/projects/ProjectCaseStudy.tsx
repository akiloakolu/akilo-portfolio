"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import ProjectTech from "./ProjectTech";
import ProjectValue from "./ProjectValue";
import ArchitectureFlow from "./ArchitectureFlow";

interface ProjectCaseStudyProps {
  project: Project;
  reverse?: boolean;
}

export default function ProjectCaseStudy({
  project,
  reverse = false,
}: ProjectCaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid gap-12 items-center lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Preview */}
      <div>
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-zinc-800 px-6 py-4">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="flex aspect-video items-center justify-center">
            <div className="text-center">
              <p className="text-xl font-semibold text-white">
                {project.title}
              </p>

              <p className="mt-3 text-sm text-zinc-500">
                {project.image}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
          {project.category}
        </span>

        <div>
          <h3 className="text-3xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-lg text-zinc-400">
            {project.tagline}
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-white">
            Challenge
          </h4>

          <p className="text-zinc-400">
            {project.challenge}
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-white">
            Solution
          </h4>

          <p className="text-zinc-400">
            {project.solution}
          </p>
        </div>

        <ProjectValue values={project.businessValue} />

        <ProjectTech technologies={project.technologies} />

        <ArchitectureFlow architecture={project.architecture} />

        <div className="flex flex-wrap gap-4 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              <GitBranch size={18} />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 font-medium text-white transition hover:bg-zinc-800"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}