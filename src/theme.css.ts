import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  color: {
    black: "rgb(0, 0, 0)",
    white: "rgb(255, 255, 255)"
  },
  padding: {
    small: "0.5em",
    medium: "1em"
  },
  radiuses: {
    mighty: "15px"
  }
});
