import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { toCustomProperties } from "functions/CustomPropertiesUtils";
import { theme } from "./Theme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    ${toCustomProperties(theme, ["colors"])};
  }

  @font-face {
    font-family: 'Source Code Pro';
    src: url('fonts/source-code-pro.woff2') format('woff2');
    font-weight: regular;
    font-style:	normal;
    font-display: swap;
  }

  *, *:before, *:after {
    font-family: var(--font-family);
  }
  html {
    scroll-padding-top: 65px;
  }

  body {
    background-color: var(--color-primary-background);
    color: var(--color-text);
    font-weight: var(--font-weight-light);
    text-rendering: optimizeLegibility;
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
