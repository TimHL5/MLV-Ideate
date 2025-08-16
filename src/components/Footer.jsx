import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <p className="text-xs text-white/60">© {new Date().getFullYear()} MLV — Make It Happen.</p>
        <div className="flex items-center gap-4 text-xs text-white/60">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#proof" className="hover:text-white">Success</a>
          <a href="#speakers" className="hover:text-white">Speakers</a>
          <a href="#waitlist" className="hover:text-white">Waitlist</a>
          <a href="https://www.mlvignite.com" className="hover:text-white">MLV Ignite</a>
        </div>
      </div>
    </footer>
  );
}