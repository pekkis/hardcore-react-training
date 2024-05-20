import typescript from "@rollup/plugin-typescript";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import externals from "rollup-plugin-node-externals";
import { defineConfig } from "vite";
import styleX from "vite-plugin-stylex-dev";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
      fileName: "index"
    },
    rollupOptions: {
      external: [/^react/]
    }
  },
  plugins: [
    styleX({
      useCSSLayers: true,
      unstable_moduleResolution: null
    }),
    react(),
    typescript({
      target: "es2020",
      rootDir: resolve(__dirname, "src"),
      declaration: true,
      declarationDir: resolve(__dirname, "dist"),
      exclude: resolve(__dirname, "node_modules/**"),
      allowSyntheticDefaultImports: true
    }),
    externals()
  ]
});
