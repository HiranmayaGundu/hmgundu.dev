import React from "react";
import paginaton from "pagination";
import _range from "lodash.range";
import Main from "../components/Main";
import { H1 } from "../components/Heading";
import Post from "../components/Post";
import { NextPage } from "next";
import posts from "../posts/index";

interface BlogProps {
  page: number;
}

interface PostInterface {
  title: string;
  summary: string;
  publishedAt: string;
  path: string;
}

const Blog: NextPage<BlogProps> = ({ page = 1 }) => {
  const paginator = new paginaton.SearchPaginator({
    prelink: "/",
    current: page,
    rowsPerPage: 8,
    totalResult: posts.length
  });
  const { fromResult, toResult } = paginator.getPaginationData();
  const results = _range(fromResult - 1, toResult);

  return (
    <Main>
      <H1>Blog</H1>
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
    </Main>
  );
};
export default Blog;
