import { Box } from "rebass/styled-components";
import styled from "styled-components";

export default styled(Box).attrs({
  as: "pre",
  p: 3,
  mb: 3,
})`
  display: block;
  white-space: pre;
  border-radius: 3px;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  line-height: 1.3;
  font-family: var(--fonts-monospace);
  overflow: auto;
`;
