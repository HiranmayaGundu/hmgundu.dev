import React from "react";
import { GetStaticProps } from "next";
import styled, { keyframes } from "styled-components";
import Text from "components/Text";
import { H1, H2, H3 } from "components/Heading";
import Gonds from "components/Gonds";
import Mark from "components/Mark";
import Layout from "components/Layout";
import SectionDivider from "components/SectionDivider";
import { TwoColumnGrid } from "components/TwoColumnGrid";
import Link from "components/Link";
import SecondarySectionDivider from "components/SecondarySectionDivider";
import { NAV_HEIGHT } from "components/Constants";
import { PostInterface, getPosts } from "functions/ReadPosts";
import { Box, BoxProps } from "rebass/styled-components";
import { ChildrenOnlyProps } from "components/Constants";
import Head from "components/Head";
import { textColor } from "components/textColor";
import { useSpring, a } from "@react-spring/web";
import LinkTooltip from "components/Tooltip";

const PrimarySection = styled.div`
  background-color: var(--color-primary-background);
`;
const SecondarySection = styled.div`
  background-color: var(--color-secondary-background);
`;

const GondsWrapper = styled.div`
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 5px;
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

const shake = keyframes`
  10%, 90% {
    transform: rotate(15deg);
  }
  
  20%, 80% {
    transform: rotate(-15deg);
  }

  30%, 50%, 70% {
    transform: rotate(15deg);
  }

  40%, 60% {
    transform: rotate(-15deg);
  }
`;

const ShakeAnimation = styled.div`
  animation-delay: 2s;
  animation: 3s ${shake} ease-out;
  display: inline-block;
  cursor: default;
  :hover {
    animation: ${shake} 3s ease-in-out infinite alternate;
  }
`;

const HideBox: React.FC<BoxProps> = styled(Box)`
  @media (max-width: 630px) and (min-width: 530px) {
    display: none;
  }
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
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <Head
        title="Hi I'm Hiranmaya Gundu 👋"
        description="Hi! I'm Hiranmaya Gundu, and this is my personal weblog."
      />
      <PrimarySection>
        <Layout
          pt={[`${NAV_HEIGHT}px`, `${NAV_HEIGHT / 2}px`]}
          pl={[3, 4]}
          pr={[3, 4]}
        >
          <TwoColumnGrid>
            <H1 fontSize={5}>
              Hi! I&apos;m <br /> <Mark>Hiranmaya Gundu</Mark>.{" "}
              <ShakeAnimation>👋</ShakeAnimation>
            </H1>
            <a.div style={springProps}>
              <GondsWrapper>
                <Gonds />
              </GondsWrapper>
            </a.div>
          </TwoColumnGrid>
        </Layout>
        <SpacerDiv />
      </PrimarySection>
      <SectionDividerWrapper>
        <SectionDivider />
      </SectionDividerWrapper>
      <SecondarySection>
        <HideBox mt={["-60px", "0px"]} />
        <Layout pl={[3, 4]} pr={[3, 4]}>
          <Text
            as="p"
            pb={[2, 4]}
            pt={[5, 5]}
            fontSize={[2, 3]}
            lineHeight={1.6}
          >
            I&apos;m a Software Engineer at{" "}
            <LinkTooltip href="https://www.sigmacomputing.com/">
              <Link href="https://www.sigmacomputing.com/">
                Sigma Computing
              </Link>
            </LinkTooltip>
            , working on building a better business intelligence tool. This
            website is my personal blog, where I write about software
            development, testing, Kubernetes and anything else I find
            interesting in the field of software!
          </Text>
          <Text as="p" pb={[2, 4]} fontSize={[2, 3]} lineHeight={1.6}>
            You can follow me on{" "}
            <LinkTooltip href="https://twitter.com/hiranmayagundu">
              <Link href="https://twitter.com/hiranmayagundu">Twitter</Link>
            </LinkTooltip>
            .
          </Text>
        </Layout>
      </SecondarySection>
      <SecondarySectionDivider />
      <PrimarySection>
        <Box mt={["-40px", "-80px", "-120px"]} />
        <Layout pl={[3, 4]} pr={[3, 4]}>
          <H2 fontSize={4}>Recently Published</H2>
          <OneColumnGrid>
            {posts.slice(0, 3).map((post: PostInterface) => (
              <Link css={textColor} href={post.path} key={post.title}>
                <H3 fontSize={2}>{post.title}</H3>
                <Text as="p" fontSize={[0, 1]}>
                  {post.summary}
                </Text>
              </Link>
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
