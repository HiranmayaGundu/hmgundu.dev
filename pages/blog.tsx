import React from "react";
import { GetStaticProps } from "next";
import paginaton from "pagination";
import _range from "lodash.range";
import Mark from "components/Mark";
import { H1 } from "components/Heading";
import Post from "components/Post";
import { NextPage } from "next";
import fs from "fs";
import path from "path";
interface BlogProps {
  page: number;
  posts: PostInterface[];
}

interface PostInterface {
  title: string;
  summary: string;
  publishedAt: string;
  path: string;
}

const Blog: NextPage<BlogProps> = ({ posts, page = 1 }) => {
  const paginator = new paginaton.SearchPaginator({
    prelink: "/",
    current: page,
    rowsPerPage: 8,
    totalResult: posts.length,
  });
  const { fromResult, toResult } = paginator.getPaginationData();
  const results = _range(fromResult - 1, toResult);

  return (
    <>
      <H1>
        <Mark>Blog</Mark>
      </H1>
      {/* @ts-ignore */}
      {posts
        .filter(
          (post: PostInterface, index: number) =>
            post && results.indexOf(index) > -1
        )
        .map((post: PostInterface, index: number) => (
          <Post
            key={index}
            title={post.title}
            summary={post.summary}
            date={post.publishedAt}
            path={post.path}
          />
        ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
  return {
    props: {
      posts,
    },
  };
};
export default Blog;
