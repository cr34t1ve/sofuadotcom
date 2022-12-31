/** @format */

import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      inter: "Inter",
      apercu: "Apercu",
      system: "system-ui",
    },
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",
      primaryText: "#D9D9D9",
      primaryTextLight: "rgba(217, 217, 217, 0.6)",
      primaryBackground: "#0D0E13",
      silver: "#D1D1D1",
    },
    fontSizes: {
      1: "13px",
      2: "16px",
      3: "18px",
      4: "20px",
      5: "24px",
      6: "30px",
      7: "35px",
      8: "90px",
      9: "190px",
    },
    fontWeights: {
      //   1: 200,
      //   2: 300,
      //   'regular': 400,
      //   4: 500,
      //   5: 600,
      //   6: 700,
      //   7: 800,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      black: 800,
    },
  },
  media: {
    xsm: "(max-width: 375px)",
    sm: "(max-width: 600px)",
    md: "(max-width: 950px)",
  },
});
