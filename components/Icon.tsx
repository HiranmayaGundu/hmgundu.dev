import styled, { ThemedStyledProps } from "styled-components";
import { PropsWithChildren } from "react";
import { Box, BoxProps } from "rebass/styled-components";

export default styled(Box).attrs(
  (props: ThemedStyledProps<PropsWithChildren<BoxProps>, any>) => ({
    ml: typeof props.ml === "number" ? props.ml : 1,
    css: {
      verticalAlign:
        typeof props.verticalAlign === "string"
          ? props.verticalAlign
          : "middle",
      display: "inline-block",
      ...(props.css as object),
    },
  })
)``;
