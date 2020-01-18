import React from "react";
import Text from "../components/Text";
import { H1 } from "../components/Heading";
import Main from "../components/Main";

const Index: React.FC<{}> = () => {
  return (
    <Main>
      <H1>Hi! I&apos;m Hiranmaya Gundu. 👋</H1>
      <Text as="p" mt={[2, 4]} fontSize={[1, 3]}>
        I&apos;m a software engineer from India, who&apos;s currently exploring
        the different fields Computer Science has to offer. This website was
        born from the desire to build a personal blog, as well as a desire to
        explore static server-rendered sites in React. You can find more details
        in the blogs!
      </Text>
    </Main>
  );
};

export default Index;
