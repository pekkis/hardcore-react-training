import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const header = style({
  backgroundColor: theme.color.black,
  color: theme.color.white,
  padding: theme.spaces.medium,
  position: "sticky",
  top: 0
});

export const logo = style({
  verticalAlign: "middle",
  marginRight: theme.spaces.medium
});

export const link = style({
  color: theme.color.white,

  ":link": {
    textDecoration: "none"
  },

  ":hover": {
    textDecoration: "underline"
  }
});
