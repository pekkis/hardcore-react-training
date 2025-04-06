import tseslint from "typescript-eslint";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import js from "@eslint/js";
import pluginReactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  jsxA11Y.flatConfigs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },

  {
    files: ["src/**/*.{js,ts,jsx,tsx}"],
    ...reactPlugin.configs.flat.recommended,
    plugins: {
      "react-hooks": pluginReactHooks
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    }
  },

  {
    plugins: {
      "@next/next": nextPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules
    }
  },

  eslintPluginPrettierRecommended
];
