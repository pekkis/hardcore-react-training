import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  paddingBlock: theme.spacing.l,
  paddingInline: theme.spacing.m,
  color: theme.color.black,
  backgroundColor: theme.color.primary
});
