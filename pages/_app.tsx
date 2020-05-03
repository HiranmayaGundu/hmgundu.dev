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

// Default theme, to change to what I want later.
const colors = {
  green: "#D0D0D0",
  greys: ["#EEE", "#BBB", "#999", "#666"],
  white: "#F2DFDF",
  secondaryWhite: "#FFFFFF",
  black: "#000000",
  secondaryBlack: "#222",
  headerLink: "#F8C2D3",
  textLink: "var(--color-link)"
};

const theme = {
  colors: {
    primary: colors.green,
    text: "var(--color-text)",
    background: "var(--color-primary-background",
    secondary: colors.greys[4],
    tertiary: colors.greys[3],
    quaternary: colors.greys[2],
    ...colors
  },
  breakpoints: ["850px", "1100px", "64em"],
  fonts: {
    system: "var(--font-family)",
    monospace: "var( --font-family-mono)"
  },
  fontSizes: [16, 18, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: "var(--font-weight-light)",
    heading: "var(--font-weight-bold)",
    bold: "var(--font-weight-bold)",
    light: "var(--font-weight-light)",
    medium: "var(--font-weight-medium)"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  lineHeights: {
    body: 1.5,
    heading: 1.25
  }
};

const NAV_HEIGHT = 65;

export const DEFAULT_TITLE = "Hiranmaya Gundu- Software developer";

const DEFAULT_DESCRIPTION = "Hiranmaya Gundu's personal website";

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <ColorModeProvider>
        <ThemeProvider theme={theme}>
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
