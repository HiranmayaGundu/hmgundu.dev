import { Box, BoxProps } from "rebass";
import styled from "styled-components";

const Layout: React.FC<BoxProps> = styled(Box)`
  max-width: 550px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export default Layout;
