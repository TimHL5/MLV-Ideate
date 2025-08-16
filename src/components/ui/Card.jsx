import React from "react";

/**
 * Card with a silver/white gradient RING ONLY (no internal fill).
 * Content goes inside `.g-inner`, which stays transparent so the page
 * background shows through.
 */
export default function Card({ children, className = "" }) {
  return (
    <div className={`g-border ${className}`}>
      <div className="g-inner p-6">{children}</div>
    </div>
  );
}
