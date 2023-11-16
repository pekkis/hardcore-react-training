import { theme } from "@/theme.css";
import { globalStyle } from "@vanilla-extract/css";

import duckPattern from "@/assets/duckling-pattern.png";

globalStyle("html", {
  fontFamily: theme.fontFamily.body,
  backgroundImage: `url(${duckPattern.src})`
});

globalStyle("body", {
  fontSize: "18px"
});
