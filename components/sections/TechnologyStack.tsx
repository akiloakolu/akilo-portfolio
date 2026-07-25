"use client";

import { motion } from "framer-motion";

import { technologies } from "@/data/technologies";

import { Card } from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

export default function TechnologyStack() {
  return (
    <section
      id="technology"
      className="py-24 bg-slate-950"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 font-semibold tracking-widest uppercase">

            Technologies

          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">

            Enterprise Technology Stack

          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-400 leading-8">

            AI Governance, Cybersecurity, Cloud Security,
            Enterprise Risk Management and Security Operations
            technologies used across modern enterprise
            environments.

          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {technologies.map((tech, index) => {

            const Icon = tech.icon;

            return (

              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .05,
                }}
              >

                <Card className="group h-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20">

                  <div className={`h-2 bg-gradient-to-r ${tech.color}`} />

                  <div className="space-y-6 p-7">

                    <div className="flex items-center justify-between">

                      <div
                        className={`rounded-xl bg-gradient-to-r ${tech.color} p-4`}
                      >

                        <Icon className="h-8 w-8 text-white" />

                      </div>

                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">

                        {tech.category}

                      </span>

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-white">

                        {tech.title}

                      </h3>

                      <p className="mt-3 leading-7 text-slate-400">

                        {tech.description}

                      </p>

                    </div>

                    <div>

                      <div className="mb-3 flex justify-between">

                        <span className="text-sm text-slate-400">

                          Proficiency

                        </span>

                        <span className="font-semibold text-cyan-400">

                          {tech.level}%

                        </span>

                      </div>

                      <Progress value={tech.level} />
                                          </div>

                  </div>

                </Card>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid gap-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 md:grid-cols-4"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-cyan-400">12+</h3>
            <p className="mt-2 text-slate-400">
              Enterprise Technologies
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-green-400">6+</h3>
            <p className="mt-2 text-slate-400">
              Security Frameworks
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-purple-400">5+</h3>
            <p className="mt-2 text-slate-400">
              AI Governance Domains
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-yellow-400">100%</h3>
            <p className="mt-2 text-slate-400">
              Continuous Learning
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}