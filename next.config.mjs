/* eslint-disable @typescript-eslint/no-var-requires */
import remarkSlug from "remark-slug";
import mdx from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSlug],
    providerImportSource: "@mdx-js/react",
  },
});

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const bundleAnalyzerConfig = withBundleAnalyzer(
  withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  })
);

const config = {
  ...bundleAnalyzerConfig,
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
};

export default config;
