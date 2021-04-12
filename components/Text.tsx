import { Text, TextProps } from "rebass/styled-components";
import { CSSProp } from "styled-components";

const StyledText = (props: TextProps & { css?: CSSProp }): JSX.Element => (
  <Text fontFamily="body" as="p" color="text" {...props} />
);

export default StyledText;
