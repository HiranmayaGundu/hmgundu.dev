import styled from "styled-components";
import { Box } from "rebass/styled-components";

const Content = styled(Box)`
  background-color: var(--color-secondary-background);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px var(--color-box-shadow);
  max-width: 900px;
`;

export default Content;
