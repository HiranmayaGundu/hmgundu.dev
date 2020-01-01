import React from "react";
import Main from "../components/Main";
import Text from "../components/Text";

const Blog: React.FC<{}> = () => {
  return (
    <Main>
      <Text
        as="h1"
        fontSize={[3, 5]}
        fontWeight="bold"
        lineHeight="heading"
        mb={3}
      >
        Blog
      </Text>
    </Main>
  );
};

export default Blog;
