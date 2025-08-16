import React, { useRef, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const reasons = [
  { title: "Exclusive Pricing", text: "Founding-member rate for early cohorts." },
  { title: "Priority Mentor Matching", text: "Get paired before public launch." },
  { title: "Early Access", text: "Be first to our resource library and events." },
];

// === Your real IDs ===
const FORM_ID     = "1FAIpQLSeI_mcW5yhKJE3PRjjyyWU1WHL0A-DJfu8sIkq5tqcH-PZGYQ";
const ENTRY_NAME  = "entry.1323187269";   // Name (your question)
const ENTRY_EMAIL = "entry.1230705686";   // Email (your question)
// ======================

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    // iframe loads once empty on mount — only show success after a submit
    if (didSubmit) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join the Waitlist</h2>
          <p className="mt-2 text-white/70">It takes less than a minute—drop your email and we’ll keep you posted.</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="h-4 w-4 text-lime-400" /> {r.title}
              </div>
              <p className="mt-2 text-sm text-white/75">{r.text}</p>
            </div>
          ))}
        </div>

        <div id="waitlist-form" className="mx-auto mt-8 w-full max-w-xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            {submitted ? (
              <div className="text-center">
                <p className="text-lg font-semibold">Thanks! You’re on the list. 🎉</p>
                <p className="mt-2 text-sm text-white/70">We’ll send early access, exclusive resources, and updates.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-white">Get updates</h3>
                <p className="mt-1 text-sm text-white/70">No application—just your details below.</p>

                <form
                  action={`https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`}
                  method="POST"
                  target="hidden_iframe"
                  onSubmit={() => setDidSubmit(true)}
                  className="mt-4 space-y-3"
                >
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      id="name"
                      name={ENTRY_NAME}
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-lime-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      id="email"
                      name={ENTRY_EMAIL}         // your custom email question
                      type="email"
                      required
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-lime-400"
                    />
                    {/* Also send Google's built-in email field (ignored if Collect is OFF) */}
                    <input type="hidden" name="emailAddress" value={email} />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-400 to-yellow-400 px-5 py-2.5 text-base font-medium text-black leading-none hover:opacity-90"
                  >
                    Join the waitlist
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Hidden target keeps users on the page; we use onLoad to mark success */}
          <iframe
            name="hidden_iframe"
            ref={iframeRef}
            onLoad={handleIframeLoad}
            className="hidden"
            title="hidden"
          />
        </div>
      </div>
    </section>
  );
}
