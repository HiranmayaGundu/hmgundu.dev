import React from "react";
import { GetStaticProps } from "next";
import styled, { keyframes } from "styled-components";
import Text from "components/Text";
import { H1, H2, H4 } from "components/Heading";
import Gonds from "components/Gonds";
import Mark from "components/Mark";
import Layout from "components/Layout";
import SectionDivider from "components/SectionDivider";
import { TwoColumnGrid } from "components/TwoColumnGrid";
import Link from "components/Link";
import SecondarySectionDivider from "components/SecondarySectionDivider";
import { NAV_HEIGHT } from "components/Constants";
import { PostInterface, getPosts } from "functions/ReadPosts";
import { Box } from "rebass/styled-components";
import { ChildrenOnlyProps } from "components/Constants";

const PrimarySection = styled.div`
  background-color: var(--color-primary-background);
`;
const SecondarySection = styled.div`
  background-color: var(--color-secondary-background);
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const GondsWrapper = styled.div`
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 5px;
  animation: 1s ${fadeIn} ease-out;
  @media screen and (max-width: 40em) {
    display: none;
  }
`;

const SectionDividerWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 325px;
  width: 100%;
`;

const SpacerDiv = styled.div`
  margin: 100px;
`;

const OneColumnGrid: React.FC<ChildrenOnlyProps> = (props) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridGap: [3, 4],
        gridTemplateColumns: "1fr",
      }}
      {...props}
    />
  );
};

interface IndexProps {
  posts: PostInterface[];
}

const Index: React.FC<IndexProps> = ({ posts }) => {
  return (
    <>
      <PrimarySection>
        <Layout
          pt={[`${NAV_HEIGHT}px`, `${NAV_HEIGHT / 2}px`]}
          pl={[3, 4]}
          pr={[3, 4]}
        >
          <TwoColumnGrid>
            <H1>
              Hi! I&apos;m <br /> <Mark>Hiranmaya Gundu</Mark>. 👋
            </H1>
            <GondsWrapper>
              <Gonds />
            </GondsWrapper>
          </TwoColumnGrid>
        </Layout>
        <SpacerDiv />
      </PrimarySection>
      <SectionDividerWrapper>
        <SectionDivider />
      </SectionDividerWrapper>
      <SecondarySection>
        <Box mt={["-60px", "-30px"]} />
        <Layout pl={[3, 4]} pr={[3, 4]}>
          <Text as="p" pb={[2, 4]} pt={5} fontSize={[2, 3]} lineHeight={1.6}>
            I&apos;m a software engineer from India, who&apos;s currently
            exploring the different fields Computer Science has to offer. This
            website was born from the desire to build a personal blog, as well
            as a desire to explore static server-rendered sites in React. You
            can find more details in the blogs!
          </Text>
          <Text as="p" pb={[2, 4]} fontSize={[2, 3]} lineHeight={1.6}>
            You can follow me on{" "}
            <Link href="https://twitter.com/hiranmayagundu">Twitter</Link>, if
            you like.
          </Text>
        </Layout>
      </SecondarySection>
      <SecondarySectionDivider />
      <PrimarySection>
        <Box mt={["-40px", "-80px", "-120px"]} />
        <Layout pl={[3, 4]} pr={[3, 4]}>
          <H2>Recently Published</H2>
          <OneColumnGrid>
            {posts.slice(0, 3).map((post: PostInterface) => (
              <div key={post.title}>
                <Link href={post.path}>
                  <H4>{post.title}</H4>
                  <Text as="p" fontSize={[0, 1]}>
                    {post.summary}
                  </Text>
                </Link>
              </div>
            ))}
          </OneColumnGrid>
        </Layout>
      </PrimarySection>
      <Box mb={5} />
    </>
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

export default Index;
