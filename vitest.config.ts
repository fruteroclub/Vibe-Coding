import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  cacheDir: "node_modules/.vite", // Cache global de Vite
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    // Optimizaciones de rendimiento
    pool: "forks", // Usar forks en lugar de threads (más rápido para pocos tests)
    poolOptions: {
      forks: {
        singleFork: true, // Un solo proceso
      },
    },
    isolate: false, // No aislar tests (mucho más rápido)
    passWithNoTests: true,
    // Reducir overhead
    coverage: {
      enabled: false, // Desactivar coverage
    },
    // Optimizar jsdom - minimal setup
    environmentOptions: {
      jsdom: {
        resources: "usable",
      },
    },
    // Reducir timeouts
    testTimeout: 3000,
    hookTimeout: 3000,
    // Deshabilitar watch mode optimizations
    watch: false,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
