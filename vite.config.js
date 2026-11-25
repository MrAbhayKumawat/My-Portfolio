import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Relative asset paths work both at a domain root and under /My-Portfolio/ on GitHub Pages
  base: "./",
});
