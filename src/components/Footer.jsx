import React from "react";
import { Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} MLV — Make It Happen.
        </p>

        <div className="flex items-center gap-4 text-xs text-white/60">
          <a href="#proof" className="hover:text-white">Success</a>
          <a href="#speakers" className="hover:text-white">Speakers</a>
          <a href="https://www.mlvignite.com" className="hover:text-white">MLV Ignite</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/mlvignite/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/60 hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/mlvignite/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/60 hover:text-white"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/mlvignite/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/60 hover:text-white"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
