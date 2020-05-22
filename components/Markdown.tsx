import * as React from "react";
import { H1, H2, H3, H4 } from "./Heading";
import Link from "./Link";
import P from "./Paragraph";
import styled from "styled-components";
import { UnorderedList, OrderedList, ListItem } from "./ListComponents";
import { CodeBlock, InlineCode } from "./CodeBlock";
import { HeadingProps, Flex, Box, BoxProps } from "rebass/styled-components";
import Layout from "./Layout";
import Content from "./Content";
import { NAV_HEIGHT } from "./Constants";
import InkBlot from "./InkBlot";

interface WrapperProps {
  children: React.ReactNode;
}

const HideBox: React.FC<BoxProps> = styled(Box)`
  @media screen and (max-width: 40em) {
    display: none;
  }
`;

const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <>
    <Content
      p={2}
      pb={5}
      mt={`${NAV_HEIGHT + 10}px`}
      ml="auto"
      mr="auto"
      mb="0"
    >
      <Layout pl={[3, 4]} pr={[3, 4]}>
        {children}
      </Layout>
    </Content>
  </>
);

const MarkdownLink = styled(Link)`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const Hr = () => (
  <Flex mt={[3, 4, 4]} justifyContent="center">
    <Box>
      <InkBlot height="40" width="40" />
    </Box>
    <Box>
      <InkBlot height="40" width="40" />
    </Box>
    <Box>
      <InkBlot height="40" width="40" />
    </Box>
  </Flex>
);

const heading = (Tag: React.ComponentType<HeadingProps>) => (
  props: HeadingProps
): JSX.Element => (
  <Tag {...props}>
    <Link href={`#${props.id}`}>{props.children}</Link>
  </Tag>
);

export default {
  h1: heading(H1),
  h2: heading(H2),
  h3: heading(H3),
  h4: heading(H4),
  p: P,
  a: MarkdownLink,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  code: CodeBlock,
  inlineCode: InlineCode,
  hr: Hr,
  wrapper: Wrapper,
};
