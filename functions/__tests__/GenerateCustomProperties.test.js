import {
  toCustomProperties,
  convertThemeToUseCustomProperties,
} from "../CustomPropertiesUtils";

const theme = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "#05a",
    accent: "#609",
    muted: "#f6f6f6",
    dark: {
      foreground: {
        text: "#000",
      },
      background: {
        surface: "#fff",
      },
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: [1.5, 1.125],
  space: [0, 2, 3, 4, 5, 6],
  size: ["10em", "20em", "30em", "40em"],
};

describe("test cases for toCustomPropeties", () => {
  it("transforms a theme config to CSS custom properties", () => {
    const result = toCustomProperties(theme, ["colors"]);

    expect(result).toMatchSnapshot();
  });

  it("transforms a theme config to CSS custom properties", () => {
    const result = convertThemeToUseCustomProperties(theme, ["colors"]);

    expect(result).toMatchSnapshot();
  });
});
