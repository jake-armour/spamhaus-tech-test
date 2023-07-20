import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    mainFields: ["module"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    include: ["./src/tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    globals: true,
    environment: "jsdom",
    reporters: "verbose",
    coverage: {
      all: true,
      include: ["src/**/*.{js,ts,vue}"],
      exclude: [
        "src/main.ts",
        "src/tests/**",
        "src/typings/**",
        "src/state/**",
        "src/vite-env.d.ts",
      ],
      provider: "c8",
    },
  },
});
