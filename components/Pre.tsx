import { Box } from "rebass/styled-components";
import styled from "styled-components";

export default styled(Box).attrs({
  as: "pre",
  p: 3,
  mb: 3,
  fontSize: "15px"
})`
  display: block;
  white-space: pre;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
  border-radius: 3px;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  line-height: 1.3;
  font-family: "Source Code Pro", "Courier New", monospace;
`;
