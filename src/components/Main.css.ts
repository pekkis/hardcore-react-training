import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const main = style({
  padding: theme.spacing.m,
  // marginInline: "auto",
  // marginBlock: theme.spacing.m,
  // maxWidth: theme.size.container,

  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: "rgb(0 0 0)",
      color: "rgb(255 255 255)"
    }
  }
});
