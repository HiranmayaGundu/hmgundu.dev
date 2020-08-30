/* eslint-disable @typescript-eslint/no-var-requires */
const remarkSlug = require("remark-slug");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSlug],
  },
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withTM = require("next-transpile-modules")(["lodash-es"]);

module.exports = withBundleAnalyzer(
  withMDX(
    withTM({
      pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
      experimental: {
        productionBrowserSourceMaps: true,
      },
    })
  )
);
