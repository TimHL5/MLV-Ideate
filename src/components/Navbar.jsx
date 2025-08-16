import React, { useEffect, useState } from "react";
import Button from "./ui/Button.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none sticky top-3 z-50">
      <div
        className={[
          "pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6",
          "rounded-2xl border backdrop-blur",
          scrolled
            ? "border-white/10 bg-white/10 shadow-glow"
            : "border-white/0 bg-black/40",
          "transition-colors duration-200",
        ].join(" ")}
      >
        {/* Brand */}
        <a href="#" className="group inline-flex items-center gap-2 py-3">
          {/* Logo */}
          <img
            src="/images/logo-gradient.png"
            alt="MLV IDEATE Logo"
            className="h-7 w-auto select-none"
            draggable="false"
          />
                <span
                className="font-semibold tracking-wide text-white/90 group-hover:text-white"
                style={{
                  fontSize: "1.5rem", 
                  lineHeight: "1.5rem", 
                  height: "1.5rem", 
                  display: "flex",
                  alignItems: "center",
                }}
                >
                MLV Ideate
                </span>
              </a>

              {/* Nav Links */}
        <nav className="hidden gap-6 md:flex">
          <a href="#proof" className="text-base text-white/70 hover:text-white">
            Success
          </a>
          <a href="#speakers" className="text-base text-white/70 hover:text-white">
            Speakers
          </a>
          <a href="#waitlist" className="text-base text-white/70 hover:text-white">
            Waitlist
          </a>
          <a href="https://www.mlvignite.com" className="text-base text-white/70 hover:text-white">
            MLV Ignite
          </a>
        </nav>

        {/* CTA Button */}
        <div className="py-2">
          <Button
            as="a"
            href="https://forms.gle/DrHQu6CwdJqtQU1R9"
            target="_blank"
            className="rounded-xl bg-[white] text-black hover:opacity-90"
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </header>
  );
}
