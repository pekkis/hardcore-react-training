import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  spacing: {
    s: "0.5rem",
    m: "1rem",
    l: "2rem",
    xl: "4rem"
  },

  color: {
    black: "rgb(0 0 0)",
    white: "rgb(0 0 0)",
    yellow: "rgb(255 255 0)"
  },

  borderRadius: {
    thin: "5px",
    plump: "15px"
  },

  fontFamily: {
    body: "Comic Sans MS"
  }
});
