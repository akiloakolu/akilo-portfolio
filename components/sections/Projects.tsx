"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitHub,
  Star,
  BriefcaseBusiness,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { projects } from "@/data/projects";

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

            A selection of enterprise-focused projects demonstrating
            AI Governance, Technology Risk Management,
            Cybersecurity, Cloud Security and secure software engineering.

          </p>

        </motion.div>

        {/* Project Cards */}

        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >

              <Card className="group relative h-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20">

                {project.featured && (

                  <div className="absolute right-5 top-5">

                    <Badge className="bg-cyan-600 hover:bg-cyan-600">

                      <Star className="mr-1 h-3 w-3" />

                      Featured

                    </Badge>

                  </div>

                )}

                <div className="space-y-6 p-8">

                  <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-cyan-500/10 p-4">

                      <BriefcaseBusiness className="h-8 w-8 text-cyan-400" />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-white">

                        {project.title}

                      </h3>

                      <p className="mt-1 text-slate-400">

                        {project.subtitle}

                      </p>

                    </div>

                  </div>

                  <p className="leading-8 text-slate-300">

                    {project.description}

                  </p>

                  <div>

                    <h4 className="mb-4 font-semibold text-white">

                      Technologies

                    </h4>

                    <div className="flex flex-wrap gap-3">

                      {project.technologies.map((tech) => (

                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-full border border-slate-700 bg-slate-800 px-3 py-2 text-slate-300"
                        >

                          {tech}

                        </Badge>

                      ))}

                    </div>

                  </div>

                  <div className="flex flex-wrap gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <Button
                        variant="outline"
                        className="border-slate-700 bg-slate-900 text-white hover:border-cyan-500 hover:bg-slate-800"
                      >

                        <GitHub className="mr-2 h-4 w-4" />

                        GitHub

                      </Button>

                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >

                      <Button
                        className="bg-cyan-600 text-white hover:bg-cyan-700"
                      >

                        Live Demo

                        <ArrowUpRight className="ml-2 h-4 w-4" />

                      </Button>

                    </a>

                  </div>

                  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                    <h4 className="mb-3 font-semibold text-cyan-400">

                      Business Impact

                    </h4>

                    <p className="leading-7 text-slate-300">
                                              Designed using enterprise architecture principles with a
                      strong emphasis on governance, security, scalability,
                      compliance, automation, and executive decision support.
                      These projects demonstrate the ability to bridge
                      cybersecurity, AI governance, technology risk, and cloud
                      engineering into practical business solutions.

                    </p>

                  </div>

                </div>

              </Card>

            </motion.div>

          ))}

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
          className="mt-20"
        >

          <Card className="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-10">

            <div className="mx-auto max-w-4xl text-center">

              <h3 className="text-3xl font-bold text-white">

                From Concept to Enterprise Implementation

              </h3>

              <p className="mt-6 leading-8 text-slate-300">

                Every project in this portfolio reflects my commitment to
                designing secure, scalable, and governance-driven solutions.
                By combining AI Governance, Technology Risk Management,
                Cybersecurity, Cloud Security, and enterprise architecture,
                I help organizations adopt emerging technologies responsibly
                while maintaining compliance, resilience, and trust.

              </p>

            </div>

          </Card>

        </motion.div>

      </div>

    </section>

  );

}