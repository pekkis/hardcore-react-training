import { style } from "@vanilla-extract/css";
import theme from "@/theme.css";

export const headline = style({
  marginBlockStart: theme.spacing.s,
  marginBlockEnd: theme.spacing.m,

  ":last-of-type": {
    marginBlockEnd: theme.spacing.m
  }
});
