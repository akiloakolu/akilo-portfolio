"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { projects, Project } from "@/data/projects";

import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import ProjectTabs from "@/components/projects/ProjectTabs";

export default function Projects() {
  const defaultProject =
    projects.find((project) => project.featured) ??
    projects[0];

  const [selectedProject, setSelectedProject] =
    useState<Project>(defaultProject);

  const supportingProjects = projects.filter(
    (project) => project.id !== selectedProject.id
  );

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32"
    >
      <div className="container mx-auto max-w-7xl px-6">
        {/* ========================= */}
        {/* Section Heading */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
            Featured Work
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Enterprise AI Governance & Cybersecurity Projects
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A portfolio of enterprise-focused solutions spanning
            AI governance, technology risk, cybersecurity
            operations, cloud security, and executive reporting.
          </p>
        </motion.div>

        {/* ========================= */}
        {/* Project Navigation */}
        {/* ========================= */}

        <ProjectTabs
          projects={projects}
          selectedProject={selectedProject}
          onSelect={setSelectedProject}
        />

        {/* ========================= */}
        {/* Featured Project */}
        {/* ========================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.45,
            }}
            className="mb-28"
          >
            <FeaturedProject
              project={selectedProject}
            />
          </motion.div>
        </AnimatePresence>

        {/* ========================= */}
        {/* More Case Studies */}
        {/* ========================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            More Case Studies
          </h3>

          <p className="mt-3 text-zinc-400">
            Additional enterprise security and governance
            initiatives.
          </p>
        </motion.div>

        <div className="space-y-28">
          {supportingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <ProjectCaseStudy
                project={project}
                reverse={index % 2 === 1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}