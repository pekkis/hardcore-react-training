import { style } from "@vanilla-extract/css";
import theme from "./theme.css";

export const header = style({
  paddingBlock: theme.spacing.s,
  paddingInline: theme.spacing.s,
  textAlign: "center",
  backgroundColor: theme.colors.primary,
  color: theme.colors.black,
  borderBlockEndStyle: "solid",
  borderBlockEndColor: theme.colors.black,
  borderBlockEndWidth: "1px",
  fontSize: "xxx-large"
});

export const kvaak = style({
  verticalAlign: "middle",
  width: "50px",
  marginRight: theme.spacing.s
});

export const link = style({
  ":link": {
    color: theme.colors.black,
    textDecoration: "none"
  },
  ":visited": {
    color: theme.colors.black
  }
});
