import React from "react";
import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

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
    text: colors.black,
    background: "rgb(246, 247, 248)",
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

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background-color: rgb(246, 247, 248);
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

// const NAV_HEIGHT: number = 65;

export const DEFAULT_TITLE: string = "Hiranmaya Gundu- Software developer";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}

export default MyApp;
