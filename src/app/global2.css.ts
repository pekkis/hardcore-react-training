import { theme } from "@/services/theme.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  fontFamily: theme.fonts.body
});

globalStyle("body", {
  margin: theme.sizes.medium
});
