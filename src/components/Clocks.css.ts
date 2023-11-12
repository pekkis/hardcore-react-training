import { style } from "@vanilla-extract/css";
import theme from "@/theme.css";

export const clocks = style({
  display: "flex",
  flexBasis: "100%",
  gap: theme.spacing.m,
  flexWrap: "wrap"
});
