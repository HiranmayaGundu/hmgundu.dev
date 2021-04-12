import { Box, BoxProps } from "rebass/styled-components";
import { CSSProp } from "styled-components";

const Content = (props: BoxProps & { css?: CSSProp }): JSX.Element => (
  <Box
    bg="var(--color-secondary-background)"
    as="article"
    sx={{
      boxShadow: "0 4px 6px var(--color-box-shadow)",
      overflow: "hidden",
      borderRadius: 8,
      maxWidth: ["24em", "45em", "58em"],
    }}
    {...props}
  />
);

export default Content;
