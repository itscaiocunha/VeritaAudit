import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist", // Certifique-se de que a saída está correta
  },
  server: {
    fs: {
      strict: false, // Evita alguns erros com arquivos externos
    }
  }
});
