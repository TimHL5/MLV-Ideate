/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          accent: "#6AC670", // brand green
        },
        boxShadow: {
          glow: "0 0 0 1px rgba(255,255,255,0.2)",
        },
      },
    },
    plugins: [],
  };