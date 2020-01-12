import { H1, H2, H3, H4 } from "./Heading";
import Link from "./Link";
import P from "./Paragraph";
import { UnorderedList, OrderedList, ListItem } from "./ListComponents";
import { CodeBlock, InlineCode } from "./CodeBlock";
import Pre from "./Pre";

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  a: Link,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  pre: Pre,
  code: CodeBlock,
  inlineCode: InlineCode
};
