import { H1, H2, H3, H4 } from "./Heading";
import Link from "./Link";
import P from "./Paragraph";
import styled from "styled-components";
import { UnorderedList, OrderedList, ListItem } from "./ListComponents";
import { CodeBlock, InlineCode } from "./CodeBlock";
import Pre from "./Pre";

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

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  a: MarkdownLink,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  pre: Pre,
  code: CodeBlock,
  inlineCode: InlineCode,
  hr: StyledHr
};
