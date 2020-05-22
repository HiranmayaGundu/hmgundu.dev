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
    font-family: 'MonoLisa';
    src: url('fonts/Lemonada/MonoLisa-Regular.ttf');
    src: url('fonts/Lemonada/MonoLisa-Bold.ttf');
    src: url('fonts/Lemonada/MonoLisa-BoldItalic.ttf');
    src: url('fonts/Lemonada/MonoLisa-RegularItalic.ttf');
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
