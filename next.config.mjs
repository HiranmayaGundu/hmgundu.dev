import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactCompiler: true,
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      "rehype-slug",
      [
        "@shikijs/rehype",
        { themes: { light: "catppuccin-latte", dark: "night-owl" } },
      ],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
