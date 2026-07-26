"use client";

import { motion } from "framer-motion";

import CertificationCard from "@/components/certifications/CertificationCard";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Professional Credentials
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Certifications
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Industry-recognized certifications spanning cybersecurity,
            enterprise risk management, AI governance, cloud security,
            and security operations.
          </p>
        </motion.div>

        <div className="mt-20">
          <h3 className="mb-8 text-2xl font-bold text-white">
            Certified
          </h3>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {certifications.certified.map((cert) => (
              <CertificationCard
                key={cert.name}
                certification={cert}
              />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="mb-8 text-2xl font-bold text-white">
            Currently Pursuing
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {certifications.pursuing.map((cert) => (
              <CertificationCard
                key={cert.name}
                certification={cert}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}