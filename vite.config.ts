import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.png"],
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    environment: "jsdom",
    deps: {
      fallbackCJS: true
    }
  }
});
