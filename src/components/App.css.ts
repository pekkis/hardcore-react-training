import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle("html", {
  fontFamily: vars.font.body,
  backgroundImage: "url(/src/assets/duckling-pattern.png)"
});

export const mainClass = style({
  // margin: "1em auto",

  marginTop: vars.spacing[1],
  marginBottom: vars.spacing[1],
  maxWidth: "640px",
  padding: "1em"
});
