import React from "react";
import { GetStaticProps } from "next";
import paginaton from "pagination";
import _range from "lodash.range";
import Mark from "components/Mark";
import { H1 } from "components/Heading";
import Post from "components/Post";
import Layout from "components/Layout";
import { NAV_HEIGHT } from "components/Constants";
import { NextPage } from "next";
import { PostInterface, getPosts } from "functions/ReadPosts";
interface BlogProps {
  page: number;
  posts: PostInterface[];
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
    <Layout
      pt={[`${NAV_HEIGHT}px`, `${NAV_HEIGHT / 2}px`]}
      pl={[3, 4]}
      pr={[3, 4]}
    >
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
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};
export default Blog;
