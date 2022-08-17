import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic"
    }),
    vanillaExtractPlugin()
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
