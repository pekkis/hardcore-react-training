import { style } from "@vanilla-extract/css";
import { theme } from "@/theme.css";

export const headerClass = style({
  backgroundColor: theme.color.black,
  color: theme.color.white,
  padding: 0,
  margin: 0,
  position: "sticky",
  top: 0
});
