import { H1, H2 } from "components/Heading";
import Link from "components/Link";
import Main from "components/Main";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { Flex, Box } from "rebass/styled-components";
const Custom404: React.FC<{}> = () => {
  const theme = useContext(ThemeContext);
  const css = `color: ${theme.colors.textLink}`;
  return (
    <Main>
      <H2>
        Yikes. The page you were looking for does not exist. <br />
        <Flex alignItems="center" justifyContent="center">
          <Box>
            <H1>😲</H1>
          </Box>
        </Flex>
        <br />
        Why not go{" "}
        <Link href="/" css={css}>
          here
        </Link>{" "}
        instead?
      </H2>
    </Main>
  );
};

export default Custom404;
