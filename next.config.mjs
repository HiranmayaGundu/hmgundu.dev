import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired.
  // NOTE: plugins must be referenced by package NAME (string), not imported
  // function. @next/mdx resolves string references at compile time, and
  // Turbopack requires loader options to be serializable - imported
  // functions fail the build with "does not have serializable options".
  // Tuple form [name, options] is supported; options must be plain JSON.
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      "rehype-slug",
      [
        "@shikijs/rehype",
        { themes: { light: "night-owl-light", dark: "night-owl" } },
      ],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
