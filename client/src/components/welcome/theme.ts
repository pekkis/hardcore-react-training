import { Theme } from "@emotion/react";
import { funk } from "@theme-ui/presets";

export const breakpoints = [768, 992];

const theme: Theme = {
  ...funk,
  sizes: {
    container: "1200px"
  },
  breakpoints: breakpoints.map((b) => `${b}px`),

  fonts: {
    ...funk.fonts,
    body: "Urbanist, sans-serif",
    heading: "Urbanist, sans-serif",
    cute: "Pacifico, cursive"
  },

  fontWeights: {
    body: 400,
    heading: 600,
    normal: 400,
    bold: 600
  },
  text: {
    paragraph: {
      // variant: "paragraph",
      my: 2
    }
  },

  styles: {
    ...funk.styles,
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 3,
      p: {
        my: 3,
        ":first-of-type": {
          mt: 0
        },
        ":last-of-type": {
          mb: 0
        }
      }
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
