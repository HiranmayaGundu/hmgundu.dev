import React from "react";
import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Flex } from "rebass";
import reset from "styled-reset";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Head from "../components/Head";

// Default theme, to change to what I want later.
const colors = {
  blue: "#3867d6",
  greys: ["#EEE", "#BBB", "#999", "#666"],
  white: "#FFF",
  black: "#333"
};

const theme = {
  colors: {
    primary: colors.blue,
    text: colors.white,
    background: "#A62C2B",
    secondary: colors.greys[4],
    tertiary: colors.greys[3],
    quaternary: colors.greys[2],
    ...colors
  },
  breakpoints: ["850px", "1100px", "64em"],
  fonts: {
    system: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol"
    ],
    serif: ["Georgia", "serif"]
  }
};

type ThemeType = typeof theme;

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}

  body {
    background-color: ${props => props.theme.colors.background};
    margin: 0;
  }

  strong {
    font-weight: bold;
  }

  hr {
    margin: 2em 0;
    border-color: rgba(0, 0, 0, 0.1);
  }
`;

const NAV_HEIGHT = 65;

export const DEFAULT_TITLE = "Hiranmaya Gundu- Software developer";

const DEFAULT_DESCRIPTION = "Hiranmaya Gundu's personal website";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Nav />
          <Head title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} />
          <Flex
            flexDirection={["column", "row"]}
            alignItems="center"
            justifyContent="center"
          >
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
          </Flex>
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}

export default MyApp;
