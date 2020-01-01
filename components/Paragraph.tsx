import React from "react";
import Text from "./Text";
import { Box, TextProps } from "rebass/styled-components";
import styled from "styled-components";

const Wrapper = styled(Box)`
  width: 100%;
`;

const Paragraph: React.FC<TextProps> = props => (
  <Wrapper>
    <Text fontSize="18px" lineHeight={1.6} {...props} />
  </Wrapper>
);

export default Paragraph;
