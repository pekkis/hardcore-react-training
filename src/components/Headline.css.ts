import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const headlineClass = style({
  padding: theme.spaces.medium,
  marginTop: theme.spaces.medium,
  marginBottom: theme.spaces.medium,
  borderRadius: theme.borderRadius.medium,
  backgroundColor: "rgb(255 255 255 / .75)",
  borderColor: theme.color.black,
  borderWidth: "1px",
  borderStyle: "double"
});
