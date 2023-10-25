import { theme } from "@/theme.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  fontFamily: "Comic Sans MS"
});

globalStyle("body", {
  padding: theme.spacing.m,
  fontSize: "18px"
});
