import rehypeSlug from "rehype-slug";
import rehypePrism from "mdx-prism";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Linting is handled by oxlint (`npm run lint`); never let Next.js builds
  // depend on ESLint being installed.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeSlug, rehypePrism],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
