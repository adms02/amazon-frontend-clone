import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    navy: "#0F1111",
    blue: "#007185",
    black: "#131921",
    orange: "#C7511F",
    white: "#FFFFFF",
    red: "#B12704",
    lightgray: "#CCCCCC",
  },
  // fonts: ["Amazon Ember", "Arial", "sans-serif"],
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
