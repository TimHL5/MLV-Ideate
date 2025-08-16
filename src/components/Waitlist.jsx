import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const reasons = [
  { title: "Exclusive Pricing", text: "Founding-member rate for early cohorts." },
  { title: "Priority Mentor Matching", text: "Get paired before public launch." },
  { title: "Early Access", text: "Be first to our resource library and events." },
];

// Optional: drop your real Typeform/URL here
const WAITLIST_URL = "#waitlist-form"; // or "https://your-typeform.com/..."

export default function Reasons() {
  return (
    // ↓ smaller section padding = less gap to neighbors
    <section id="waitlist" className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Join the Waitlist Now
          </h2>
        </div>

        {/* ↓ slightly tighter spacing to the cards */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="gradient-border">
              <div className="inner p-5">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {r.title}
                </div>
                <p className="mt-2 text-sm text-white/75">{r.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7 flex justify-center flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-400 px-5 py-2.5 text-base sm:text-m font-medium text-black leading-none hover:opacity-90"
                as="a"
                target="_blank"
                href="https://forms.gle/DrHQu6CwdJqtQU1R9">
                  Join the waitlist
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
      </div>
    </section>
  );
}
