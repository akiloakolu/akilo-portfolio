"use client";

import { motion } from "framer-motion";
import ImpactCard from "@/components/impact/ImpactCard";
import { impactCards } from "@/data/impact";

export default function ExecutiveImpact() {
  return (
    <section
      id="executive-impact"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
  duration: 0.7,
  ease: "easeOut",
}}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Executive Impact
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Delivering Measurable Results
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Helping organizations strengthen AI governance, cybersecurity,
            enterprise risk management, and cloud security through practical,
            risk-informed solutions that align security with business objectives.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {impactCards.map((card) => (
            <ImpactCard
              key={card.title}
              card={card}
            />
          ))}
        </div>

      </div>
    </section>
  );
}