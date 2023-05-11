import { theme } from "@/theme.css";
import { globalStyle } from "@vanilla-extract/css";

import kvaak from "../assets/duckling-pattern.png";

globalStyle("html", {
  fontSize: theme.fontSize.body,
  fontFamily: theme.fontFamily.body,
  backgroundImage: `url(${kvaak.src})`
});

globalStyle("*", {
  boxSizing: "border-box"
});

globalStyle("a", {
  color: theme.color.link
});

globalStyle("a:hover", {
  "@media": {
    "(hover:hover)": {
      textDecoration: "none"
    }
  }
});
