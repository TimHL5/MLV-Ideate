import React from "react";
import { motion } from "framer-motion";
import { speakers } from "../data/speakers.js";

const card = {
  hidden:  { opacity: 0, y: 20 },
  show:    { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Speakers() {
  return (
    <section id="speakers" className="anchor-offset py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Learn From the Best</h2>
          <p className="mt-3 text-white/70">MLV students have learned from founders, executives, and industry experts including:</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((sp) => (
            <motion.div
              key={sp.name}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }} // re-run each time ~25% visible
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="mb-3 flex items-center gap-3">
                <img src={sp.avatar} alt={`${sp.name} headshot`} className="h-11 w-11 shrink-0 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-white/80">{sp.name}</div>
                  <div className="mt-0.5 text-xs text-white/60">{sp.title}</div>
                </div>
              </div>
              <p className="text-sm text-white/75">{sp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
