import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --font-family: source-sans-pro,roboto-condensed,roboto, -apple-system, BlinkMacSystemFont,"Segoe UI",
    Helvetica, Arial, sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    --font-family-mono: "Source Code Pro", "Courier New", monospace;
    --font-weight-bold: 700;
    --font-weight-medium: 400;
    --font-weight-light: 300;
    --font-size-0: 16
  }

  *, *:before, *:after {
    font-family: var(--font-family);
  }

  body {
    background-color: var(--color-primary-background);
    color: var(--color-text);
    font-weight: var(--font-weight-light)
  }

  strong {
    font-weight: var(--font-weight-bold);
  }

  hr {
    margin: 2em 0;
    border-color: rgba(0, 0, 0, 0.1);
  }
`;

export default GlobalStyle;
