import { style } from "@vanilla-extract/css";
import theme from "@/theme.css";

export const footer = style({
  paddingBlockStart: theme.spacing.m,
  paddingBlockEnd: theme.spacing.xl,
  paddingInline: theme.spacing.m,
  textAlign: "center",
  color: theme.colors.primary,
  backgroundColor: theme.colors.black
});
