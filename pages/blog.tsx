import React from "react";
import paginaton from "pagination";
import _range from "lodash.range";
import Main from "../components/Main";
import Text from "../components/Text";
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
      <Text
        as="h1"
        fontSize={[3, 5]}
        fontWeight="bold"
        lineHeight="heading"
        mb={3}
      >
        Blog
      </Text>
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
