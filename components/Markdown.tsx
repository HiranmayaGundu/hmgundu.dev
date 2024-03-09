import * as React from "react";
import { H1, H2, H3, H4 } from "./Heading";

import P from "./Paragraph";
import styled, { CSSProp } from "styled-components";
import { UnorderedList, OrderedList, ListItem } from "./ListComponents";
import { Code } from "./CodeBlock";
import { HeadingProps, Flex, Box } from "rebass/styled-components";
import InkBlot from "./ink-blot";
import Callout from "./Callout";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => (
  <>
    <article>
      <main>{children}</main>
    </article>
  </>
);

const MarkdownLink = styled.a`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const Hr = (): JSX.Element => (
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

// eslint-disable-next-line react/display-name
const heading =
  (Tag: React.ComponentType<HeadingProps & { css?: CSSProp }>) =>
  // eslint-disable-next-line react/display-name
  (props: HeadingProps & { css?: CSSProp }): JSX.Element => (
    <Tag {...props}>
      <a href={`#${props.id}`}>{props.children}</a>
    </Tag>
  );

const Strong = <strong />;

const Emphasis = <em />;

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
  code: Code,
  hr: Hr,
  wrapper: Wrapper,
  strong: Strong,
  em: Emphasis,
  blockquote: Callout,
};
