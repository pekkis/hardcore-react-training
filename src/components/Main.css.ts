import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const mainClass = style({
  marginInline: "auto",
  marginBlock: 0,
  paddingInline: theme.spaces.medium,
  maxWidth: "1200px"
});
