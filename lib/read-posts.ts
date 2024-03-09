import fs from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";

const postsDir = path.join(process.cwd(), "app", "posts");

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
        throw new Error(`${name} needs to export const meta = {}`);
      }
      const metadata = eval("(" + match[1] + ")");
      return {
        metadata,
        slug: file.split("/")[0],
      };
    })
  );

  const sortedPosts = posts
    .filter((posts) => posts.metadata?.published)
    .sort(
      (a, b) =>
        new Date(b.metadata?.publishedAt).getTime() -
        new Date(a.metadata?.publishedAt).getTime()
    );

  return sortedPosts;
}
