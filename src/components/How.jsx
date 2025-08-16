import React from "react";
import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Fast Onboarding", text: "Kick off with a concise, two-week sprint to learn startup fundamentals, validate your idea, and map your first plan of action." },
  { step: "02", title: "Mentor-Led Sprints", text: "Meet weekly with your dedicated college mentor to refine your product, launch faster, and grow strategically." },
  { step: "03", title: "Community & Resources", text: "Stay accountable with hot seats, exclusive events, and a vibrant network of like-minded student founders." }
];

// parent controls stagger; child controls the motion
const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 } // left→right because of render order
  }
};

const item = {
  hidden: { opacity: 0, x: -24 },         // start left & transparent
  show:   { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function How() {
  return (
    <section id="how" className="anchor-offset py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            How It Works: Your Startup in 3 Steps
          </h2>
          <p className="mt-3 text-white/70">
            Work 1:1 with a mentor from a top university, follow a proven playbook, 
            and build alongside a global community of young founders.
          </p>
        </div>

        {/* Step cards */}
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-3"
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}  // replay on every re-entry
        >
          {steps.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="rounded-xl p-[1px] bg-gradient-to-br from-[#6AC670] to-[#F2CF07]"
            >
              <div className="h-full rounded-xl bg-black/90 p-6">
                <div className="text-sm font-mono text-white/50">{s.step}</div>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/75">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
