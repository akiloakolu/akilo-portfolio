"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24"
    >
      <div className="container mx-auto px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Enterprise AI Governance Portfolio
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
            A curated portfolio of enterprise solutions demonstrating
            AI Governance, Technology Risk, Cybersecurity,
            Cloud Security, Compliance, and Secure Software Engineering.
          </p>
        </motion.div>

        {/* Featured Case Studies */}

        <div className="mt-20">

          {projects.map((project, index) => {

            const Preview = project.preview;

            return (

              <ProjectCard
                key={project.title}

                title={project.title}

                subtitle={project.subtitle}

                challenge={project.challenge}

                solution={project.solution}

                impact={project.impact}

                technologies={project.technologies}

                github={project.github}

                demo={project.demo}

                preview={<Preview />}

                reverse={index % 2 === 1}
              />

            );

          })}

        </div>
                {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-24"
        >
          <Card className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-10">

            <div className="mx-auto max-w-4xl text-center">

              <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Enterprise Engineering Philosophy
              </p>

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                Building Secure AI Systems That Organizations Can Trust
              </h3>

              <p className="mt-6 leading-8 text-slate-300">
                Every project in this portfolio is designed using enterprise
                architecture principles and governance-first thinking. My work
                combines AI Governance, Technology Risk Management,
                Cybersecurity, Cloud Security, Compliance, and Secure Software
                Engineering to help organizations adopt emerging technologies
                responsibly while maintaining resilience, regulatory compliance,
                and business trust.
              </p>

            </div>

          </Card>

        </motion.div>

      </div>

    </section>
  );
}