import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  fontSize: {
    body: "20px"
  },

  fontFamily: {
    body: "Comic Sans MS"
  },

  margin: {
    s: "0.5rem",
    m: "1rem",
    l: "2rem"
  },

  color: {
    white: "rgb(255 255 255)",
    black: "rgb(0 0 0)"
  },

  borderRadius: {
    thick: "5px",
    plump: "15px"
  }
});
