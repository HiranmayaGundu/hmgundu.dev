import { H1, H2, H3, H4 } from "./Heading";
import Link from "./Link";
import P from "./Paragraph";
import styled from "styled-components";
import { UnorderedList, OrderedList, ListItem } from "./ListComponents";
import { CodeBlock, InlineCode } from "./CodeBlock";
import { HeadingProps } from "rebass";

const MarkdownLink = styled(Link)`
  color: ${(props): string => props.theme.colors.textLink};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
const StyledHr = styled.hr`
  margin-top: 16px;
  border-top: 1px solid ${(props): string => props.theme.colors.text};
`;

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
  hr: StyledHr,
};
