import path from "path";
import fs from "fs";

const POSTS_DIR = path.join(process.cwd(), "/pages/notes");
const META = /export\s+const\s+meta\s+=\s+(\{(\r\n|\n|.)*?(\r\n|\n)\})/;

const fileFilter = (file: string): boolean => {
  return file.endsWith(".md") || file.endsWith(".mdx");
};

function getFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter(fileFilter);
}

function getContentFromFiles(arr: string[], dir: string): any[] {
  return arr
    .map((file: string, index: number): any => {
      const name: string = path.join(dir, file);
      const contents: string = fs.readFileSync(name, "utf-8");
      const match: RegExpExecArray | null = META.exec(contents);
      if (!match || typeof match[1] !== "string") {
        throw new Error(`${name} needs to export const meta = {}`);
      }

      const meta: any = eval("(" + match[1] + ")");
      return {
        ...meta,
        path:
          dir.replace(process.cwd() + "/pages", "") +
          file.replace(/\.mdx?$/, ""),
        index
      };
    })
    .filter(meta => meta.published)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

const arrOfPosts: string[] = getFiles(POSTS_DIR);

const posts: any[] = getContentFromFiles(arrOfPosts, POSTS_DIR);

module.exports = {
  posts
};
