"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Briefcase,
  GitBranch,
  MapPin,
} from "lucide-react";

const navigation = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Technology", href: "#technology" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "Email",
    value: "akilo.a.ak@gmail.com",
    href: "mailto:akilo.a.ak@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/akilo",
    href: "https://linkedin.com/in/akilo",
    icon: Briefcase,
  },
  {
    label: "GitHub",
    value: "github.com/akiloakolu",
    href: "https://github.com/akiloakolu",
    icon: GitBranch,
  },
  {
    label: "Location",
    value: "Toronto, Canada",
    href: "#",
    icon: MapPin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">
              AKILO
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Building secure, responsible AI and resilient technology risk
              programs for regulated enterprises.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 font-semibold text-white">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-5 font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 transition hover:text-cyan-400"
                  >
                    <Icon className="h-4 w-4" />

                    <span>{item.value}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

            <p>
              © {new Date().getFullYear()} Akilo A. All rights reserved.
            </p>

            <p>
              Built with{" "}
              <span className="text-cyan-400">
                Next.js 15
              </span>{" "}
              • React 19 • TypeScript • Tailwind CSS
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}