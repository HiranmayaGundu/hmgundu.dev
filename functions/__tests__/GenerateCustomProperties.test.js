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
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
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

    expect(result).toMatchInlineSnapshot(`
      Object {
        "--font-weights-body": 400,
        "--font-weights-bold": 700,
        "--font-weights-heading": 700,
        "--fonts-body": "system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", sans-serif",
        "--fonts-heading": "system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", sans-serif",
        "--fonts-monospace": "Menlo, monospace",
        "--line-heights-0": 1.5,
        "--line-heights-1": 1.125,
        "--size-0": "10em",
        "--size-1": "20em",
        "--size-2": "30em",
        "--size-3": "40em",
        "--space-0": 0,
        "--space-1": 2,
        "--space-2": 3,
        "--space-3": 4,
        "--space-4": 5,
        "--space-5": 6,
      }
    `);
  });

  it("transforms a theme config to CSS custom properties", () => {
    const result = convertThemeToUseCustomProperties(theme, ["colors"]);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "fontWeights": Object {
          "body": "var(--font-weights-body)",
          "bold": "var(--font-weights-bold)",
          "heading": "var(--font-weights-heading)",
        },
        "fonts": Object {
          "body": "var(--fonts-body)",
          "heading": "var(--fonts-heading)",
          "monospace": "var(--fonts-monospace)",
        },
        "lineHeights": Array [
          "var(--line-heights-0)",
          "var(--line-heights-1)",
        ],
        "size": Array [
          "var(--size-0)",
          "var(--size-1)",
          "var(--size-2)",
          "var(--size-3)",
        ],
        "space": Array [
          "var(--space-0)",
          "var(--space-1)",
          "var(--space-2)",
          "var(--space-3)",
          "var(--space-4)",
          "var(--space-5)",
        ],
      }
    `);
  });
});
