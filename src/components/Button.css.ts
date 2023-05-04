import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const buttonClass = style({
  borderRadius: theme.radiuses.mighty,
  borderColor: theme.color.black,
  borderWidth: "5px",
  borderStyle: "solid",
  padding: theme.padding.medium,

  ":hover": {
    zoom: 1.1
  }
});
