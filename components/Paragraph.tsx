import React, { useContext } from "react";
import Text from "./Text";
import { Box, TextProps } from "rebass/styled-components";
import styled, { ThemeContext } from "styled-components";

const Wrapper = styled(Box)`
  width: 100%;
`;

const Paragraph: React.FC<TextProps> = props => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      <Text fontSize={theme.fontSizes[1]} lineHeight={1.6} {...props} />
    </Wrapper>
  );
};

export default Paragraph;
