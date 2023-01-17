import { type PluginOption } from "vite";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic"
    }),
    vanillaExtractPlugin(),
    visualizer({
      emitFile: true,
      filename: "stats.html"
    })
  ],
  test: {
    environment: "jsdom",
    deps: {
      fallbackCJS: true
    }
  },
  esbuild: {
    logOverride: {
      "this-is-undefined-in-esm": "silent",
      "unsupported-jsx-comment": "silent"
    }
  }
});
