import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  spacing: {
    s: "0.5rem",
    m: "1rem",
    l: "2rem"
  }
});
