import * as React from "react";
import Text from "./Text";
import { TextProps } from "rebass/styled-components";

const Paragraph: React.FC<TextProps> = ({ fontWeight = "light", ...other }) => {
  return (
    <Text
      fontWeight={fontWeight}
      fontSize={[0, 1]}
      lineHeight={1.6}
      {...other}
    />
  );
};

export default Paragraph;
