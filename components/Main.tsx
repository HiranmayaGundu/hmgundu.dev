import React from "react";
import { Flex, FlexProps } from "rebass";

const Main: React.FC<FlexProps> = props => (
  <Flex
    as="main"
    flexDirection="column"
    alignItems={["center", "flex-start"]}
    {...props}
  />
);

export default Main;
