import * as React from "react";
import Text from "./Text";
import { TextProps } from "rebass/styled-components";
import { CSSProp } from "styled-components";

const Paragraph = ({
  fontWeight = "light",
  ...other
}: TextProps & { css?: CSSProp }): JSX.Element => {
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
