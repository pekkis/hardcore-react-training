import { style } from "@vanilla-extract/css";
import { theme } from "@/theme.css";

export const headerClass = style({
  backgroundColor: theme.color.black,
  color: theme.color.white,
  padding: theme.padding.medium,
  margin: 0,
  position: "sticky",
  top: 0
});

export const h1Class = style({
  margin: 0,
  padding: 0
});

export const linkClass = style({
  ":link": {
    color: theme.color.white
  },
  ":visited": {
    color: theme.color.white
  }
});
