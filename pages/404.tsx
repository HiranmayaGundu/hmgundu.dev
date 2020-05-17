import { H1, H2 } from "components/Heading";
import Link from "components/Link";
import { Flex, Box } from "rebass/styled-components";
import { NAV_HEIGHT } from "components/Constants";
import Layout from "components/Layout";
import Head from "components/Head";
const Custom404: React.FC<{}> = () => {
  return (
    <>
      <Head title="404 page" />
      <Layout
        pt={[`${NAV_HEIGHT}px`, `${NAV_HEIGHT / 2}px`]}
        pl={[3, 4]}
        pr={[3, 4]}
      >
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
    </>
  );
};

export default Custom404;
