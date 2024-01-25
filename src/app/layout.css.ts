import { theme } from "@/theme.css";
import { globalStyle } from "@vanilla-extract/css";

import bg from "@/assets/duckling-pattern.png";

globalStyle("html", {
  fontFamily: theme.fontFamily.body,
  fontSize: theme.fontSize.body,
  backgroundImage: `url(${bg.src})`
});
