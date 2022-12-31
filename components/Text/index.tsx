/** @format */

import { styled } from "../../stitches.config";

export const Text = styled("p", {
  fontFamily: "$inter",
  textTransform: "none",
  "& span": {
    color: "$primaryBackground",
    backgroundColor: "$primaryText",
  },
  variants: {
    font: {
      inter: {
        fontFamily: "$inter",
      },
      apercu: {
        fontFamily: "$apercu",
      },
    },
    size: {
      1: {
        fontSize: "$1",
        fontWeight: "$regular",
      },
      2: {
        fontSize: "$2",
        fontWeight: "$light",
      },
      3: {
        fontSize: "$2",
        fontWeight: "$regular",
      },
      4: {
        fontSize: "$3",
        fontWeight: "$regular",
      },
      5: {
        fontSize: "$4",
        fontWeight: "$regular",
        "@sm": {
          fontSize: "$2",
        },
      },
      6: {
        fontSize: "$5",
        fontWeight: "$regular",
        "@sm": {
          fontSize: "$3",
        },
      },
      7: {
        fontSize: "$6",
        fontWeight: "$regular",
      },
      8: {
        fontSize: "$7",
        fontWeight: "$regular",
      },
      9: {
        fontSize: "$8",
        fontWeight: "$medium",
        "@sm": {
          fontSize: 40,
          lineHeight: 1.1,
        },
      },
      10: {
        fontSize: "$9",
        fontWeight: "$black",
        "@md": {
          fontSize: 120,
        },
        "@sm": {
          fontSize: 62,
        },
        "@xsm": {
          fontSize: 54,
        },
      },
    },
    align: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
    transform: {
      uppercase: {
        textTransform: "uppercase",
      },
      capitalize: {
        textTransform: "capitalize",
      },
    },
    color: {
      primary: {
        color: "$primaryText",
      },
      primaryLight: {
        color: "$primaryTextLight",
      },
      silver: {
        color: "$silver",
      },
    },
  },
  //   "@xm": {
  //     textAlign: "left",
  //   },
});
