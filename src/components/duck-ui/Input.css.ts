import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const input = style({
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s
});

export const ribulsk = style({
  backgroundColor: theme.color.primary,
  color: theme.color.black
});

export const secondary = style({
  backgroundColor: theme.color.black,
  color: theme.color.primary
});
