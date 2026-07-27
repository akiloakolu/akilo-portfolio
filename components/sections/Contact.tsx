"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Briefcase,
  GitBranch,
  MapPin,
  Download,
  ArrowRight,
} from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "akilo.a.ak@gmail.com",
    href: "mailto:akilo.a.ak@gmail.com",
    icon: Mail,
  },
  {
    title: "Linkedin",
    value: "linkedin.com/in/akilo",
    href: "https://linkedin.com/in/akilo",
    icon: Briefcase,
  },
  {
    title: "GitHub",
    value: "github.com/akiloakolu",
    href: "https://github.com/akiloakolu",
    icon: GitBranch,
  },
  {
    title: "Location",
    value: "Toronto, Canada",
    href: "#",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-slate-900 py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's Build Something Secure
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Whether you're hiring an AI Governance Lead, Technology Risk
            Professional, or Cybersecurity Specialist, I'd love to discuss how I
            can help your organization build secure, responsible AI and resilient
            security programs.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {contacts.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-slate-700 bg-slate-800/60 p-6 backdrop-blur transition-all hover:border-cyan-400"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-slate-400">
                      {item.title}
                    </p>

                    <p className="mt-1 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Ready to collaborate?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            I'm currently open to opportunities in AI Governance,
            Cybersecurity, Technology Risk, Cloud Security, GRC, and Security
            Architecture.
          </p>

          <a
            href="/AkiloA_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-400"
          >
            <Download className="h-5 w-5" />
            Download Resume (PDF)
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}