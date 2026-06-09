import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: true, // bind to all interfaces — IPv4 + IPv6, fixes localhost on Windows
    port: 3000,
    strictPort: true,
    hmr: {
      overlay: true, // show build errors in the browser instead of silently dying
    },
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
