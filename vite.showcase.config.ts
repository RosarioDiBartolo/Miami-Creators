import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// Independent browser-only entry: never loads the operational server or its integrations.
export default defineConfig({
  root: "showcase",
  css: { postcss: { plugins: [] } },
  plugins: [react(), tailwindcss()],
  server: { host: "127.0.0.1", port: 3000, strictPort: true },
  preview: { host: "127.0.0.1", port: 3000, strictPort: true },
  build: { outDir: "../dist-showcase", emptyOutDir: true },
});
