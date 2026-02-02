import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "::",
    port: 4173,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks - separate large libraries
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            // UI libraries
            if (id.includes('lucide-react') || id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            // i18n
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18n-vendor';
            }
            // Other node_modules
            return 'vendor';
          }

          // App chunks - split by feature/route
          if (id.includes('/src/pages/')) {
            // Doc pages - split by session
            if (id.includes('/pages/doc/session1/')) return 'doc-session1';
            if (id.includes('/pages/doc/session2/')) return 'doc-session2';
            if (id.includes('/pages/doc/session3/')) return 'doc-session3';
            if (id.includes('/pages/doc/session4/')) return 'doc-session4';
            if (id.includes('/pages/doc/session5/')) return 'doc-session5';
            if (id.includes('/pages/doc/')) return 'doc-pages';

            // Other pages
            return 'app-pages';
          }

          // Components
          if (id.includes('/src/components/')) {
            if (id.includes('/components/doc/')) return 'doc-components';
            if (id.includes('/components/ui/')) return 'ui-components';
            return 'components';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
}));
