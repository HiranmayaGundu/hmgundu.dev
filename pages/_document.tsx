import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import Terser from "terser";
import { setColorsByTheme } from "components/SetColorsByTheme";
import { COLORS } from "components/Constants";

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

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const colorModeScript = autoColorModeScript();
    const fallbackColors = fallbackStyles();
    return (
      <Html lang="en">
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'MonoLisa';
                src: url('fonts/Lemonada/MonoLisa-Regular.woff2') format('woff2'),
                  url('fonts/Lemonada/MonoLisa-Regular.woff') format('woff');
                font-weight: regular;
                font-style:	normal;
              }
              @font-face {
                font-family: 'MonoLisa';
                src: url('fonts/Lemonada/MonoLisa-Bold.woff2') format('woff2'),
                  url('fonts/Lemonada/MonoLisa-Bold.woff') format('woff');
                font-weight: bold;
                font-style:	normal;
              }
              @font-face {
                font-family: 'MonoLisa';
                src: url('fonts/Lemonada/MonoLisa-BoldItalic.woff2') format('woff2'),
                  url('fonts/Lemonada/MonoLisa-BoldItalic.woff') format('woff');
                font-weight: bold;
                font-style:	italic;
              }
              @font-face {
                font-family: 'MonoLisa';
                src: url('fonts/Lemonada/MonoLisa-RegularItalic.woff2') format('woff2'),
                  url('fonts/Lemonada/MonoLisa-RegularItalic.woff') format('woff');
                font-weight: regular;
                font-style:	italic;
              }
              `,
            }}
          />
          <style>{fallbackColors}</style>
          <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
