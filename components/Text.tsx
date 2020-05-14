import { Text, TextProps } from "rebass/styled-components";

const StyledText: React.FC<TextProps> = (props) => (
  <Text fontFamily="system" as="p" color="text" {...props} />
);

export default StyledText;
