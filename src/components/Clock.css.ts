import theme from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const clock = style({
  flexShrink: 5,
  flexGrow: 5,
  minWidth: "10rem",

  borderStyle: "solid",
  borderWidth: theme.borderWidth.thicc,
  borderColor: theme.colors.black,
  borderRadius: theme.borderRadius.plump,
  padding: theme.spacing.s,
  backgroundColor: "rgb(255 255 255)"
});

export const nightTime = style({
  backgroundColor: theme.colors.black,
  color: theme.colors.white
});
