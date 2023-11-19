import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const question = style({
  padding: theme.spacing.s,
  borderColor: theme.colors.secondary,
  borderWidth: "5px",
  borderRadius: theme.borderRadius.plump,
  borderStyle: "dashed",
  backgroundColor: theme.colors.femtiary
});

export const answer = style({});

export const correct = style({
  backgroundColor: "rgb(0 150 0)"
});

export const incorrect = style({
  backgroundColor: "rgb(255 0 0)"
});
