import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const footer = style({
  marginBlockStart: theme.spaces.grand,
  marginBlockEnd: theme.spaces.medium,
  textAlign: "center"
});
