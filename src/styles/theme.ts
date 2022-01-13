import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "580px",
  md: "770px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({
  colors: {
    primary: "#ffd100",
    secundary: "#ffc600",

    gray: {
      800: "#000814",
    },
  },

  fonts: {
    body: "Quicksand,system-ui, sans-serif",
    heading: "Quicksand, system-ui, Georgia, serif",
    mono: "Menlo, monospace",
  },

  fontSizes: {
    xs: "1.2rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "1.8rem",
    xl: "2rem",
    "2xl": "2.4rem",
    "3xl": "3rem",
    "4xl": "3.6rem",
    "5xl": "4rem",
    "6xl": "4.2rem",
    "7xl": "4.8rem",
  },

  breakpoints,
});

export default theme;
