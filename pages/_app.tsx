import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ColorModeProvider } from "../components/ColorModeContext";
import { MDXProvider } from "@mdx-js/react";
import Footer from "../components/Footer";
import Nav from "../components/old-nav";
import Head from "../components/Head";
import components from "../components/Markdown";
import GlobalStyle from "../components/GlobalStyle";
import { theme } from "../components/Theme";
import { convertThemeToUseCustomProperties } from "@/functions/CustomPropertiesUtils";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

const newTheme = convertThemeToUseCustomProperties(theme, [
  "breakpoints",
  "space",
]);

newTheme.breakpoints = theme.breakpoints;
newTheme.space = theme.space;

export const DEFAULT_TITLE = "Hiranmaya Gundu- Software developer";

const DEFAULT_DESCRIPTION = "Hiranmaya Gundu's personal website";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} />
      <ColorModeProvider>
        <ThemeProvider theme={newTheme}>
          {/* @ts-expect-error expect error */}
          <MDXProvider components={components}>
            <>
              <Nav />
              <GlobalStyle />
              <Component {...pageProps} />
              <Footer />
            </>
          </MDXProvider>
        </ThemeProvider>
      </ColorModeProvider>
    </>
  );
};

export default App;
