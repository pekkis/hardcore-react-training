import { createGlobalTheme } from "@vanilla-extract/css";

const vars = createGlobalTheme(":root", {
  size: {
    container: "1200px"
  },
  fontFamily: {
    main: "zeitung-micro, sans-serif",
    header: "acuta, sans-serif"
  },
  fontSize: {
    medium: "20px"
  },
  space: {
    small: "8px",
    medium: "16px"
  }
});

export default vars;

export const breakpoints = [768, 992];
