import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  marginBlockStart: theme.spacing.xl,
  marginBlockEnd: theme.spacing.m,
  marginInline: theme.spacing.m,
  textAlign: "center"
});
