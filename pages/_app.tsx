import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { ColorModeProvider } from "../components/ColorModeContext";
import { MDXProvider } from "@mdx-js/react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Head from "../components/Head";
import components from "../components/Markdown";
import GlobalStyle from "../components/GlobalStyle";
import { theme } from "../components/Theme";
import { convertThemeToUseCustomProperties } from "../components/CustomPropertiesUtils";

const newTheme = convertThemeToUseCustomProperties(theme, [
  "colors",
  "breakpoints",
  "space"
]);

newTheme.colors = theme.colors;
newTheme.breakpoints = theme.breakpoints;
newTheme.space = theme.space;

const NAV_HEIGHT = 65;

export const DEFAULT_TITLE = "Hiranmaya Gundu- Software developer";

const DEFAULT_DESCRIPTION = "Hiranmaya Gundu's personal website";

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    console.log(newTheme);
    return (
      <ColorModeProvider>
        <ThemeProvider theme={newTheme}>
          <MDXProvider components={components}>
            <>
              <Nav />
              <Head title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} />
              <Layout
                pt={[`${NAV_HEIGHT}px`, `${NAV_HEIGHT / 2}px`]}
                css={{
                  paddingLeft: "8px",
                  paddingRight: "8px"
                }}
              >
                <GlobalStyle />
                <Component {...pageProps} />
              </Layout>
              <Footer />
            </>
          </MDXProvider>
        </ThemeProvider>
      </ColorModeProvider>
    );
  }
}

export default MyApp;
