import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const image = style({
  width: "100%",
  maxWidth: "100%",
  aspectRatio: 4 / 3
});

export const mainHeading = style({
  marginBlockStart: 0,
  marginBlockEnd: theme.spaces.medium
});
