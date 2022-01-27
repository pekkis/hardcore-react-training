import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    brand: "yellow",
    button: "pink"
  }
});
