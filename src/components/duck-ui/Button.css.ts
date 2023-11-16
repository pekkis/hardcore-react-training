import { theme } from "../../theme.css";
import { style } from "@vanilla-extract/css";

export const button = style({
  padding: theme.spacing.s,
  borderRadius: theme.borderRadius.thin
});

export const primary = style({
  backgroundColor: theme.color.primary
});

export const secondary = style({
  backgroundColor: theme.color.secondary,
  color: theme.color.white
});
