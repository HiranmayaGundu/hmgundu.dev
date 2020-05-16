import { H1, H2 } from "components/Heading";
import Link from "components/Link";
import Main from "components/Main";
import { Flex, Box } from "rebass/styled-components";
import Layout from "components/Layout";
const Custom404: React.FC<{}> = () => {
  return (
    <Main>
      <Layout>
        <H2>
          Yikes. The page you were looking for does not exist. <br />
          <Flex alignItems="center" justifyContent="center">
            <Box>
              <H1>😲</H1>
            </Box>
          </Flex>
          <br />
          Why not go <Link href="/">here</Link> instead?
        </H2>
      </Layout>
    </Main>
  );
};

export default Custom404;
