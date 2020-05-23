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
import { GA_TRACKING_ID } from "functions/gtag";

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
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
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
