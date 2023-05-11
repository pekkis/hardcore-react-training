import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  fontSize: {
    body: "18px"
  },

  fontFamily: {
    body: "Comic Sans MS"
  },

  spaces: {
    small: "0.5em",
    medium: "1em",
    grand: "2em"
  },

  borderRadius: {
    small: "5px",
    medium: "10px",
    grand: "15px"
  },

  color: {
    text: "rgb(0 0 0)",
    white: "rgb(255 255 255)",
    black: "rgb(0 0 0)",
    grey: "rgb(100 100 100)",

    link: "rgb(0 0 255)"
  }
});
