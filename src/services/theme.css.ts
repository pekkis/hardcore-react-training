import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  fontSizes: {
    body: "18px"
  },

  fonts: {
    body: "Comic Sans MS"
  },

  colors: {
    primary: "blue",
    secondary: "green",
    accent: "yellow",
    black: "rgb(0 0 0)",
    white: "rgb(255 255 255)"
  },

  sizes: {
    small: "0.5em",
    medium: "1em",
    large: "2em"
  }
});
