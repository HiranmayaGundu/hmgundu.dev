const colors = {
  green: "#D0D0D0",
  greys: ["#EEE", "#BBB", "#999", "#666"],
  white: "#F2DFDF",
  secondaryWhite: "#FFFFFF",
  black: "#000000",
  secondaryBlack: "#222",
  headerLink: "var(--color-link)",
  textLink: "var(--color-link)",
};

const fontSizes = [16, 18, 20, 24, 32, 48, 64, 96];
const fontSizesInRem = fontSizes.map((item) => `${item / 16}rem`);

export const theme = {
  colors: {
    primary: colors.green,
    text: "var(--color-text)",
    background: "var(--color-primary-background",
    secondary: colors.greys[4],
    tertiary: colors.greys[3],
    quaternary: colors.greys[2],
    ...colors,
  },
  breakpoints: ["850px", "1100px", "64em"],
  fonts: {
    system:
      'aileron, source-sans-pro, -apple-system, BlinkMacSystemFont,"Segoe UI", Helvetica, Arial, sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    monospace: '"Source Code Pro", menlo, monospace',
  },
  fontSizes: fontSizesInRem,
  fontWeights: {
    body: "300",
    heading: "700",
    bold: "700",
    light: "300",
    medium: "400",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  lineHeights: {
    body: "1.5",
    heading: "1.25",
  },
};
