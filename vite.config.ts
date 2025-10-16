import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";
import netlify from "@netlify/vite-plugin-tanstack-start";
import path from "path";

// ✅ Clean, stable Vite configuration for TanStack + Tailwind + Netlify
export default defineConfig({
  plugins: [
    // Nitro V2 SSR support (required by TanStack Start)
    nitroV2Plugin({
      compatibilityDate: "2025-10-03",
    }),

    // Resolve TypeScript path aliases (from tsconfig.json)
    tsconfigPaths({
      projects: ["./tsconfig.json"],
    }),

    // TailwindCSS integration (official plugin)
    tailwindcss(),

    // TanStack Start for routing, hydration, and SSR
    tanstackStart(),

    // React plugin
    react(),

    // Netlify adapter (auto handles SSR output)
    netlify(),
  ],

  // ✅ Alias setup so "@/..." maps to "src/..."
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // ✅ Production build settings
  build: {
    outDir: ".output/public", // required for Netlify to detect SSR output
    emptyOutDir: true,
    sourcemap: false,
  },

  // ✅ Optimize deps (optional, improves Netlify build stability)
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-router"],
  },
});
