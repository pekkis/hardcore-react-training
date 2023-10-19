// import { theme } from "@/theme.css";
import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const main = style({
  maxWidth: "1200px",
  // margin: "0 auto",
  marginBlock: theme.spacing.l,
  marginInline: "auto",
  containerType: "inline-size",
  paddingInline: theme.spacing.s
});
