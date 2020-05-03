import React from "react";
import NextHead from "next/head";
import Terser from "terser";
import { setColorsByTheme } from "./SetColorsByTheme";
import { COLORS } from "./Constants";

interface HeadProps {
  title: string;
  description: string;
}

const COLOR_MODE_KEY = "color-mode";
const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";

// This is from https://joshwcomeau.com/gatsby/dark-mode/.
// It is a fantastic blog post on how to avoid the
// horrible flash effect when having themes in SSG.
const autoColorModeScript = (): string => {
  const boundFn = String(setColorsByTheme)
    .replace('"🌈"', JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;

  const minifiedCode = Terser.minify(calledFunction).code;
  calledFunction = minifiedCode ? minifiedCode : "";
  return calledFunction;
};

const fallbackStyles = (): string => {
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`;
    },
    ""
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return wrappedInSelector;
};

const HeadComponent: React.FC<HeadProps> = props => {
  const colorModeScript = autoColorModeScript();
  const fallbackColors = fallbackStyles();
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title ? `${props.title}` : "unkown page"}</title>
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://use.typekit.net/mpp0kzs.css"></link>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/images/favicon.ico"
      />
      <link
        rel="icon"
        sizes="192x192"
        href="/static/images/android-chrome-192x192.png"
      />
      <link rel="apple-touch-icon" href="/static/images/apple-touch-icon.png" />
      <style>{fallbackColors}</style>
      <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />
    </NextHead>
  );
};

export default HeadComponent;
