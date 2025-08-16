import React from "react";

export default function Button({ as: Tag = "button", className = "", children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/60 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}