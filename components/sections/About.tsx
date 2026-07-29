"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-16 lg:grid-cols-2 lg:items-center"
        >

          {/* Left Column */}

          <div>

            <Badge className="mb-6 bg-cyan-600 hover:bg-cyan-600">

              {aboutData.badge}

            </Badge>

            <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">

              {aboutData.title}

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">

              {aboutData.description}

            </p>

            <div className="mt-8 space-y-6">

              {aboutData.paragraphs.map((paragraph) => (

                <p
                  key={paragraph}
                  className="leading-8 text-slate-400"
                >

                  {paragraph}

                </p>

              ))}

            </div>

          </div>

          {/* Right Column */}

          <Card className="group transform-gpu overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">

            <h3 className="mb-8 text-2xl font-semibold text-white">

              Core Expertise

            </h3>

            <div className="grid gap-5 sm:grid-cols-2">

              {aboutData.highlights.map((item) => (

                <motion.div
                  key={item}
                  whileHover={{
                      x: 6,
                  }}
                  transition={{
                  duration: 0.25,
                  }}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />

                  <span className="text-slate-300">

                    {item}

                  </span>

                </motion.div>

              ))}

            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
                              {aboutData.stats.map((stat) => (

                <motion.div
                  key={stat.label}
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group transform-gpu rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800/80"
                >

                  <h4 className="text-4xl font-bold text-cyan-400">

                    {stat.value}

                  </h4>

                  <p className="mt-3 text-sm text-slate-400">

                    {stat.label}

                  </p>

                </motion.div>

              ))}

            </div>

          </Card>

        </motion.div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-20 max-w-5xl"
        >

          <Card className="group transform-gpu overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-10 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]">

            <div className="text-center">

              <h3 className="text-3xl font-bold text-white">

                Building Responsible AI for Enterprise

              </h3>

              <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-300">

                My mission is to enable organizations to adopt and govern Artificial Intelligence securely, responsibly, and at enterprise scale by integrating AI governance, technology risk management, cybersecurity, cloud security, and globally recognized frameworks such as the NIST AI Risk Management Framework (AI RMF), ISO/IEC 42001, and the NIST Cybersecurity Framework into practical, business-driven solutions.

              </p>

            </div>

          </Card>

        </motion.div>

      </div>

    </section>

  );

}