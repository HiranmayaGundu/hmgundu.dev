import Link from "./Link";
import { H2 } from "./Heading";
import P from "./Paragraph";
import PublishedAt from "./PublishedAt";
import { Box, Flex } from "rebass/styled-components";

interface PostProps {
  title: string;
  summary: string;
  date: string;
  path: string;
}

const Post: React.FC<PostProps> = props => (
  <Box as="article" mb={5}>
    <Box as="header" mb={3}>
      <Link href={props.path}>
        <H2>{props.title}</H2>
      </Link>
      <Flex mt={2}>
        <PublishedAt link={props.path} date={props.date} />
      </Flex>
    </Box>
    <P>{props.summary}</P>
  </Box>
);
export default Post;
