import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  fontSize: {
    body: "18px"
  },

  color: {
    black: "rgb(0 0 0)",
    primary: "rgb(255 255 0)",
    white: "rgb(255 255 255)"
  },

  borderRadius: {
    plump: "10px"
  },

  fontFamily: {
    base: "Comic Sans MS"
  },

  spacing: {
    s: "0.5rem",
    m: "1rem",
    l: "2rem",
    xl: "4rem"
  }
});
