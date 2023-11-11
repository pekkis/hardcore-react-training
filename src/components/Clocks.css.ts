import { style } from "@vanilla-extract/css";
import theme from "./theme.css";

export const clocks = style({
  display: "flex",
  flexBasis: "100%",
  gap: theme.spacing.m,
  flexWrap: "wrap"
});

export const clock = style({
  flexShrink: 5,
  flexGrow: 5,
  minWidth: "10rem",

  borderStyle: "solid",
  borderWidth: theme.borderWidth.thicc,
  borderColor: theme.colors.black,
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(255 255 255 / .5)"
});
