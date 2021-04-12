const colors = {
  grey: "var(--color-grey)",
  black: "var(--color-black)",
  headerLink: "var(--color-link)",
  textLink: "var(--color-link)",
};

const fontSizes = [16, 18, 20, 24, 32, 48, 64, 96];
const fontSizesInRem = fontSizes.map((item) => `${item / 16}rem`);

export const theme = {
  colors: {
    text: "var(--color-text)",
    background: "var(--color-primary-background)",
    ...colors,
  },
  breakpoints: ["40em", "52em", "64em"],
  fonts: {
    body:
      'aileron, source-sans-pro, -apple-system, BlinkMacSystemFont,"Segoe UI", Helvetica, Arial, sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    monospace: '"Source Code Pro", menlo, monospace',
  },
  fontSizes: fontSizesInRem,
  fontWeights: {
    body: "400",
    heading: "700",
    bold: "700",
    light: "400",
    medium: "500",
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  lineHeights: {
    body: "1.5",
    heading: "1.25",
  },
};
