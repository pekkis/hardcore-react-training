import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  fontSize: {
    body: "18px"
  },

  fontFamily: {
    body: "Comic Sans MS"
  },

  spacing: {
    xs: "0.5rem",
    s: "1rem",
    m: "2rem",
    l: "4rem",
    xl: "8rem"
  },

  color: {
    black: "rgb(0 0 0)",
    white: "rgb(255 255 255)",
    primary: "rgb(255 200 0)"
  }
});
