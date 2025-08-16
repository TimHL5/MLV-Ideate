import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// vite.config.js
export default defineConfig({
    plugins: [react()],
    base: "/MLV-Ideate/", // project is served at https://timhl5.github.io/MLV-Ideate/
  });
  