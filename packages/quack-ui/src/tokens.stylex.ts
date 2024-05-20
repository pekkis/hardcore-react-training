import * as stylex from "@stylexjs/stylex";

// A constant can be used to avoid repeating the media query
const DARK = "@media (prefers-color-scheme: dark)";

export const tokens = stylex.defineVars({
  fontFamily: {
    default: "Comic Sans MS"
  },

  primaryText: { default: "var(--pieru)", [DARK]: "white" },
  secondaryText: { default: "#333", [DARK]: "#ccc" },
  accent: { default: "blue", [DARK]: "lightblue" },
  background: { default: "white", [DARK]: "black" },
  lineColor: { default: "gray", [DARK]: "lightgray" }
});
