import { Text, TextProps } from "rebass/styled-components";

const StyledText: React.FC<TextProps> = (props) => (
  <Text fontFamily="body" as="p" color="text" {...props} />
);

export default StyledText;
