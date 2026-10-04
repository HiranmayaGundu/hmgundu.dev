import fs from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";
import JSON5 from "json5";

const postsDir = path.join(process.cwd(), "app", "blog", "(posts)");

const META = /export\s+const\s+metadata\s+=\s+(\{(\r\n|\n|.)*?(\r\n|\n)\})/;

export async function readPosts() {
  // const files = await fs.readdir(postsDir);
  const files = await fg("**/*.mdx", { cwd: postsDir });

  const posts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(postsDir, file);
      const contents = await fs.readFile(filePath, "utf-8");
      const match = META.exec(contents);
      if (!match || typeof match[1] !== "string") {
        throw new Error(`${file} needs to export const metadata = {}`);
      }
      const metadata = JSON5.parse(match[1]);
      return {
        metadata,
        slug: file.split("/")[0],
      };
    }),
  );

  const sortedPosts = posts
    .filter((post) => post.metadata?.published)
    .toSorted(
      (a, b) =>
        new Date(b.metadata?.publishedAt).getTime() -
        new Date(a.metadata?.publishedAt).getTime(),
    );

  return sortedPosts;
}
