import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  cacheDir: "node_modules/.vite",
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    // Optimizaciones agresivas de rendimiento
    pool: "forks",
    poolOptions: {
      forks: {
        singleFork: true, // Un solo proceso para evitar overhead
      },
    },
    isolate: false, // No aislar tests (50% más rápido)
    passWithNoTests: true,
    // Deshabilitar features innecesarias
    coverage: {
      enabled: false,
    },
    reporters: ['basic'], // Reporter minimalista (más rápido que default)
    // jsdom optimizado - configuración mínima
    environmentOptions: {
      jsdom: {
        resources: 'usable',
        runScripts: 'dangerously', // Necesario pero optimizado
        pretendToBeVisual: false, // Evitar overhead visual
      },
    },
    // Timeouts reducidos
    testTimeout: 2000,
    hookTimeout: 2000,
    teardownTimeout: 500,
    // Sin watch mode
    watch: false,
    // Cache agresivo
    cache: {
      dir: 'node_modules/.vitest',
    },
    // Minimal diff output
    diff: './src/test/diff.ts',
    // Deshabilitar features de debugging
    sequence: {
      shuffle: false, // Ejecución ordenada (más rápida)
    },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  // Optimizaciones de esbuild
  esbuild: {
    target: 'esnext',
    format: 'esm',
  },
});
