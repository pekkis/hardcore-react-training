import { style } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

export const buttonClass = style({
  borderRadius: "15px",
  padding: vars.space.small,

  ":hover": {
    zoom: "1.5"
  }
});
