import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Abre o navegador automaticamente
  },
  build: {
    outDir: "dist", // Saída do build
  },
});

