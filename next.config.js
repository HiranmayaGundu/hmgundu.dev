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

const bundleAnalyzerConfig = withBundleAnalyzer(
  withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    reactStrictMode: true,
  })
);

const config = {
  ...bundleAnalyzerConfig,
  compiler: {
    styledComponents: true,
  },
};

module.exports = config;
