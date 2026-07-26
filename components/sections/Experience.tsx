"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Building2,
  BadgeCheck,
} from "lucide-react";

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
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Professional Experience
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            12+ Years of Technology Risk
            <span className="block text-cyan-400">
              AI Governance & Information Security
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Delivering measurable cybersecurity, governance,
            compliance and enterprise risk outcomes across
            regulated healthcare and financial institutions.
          </p>
        </motion.div>

        {/* Timeline */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-gradient-to-b from-cyan-400 via-slate-700 to-transparent md:block" />

          {experience.map((job) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              variants={item}
              className="relative mb-12 md:pl-16"
            >
              {/* Timeline Dot */}

              <div className="absolute left-2 top-10 hidden h-6 w-6 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] md:block" />

              {/* Card */}

              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]">

                {/* Header */}

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                  <div>

                    <div className="mb-3 flex items-center gap-2 text-cyan-400">
                      <BriefcaseBusiness className="h-5 w-5" />

                      <span className="font-semibold">
                        {job.company}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold">
                      {job.role}
                    </h3>

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

                    {/* New badges */}

                    <div className="mt-5 flex flex-wrap gap-3">

                      <Badge className="bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        <Building2 className="mr-2 h-3 w-3" />
                        {job.industry}
                      </Badge>

                      <Badge className="bg-slate-800">
                        {job.employmentType}
                      </Badge>

                    </div>

                  </div>

                  {/* Right Side */}

                  <div className="flex flex-col gap-3">

                    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-6 py-4 text-center">

                      <p className="text-xs uppercase tracking-widest text-cyan-300">
                        Career Stage
                      </p>

                      <p className="mt-2 text-lg font-bold">
                        {job.stage}
                      </p>

                    </div>

                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-4">

                      <div className="flex items-center justify-center gap-2 text-emerald-300">

                        <TrendingUp className="h-4 w-4" />

                        <span className="font-semibold">
                          {job.metric}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Achievements */}

                <div className="mt-10">

                  <h4 className="mb-5 flex items-center gap-2 text-lg font-semibold">

                    <BadgeCheck className="h-5 w-5 text-cyan-400" />

                    Key Achievements

                  </h4>

                  <div className="grid gap-4">

                    {job.highlights.map((highlight) => (

                      <div
                        key={highlight}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />

                        <p className="leading-7 text-slate-300">
                          {highlight}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

                {/* Technologies */}

                <div className="mt-10">

                  <h4 className="mb-5 font-semibold">
                    Technologies & Expertise
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {job.technologies.map((tech) => (

                      <Badge
                        key={tech}
                        className="border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300 transition hover:scale-105"
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