import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const block = style({
  padding: theme.spacing.m,
  borderColor: theme.colors.black,
  borderWidth: "5px",
  borderRadius: theme.borderRadius.plump,
  borderStyle: "solid"
});
