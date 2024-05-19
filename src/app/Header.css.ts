import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  padding: theme.spacing.m,
  backgroundColor: theme.color.primary,
  fontSize: 50,

  "@container": {},

  "@layer": {},

  "@media": {}
});
