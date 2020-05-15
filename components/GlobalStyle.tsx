import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { toCustomProperties } from "functions/CustomPropertiesUtils";
import { theme } from "./Theme";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    ${toCustomProperties(theme, ["colors"])};
  }

  *, *:before, *:after {
    font-family: var(--font-family);
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
