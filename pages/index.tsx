import React from "react";
import Text from "../components/Text";
import Main from "../components/Main";

const Index: React.FC<{}> = () => {
  return (
    <Main>
      <Text
        as="h1"
        fontSize={[3, 5]}
        fontWeight="bold"
        lineHeight="heading"
        mb={3}
        color="#FFF"
      >
        Hi! I&apos;m Hiranmaya Gundu.
      </Text>
      <Text as="p" mt={[2, 4]} fontSize={[1, 3]} color="#FFF">
        I&apos;m a software engineer from India, who&apos;s currently exploring
        the different fields Computer has to offer. This website was born from
        the desire to build a personal blog, as well as a desire to explore
        static server-rendered sites in React. You can find more details in the
        blogs!
      </Text>
    </Main>
  );
};

export default Index;
