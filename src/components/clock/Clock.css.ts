import { theme } from "@/services/theme.css";
import { style } from "@vanilla-extract/css";

export const clock = style({
  border: "10px solid rgb(0 0 0)",
  marginBlock: theme.sizes.medium,

  padding: theme.sizes.medium,

  backgroundColor: theme.colors.white,
  color: theme.colors.black
});

export const afterDark = style({
  color: theme.colors.white,
  backgroundColor: theme.colors.black
});
