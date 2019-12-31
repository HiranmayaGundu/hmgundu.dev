import { Text, TextProps } from "rebass";

const StyledText: React.FC<TextProps> = props => (
  <Text fontFamily="system" as="p" color="text" {...props} />
);

export default StyledText;
