import React from "react";

/**
 * Success metrics — no boxes; clean numbers with accent gradient.
 */
const metrics = [
  { label: "Cohorts", value: "6" },
  { label: "Startups launched", value: "20+" },
  { label: "Students in community", value: "500+" },
];

export default function Success() {
  return (
    <section id="proof" className="anchor-offset py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Proven Offline.  Now Available Online.</h2>
          <p className="mt-3 text-white/70">We’re bringing the momentum of our in-person programs to you wherever you are.</p>
        </div>

        {/* Row of counters */}
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-5xl font-extrabold leading-none text-accent-grad">{m.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wide text-white/60">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
