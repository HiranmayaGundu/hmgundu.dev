import fs from "fs";
import path from "path";

export interface PostInterface {
  title: string;
  summary: string;
  publishedAt: string;
  path: string;
}

export const getPosts = (): PostInterface[] => {
  const postsDir = path.join(process.cwd(), "/pages/posts/");
  const META = /export\s+const\s+meta\s+=\s+(\{(\r\n|\n|.)*?(\r\n|\n)\})/;
  const arrOfPosts = fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith("md") || file.endsWith("mdx"));
  const posts: PostInterface[] = arrOfPosts
    .map((file, index) => {
      const name = path.join(postsDir, file);
      const contents = fs.readFileSync(name, "utf-8");
      const match = META.exec(contents);
      if (!match || typeof match[1] !== "string") {
        throw new Error(`${name} needs to export const meta = {}`);
      }
      const meta = eval("(" + match[1] + ")");
      return {
        ...meta,
        path:
          postsDir.replace(process.cwd() + "/pages", "") +
          file.replace(/\.mdx?$/, ""),
        index,
      };
    })
    .filter((meta) => meta.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  return posts;
};
