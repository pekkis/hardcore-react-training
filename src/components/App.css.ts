import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle("html", {
  fontFamily: vars.font.body,
  backgroundImage: "url(/src/assets/duckling-pattern.png)",
  fontSize: "18px",
  backgroundAttachment: "fixed",
  backgroundPosition: "top left"
});

globalStyle("body", {
  margin: 0,
  padding: 0
});

globalStyle("h2", {
  marginTop: "2em",
  marginBottom: "1em"
});

export const mainClass = style({
  margin: "1em",
  padding: 0
});

export const headerClass = style({
  marginTop: 0,
  backgroundColor: "rgb(255 277 108)",
  padding: "1rem",
  position: "sticky",
  top: 0,
  borderBottom: "1px solid rgb(33 33 33)",
  textAlign: "center",
  zIndex: 1000
});

export const headingClass = style({
  fontSize: "30px",
  margin: 0
});

export const logoClass = style({
  marginRight: "0.33em",
  verticalAlign: "middle"
});
