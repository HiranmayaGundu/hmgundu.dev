import styled, { css } from "styled-components";
import { Box, TextProps } from "rebass/styled-components";
import Paragraph from "./Paragraph";

const baseListStyles = css`
  padding-left: 1em;
  list-style: initial;
  list-style-position: outside;
`;

export const UnorderedList = styled(Box).attrs({
  as: "ul",
  mb: 3,
})`
  ${baseListStyles};
`;
export const OrderedList = styled(Box).attrs({
  as: "ol",
  mb: 3,
})`
  ${baseListStyles};
  list-style: decimal;
`;

export const ListItem: React.FC<TextProps> = (props) => (
  <Paragraph style={{ fontSize: "18px" }} my={1} {...props} as="li" />
);
