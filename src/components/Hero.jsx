import React from "react";
import { motion } from "framer-motion";
import { ArrowRight,CheckCircle2 } from "lucide-react";

// Build the right path for dev and for deploys under a subpath
const asset = (file) => `${import.meta.env.BASE_URL}images/${file}`;

// ------------------
// Gradient Border Card
// ------------------
// Gradient Border Card — no bleed on multi-line content
const GradientCard = ({ children, className = "" }) => (
  <div
    className={[
      "relative rounded-2xl p-[1.5px] overflow-hidden", // ⬅️ overflow-hidden
      "bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(160,160,160,0.3))]",
      "hover:bg-[linear-gradient(135deg,#84cc16,#eab308)]",
      className,
    ].join(" ")}
  >
    <div className="rounded-[inherit] bg-black text-white h-full"> {/* ⬅️ inherit radius */}
      {children}
    </div>
  </div>
);


// ------------------
// Outcome Item
// ------------------
// Outcome Item — icon + text side-by-side, vertically centered
const OutcomeItem = ({ outcome }) => (
  <GradientCard className="group">
    <div className="flex items-center gap-3 rounded-2xl px-6 py-5 transition-colors duration-300 hover:bg-black/20">
      <CheckCircle2
        className="h-5 w-5 text-neutral-500 transition-colors duration-300 group-hover:text-lime-400"
        aria-hidden="true"
      />
      <div className="text-sm leading-tight">
        <div className="font-medium">{outcome.title}</div>
        {outcome.caption && (
          <div className="mt-1 text-xs text-neutral-400">{outcome.caption}</div>
        )}
      </div>
    </div>
  </GradientCard>
);



// ------------------
// Infinite 3-Column Flow Gallery (no overlap)
// ------------------

// Fixed image sets per column
const COL1 = [
  { src: asset("mlv-1.JPG"), alt: "MLV group 1" },
  { src: asset("mlv-2.JPG"), alt: "MLV group 2" },
];
const COL2 = [
  { src: asset("mlv-3.JPG"), alt: "MLV group 3" },
  { src: asset("mlv-4.JPG"), alt: "MLV group 4" },
];
const COL3 = [
  { src: asset("mlv-5.JPG"), alt: "MLV group 5" },
  { src: asset("mlv-6.JPG"), alt: "MLV group 6" },
];

function Column({ items, direction = "up", speed = 120, className = "" }) {
  // duplicate for seamless loop but keep the same images per column
  const doubled = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex flex-col"
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((img, i) => (
          <div key={`${img.src}-${i}`} className="p-2">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-56 md:h-64 object-cover rounded-2xl border border-white/10"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function FlowColumns() {
  const SPEED = 30; // bigger = slower
  const MOBILE_ITEMS = [...COL1, ...COL2, ...COL3]; // one mixed column on mobile

  return (
    <div className="relative mx-auto mt-10 w-full max-w-6xl">
      {/* strong fade top/bottom (responsive height) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 md:h-40 bg-gradient-to-b from-black/95 via-black/70 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-40 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-10" />

      {/* Mobile: ONE flowing column */}
      <div className="md:hidden relative h-[28rem]">
        <Column items={MOBILE_ITEMS} direction="up" speed={SPEED} className="h-full" />
      </div>

      {/* Desktop & up: THREE flowing columns */}
      <div className="hidden md:grid grid-cols-3 gap-4 h-[30rem] md:h-[36rem]">
        {/* Left column */}
        <Column items={COL1} direction="up" speed={SPEED} className="h-full" />
        {/* Middle column */}
        <Column items={COL2} direction="down" speed={SPEED} className="h-full" />
        {/* Right column */}
        <Column items={COL3} direction="up" speed={SPEED} className="h-full" />
      </div>
    </div>
  );
}


// ------------------
// Hero
// ------------------

const outcomes = [
  { title: "Launch a real startup" },
  { title: "Build practical, career-ready skills" },
  { title: "Stand out in college admissions" },
];

export default function Hero() {
  return (
    <section id="how" className="relative mx-auto max-w-6xl px-6 pt-20 sm:pt-24 text-white">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl leading-tight">
        Build Your First Real Startup
        <span className="block bg-gradient-to-r from-lime-400 to-yellow-400 bg-clip-text text-transparent">
          From Anywhere
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-base text-neutral-300">
        Online platform offering personal mentorship, expert guidance, and global
        community to help you make your first dollar.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-400 px-5 py-2.5 text-base sm:text-base font-medium text-black leading-none hover:opacity-90"
        href="https://forms.gle/DrHQu6CwdJqtQU1R9"
        target="_blank">
          Join the waitlist
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {outcomes.map((o) => (
          <OutcomeItem key={o.title} outcome={o} />
        ))}
      </div>

      <FlowColumns />
    </section>
  );
}
