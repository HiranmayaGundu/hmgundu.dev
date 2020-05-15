import React from "react";
import styled from "styled-components";
import Text from "components/Text";
import { H1 } from "components/Heading";
import Gonds from "components/Gonds";
import Mark from "components/Mark";
import Layout from "components/Layout";
import SectionDivider from "components/SectionDivider";
import { TwoColumnGrid } from "components/TwoColumnGrid";

const PrimarySection = styled.div`
  background-color: var(--color-primary-background);
  height: 50%;
`;
const SecondarySection = styled.div`
  background-color: var(--color-secondary-background);
  height: 50%;
`;

const Index: React.FC<{}> = () => {
  return (
    <>
      <PrimarySection>
        <Layout>
          <TwoColumnGrid>
            <Gonds />
            <H1>
              Hi! I&apos;m <br /> <Mark>Hiranmaya Gundu</Mark>. 👋
            </H1>
          </TwoColumnGrid>
        </Layout>
      </PrimarySection>
      <SectionDivider />
      <SecondarySection>
        <Layout>
          <Text as="p" pb={[2, 4]} fontSize={[1, 3]} lineHeight={1.6}>
            I&apos;m a software engineer from India, who&apos;s currently
            exploring the different fields Computer Science has to offer. This
            website was born from the desire to build a personal blog, as well
            as a desire to explore static server-rendered sites in React. You
            can find more details in the blogs!
          </Text>
        </Layout>
      </SecondarySection>
    </>
  );
};

export default Index;
