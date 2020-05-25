import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ColorModeProvider } from "../components/ColorModeContext";
import { MDXProvider } from "@mdx-js/react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Head from "../components/Head";
import components from "../components/Markdown";
import GlobalStyle from "../components/GlobalStyle";
import { theme } from "../components/Theme";
import { convertThemeToUseCustomProperties } from "functions/CustomPropertiesUtils";
import * as gtag from "functions/gtag";
import { Router } from "next/router";
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
  React.useEffect(() => {
    const handleRouteChange = (url: string): void => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return (): void => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <>
      <Head title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} />
      <ColorModeProvider>
        <ThemeProvider theme={newTheme}>
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
interface WebVitals {
  id: string;
  label: string;
  name: string;
  startTime: number;
  value: number;
}
export function reportWebVitals(metric: WebVitals): void {
  gtag.sendToGoogleAnalytics(metric);
}

export default App;
