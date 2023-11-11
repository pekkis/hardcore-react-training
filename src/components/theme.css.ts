import { createGlobalTheme } from "@vanilla-extract/css";

const theme = createGlobalTheme(":root", {
  fontFamilies: {
    body: "Comic Sans Ms"
  },

  fontSizes: {
    body: "18px"
  },

  borderRadius: {
    sharp: "3px",
    soft: "6px",
    plump: "9px"
  },

  borderWidth: {
    thin: "1px",
    thicc: "5px"
  },

  colors: {
    primary: "#ffff4d",
    secondary: "#b3b336",
    tertiary: "#b8ff4d",
    quartiary: "#ffdb4d",
    femtiary: "#ffdb4d",
    black: "rgb(0, 0, 0)",
    white: "rgb(255, 255, 255)"
  },

  spacing: {
    none: "0",
    xs: "0.5rem",
    s: "1rem",
    m: "2rem",
    l: "4rem",
    xl: "8rem"
  }
});

export default theme;
