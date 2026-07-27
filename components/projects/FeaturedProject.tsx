"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";

import { Project } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";
import ProjectValue from "./ProjectValue";
import ProjectTech from "./ProjectTech";
import ArchitectureFlow from "./ArchitectureFlow";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur"
    >
      <div className="grid gap-12 p-8 lg:grid-cols-2 lg:p-12">
        {/* ================= Left Column ================= */}
        <div className="space-y-8">
          <span className="inline-flex w-fit rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            {project.category}
          </span>

          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white">
              {project.title}
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              {project.tagline}
            </p>
          </div>

          {/* Business Challenge */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
              Business Challenge
            </h3>

            <p className="leading-7 text-zinc-400">
              {project.challenge}
            </p>
          </section>

          {/* Solution */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
              Solution
            </h3>

            <p className="leading-7 text-zinc-400">
              {project.solution}
            </p>
          </section>

          {/* Business Value */}
          <section className="space-y-4">
  <h3 className="text-lg font-semibold text-white">
    Solution Architecture
  </h3>

  <ArchitectureFlow
    steps={project.architecture}
  />
</section>

          {/* Technology Stack */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Technology Stack
            </h3>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-zinc-500">
              ProjectTech component coming next...
            </div>
          </section>

          {/* Architecture */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Architecture
            </h3>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 text-zinc-500">
              ArchitectureFlow component coming next...
            </div>
          </section>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                <GitBranch size={18} />
                Source Code
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

        {/* ================= Right Column ================= */}
        <div className="flex items-center justify-center">
          <ProjectPreview
            title={project.title}
            category={project.category}
          />
        </div>
      </div>
    </motion.article>
  );
}