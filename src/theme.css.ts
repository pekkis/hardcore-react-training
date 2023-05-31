import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  color: {
    black: "rgb(0 0 0)",
    white: "rgb(255 255 255)"
  },

  fontSize: {
    body: "16px"
  },

  spacing: {
    s: "0.5rem",
    m: "1rem",
    l: "2rem"
  },

  size: {
    container: "1000px"
  }
});
