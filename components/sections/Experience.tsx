"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-cyan-400 font-semibold tracking-[0.3em] uppercase">
            Professional Experience
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            12+ Years of Technology Risk,
            <span className="block text-cyan-400">
              AI Governance & Security Leadership
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-300">
            Delivering measurable security, governance, compliance and
            enterprise risk outcomes across regulated healthcare and financial
            services organizations.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-slate-700 md:block" />

          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              variants={item}
              className="relative mb-10 md:pl-16"
            >
              <div className="absolute left-2 top-7 hidden h-6 w-6 rounded-full border-4 border-slate-950 bg-cyan-400 md:block" />

              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]">
                <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-2 text-cyan-400">
                      <BriefcaseBusiness className="h-5 w-5" />
                      <span className="font-semibold">{job.company}</span>
                    </div>

                    <h3 className="text-2xl font-bold">{job.role}</h3>

                    <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {job.period}
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-cyan-500/10 px-5 py-3 text-center">
                    <p className="text-xs uppercase tracking-widest text-cyan-300">
                      Career Stage
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      #{experience.length - index}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-semibold">
                    Key Achievements
                  </h4>

                  <div className="grid gap-3">
                    {job.highlights.map((highlight: string) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-400" />
                        <p className="text-slate-300">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-semibold">
                    Technologies & Expertise
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {job.technologies.map((tech: string) => (
                      <Badge
                        key={tech}
                        className="border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-cyan-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}