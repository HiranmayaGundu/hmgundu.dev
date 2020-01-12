/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const fs = require("fs");

console.log(process.cwd());
const POSTS_DIR = path.join(process.cwd(), "/pages/posts/");
const META = /export\s+const\s+meta\s+=\s+(\{(\r\n|\n|.)*?(\r\n|\n)\})/;

const fileFilter = file => {
  return file.endsWith(".md") || file.endsWith(".mdx");
};

function getFiles(dir) {
  console.log("getting files");
  return fs.readdirSync(dir).filter(fileFilter);
}

function getContentFromFiles(arr, dir) {
  return arr
    .map((file, index) => {
      const name = path.join(dir, file);
      const contents = fs.readFileSync(name, "utf-8");
      const match = META.exec(contents);
      if (!match || typeof match[1] !== "string") {
        throw new Error(`${name} needs to export const meta = {}`);
      }
      const meta = JSON.parse(match[1]);
      console.log("path is", dir.replace(process.cwd() + "/pages"));
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

const arrOfPosts = getFiles(POSTS_DIR);

const posts = getContentFromFiles(arrOfPosts, POSTS_DIR);

module.exports = {
  posts
};
