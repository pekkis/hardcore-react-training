import { Theme } from "@emotion/react";
import { funk } from "@theme-ui/presets";

export const breakpoints = [768, 992];

const theme: Theme = {
  ...funk,
  sizes: {
    container: "1200px"
  },
  breakpoints: breakpoints.map((b) => `${b}px`),

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fonts: {
    ...funk.fonts,
    body: "zeitung-micro, sans-serif",
    heading: "acuta, sans-serif",
    cute: "acuta, sans-serif"
  },

  fontWeights: {
    body: 400,
    heading: 600,
    normal: 400,
    bold: 600
  },

  lineHeights: {
    body: 1.4,
    heading: 1.125
  },

  text: {
    paragraph: {
      // variant: "paragraph",
      my: 3,
      ":first-of-type": {
        mt: 0
      },
      ":last-of-type": {
        mb: 0
      }
    },
    heading: {
      mt: 4,
      mb: 3
    }
  },

  styles: {
    ...funk.styles,
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 3
    },
    a: {
      color: "link"
    }
  },
  headings: {
    cute: {
      fontFamily: "cute"
    }
  }
};

export default theme;
