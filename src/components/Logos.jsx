// src/components/Logos.jsx
import React from "react";
import { motion } from "framer-motion";

const asset = (file) => `${import.meta.env.BASE_URL}images/${file}`;

const LOGOS = [
  { src: asset("upenn.webp"),   alt: "University of Pennsylvania (Wharton)" },
  { src: asset("nyu.webp"),     alt: "New York University" },
  { src: asset("mit.webp"),     alt: "Massachusetts Institute of Technology" },
  { src: asset("harvard.webp"), alt: "Harvard University" },
  { src: asset("bc.webp"),      alt: "Boston College" },
  { src: asset("bu.webp"),      alt: "Boston University" },
  { src: asset("ucla.webp"),    alt: "University of California, Los Angeles" },
  { src: asset("imperial.webp"),alt: "Imperial College London" },
  { src: asset("ucl.webp"),     alt: "University College London" },
  { src: asset("lse.webp"),     alt: "London School of Economics" },
];

const SPEED = 30; // bigger = slower

export default function Logos() {
  const items = [...LOGOS, ...LOGOS]; // duplicate for seamless wrap

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-12 sm:py-14">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Guidance from mentors at world-class universities
        </h2>
      </div>

      <div className="relative mt-6 overflow-hidden">
        {/* Side fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        <motion.div
          className="flex w-max items-center gap-5 sm:gap-6 will-change-transform"
          initial={{ x: "-50%" }}
          animate={{ x: ["-50%", "0%"] }} 
        
          transition={{ duration: SPEED, ease: "linear", repeat: Infinity }}
        >
          {items.map((logo, i) => (
            <img
              key={`${logo.src}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-8 sm:h-10 w-auto object-contain select-none"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
