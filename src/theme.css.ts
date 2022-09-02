import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  spacing: {
    0: "0",
    1: "2em"
  },

  color: {
    brand: "yellow"
  },
  font: {
    body: "Comic Sans MS"
  }
});
