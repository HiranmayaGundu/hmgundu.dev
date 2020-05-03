import * as React from "react";
import Text from "./Text";
import { Box, TextProps } from "rebass/styled-components";
import styled from "styled-components";

const Wrapper = styled(Box)`
  width: 100%;
`;

const Paragraph: React.FC<TextProps> = ({ fontWeight = "light", ...other }) => {
  return (
    <Wrapper>
      <Text fontWeight={fontWeight} fontSize={1} lineHeight={1.6} {...other} />
    </Wrapper>
  );
};

export default Paragraph;
