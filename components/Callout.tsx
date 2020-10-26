import * as React from "react";
import { ChildrenOnlyProps } from "./Constants";
import { Text } from "rebass/styled-components";

interface CalloutVariant {
  variant?: "info" | "warning" | "danger";
}

const Callout = ({
  variant = "info",
  ...rest
}: ChildrenOnlyProps & CalloutVariant) => (
  <Text
    as="aside"
    fontSize={[0, 1]}
    lineHeight={1.6}
    fontFamily="body"
    fontWeight="light"
    my={[2, 3]}
    {...rest}
    sx={{
      borderLeft: `5px solid var(--color-callout-border-${variant})`,
      backgroundColor: `var(--color-callout-background-${variant})`,
    }}
    p={[1, 2]}
  />
);

export default Callout;
