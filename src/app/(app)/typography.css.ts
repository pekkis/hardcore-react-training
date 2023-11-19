import theme from "@/theme.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("html", {
  fontFamily: theme.fontFamilies.body,
  fontSize: theme.fontSizes.body
});
