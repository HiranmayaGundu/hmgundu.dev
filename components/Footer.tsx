import { Twitter, GitHub } from "react-feather";
import { Flex } from "rebass/styled-components";
import { ReactNode, ReactType } from "react";
import Text from "./Text";
import Link from "./Link";
import Layout from "./Layout";
import Icon from "./Icon";
import { css } from "styled-components";
import { TwoColumnGrid } from "./TwoColumnGrid";

interface FooterColumnProps {
  title: string;
  width?: number;
  last?: boolean;
  children: ReactNode;
}

interface FooterItemProps {
  IconComp?: ReactType;
  children: ReactNode;
  href: string;
  rel?: string;
  prefetch?: boolean;
}
const textColor = css`
  color: var(--color-text);
`;
const FooterColumn: React.FC<FooterColumnProps> = (props) => {
  return (
    <Flex
      flexDirection="column"
      flex={1}
      mb={4}
      mr={props?.last === true ? 0 : 4}
    >
      <Text mb={3} fontWeight="bold">
        {props.title}
      </Text>
      {props.children}
    </Flex>
  );
};

const FooterItem: React.FC<FooterItemProps> = ({
  IconComp,
  href,
  rel,
  children,
  prefetch,
}) => {
  return (
    <Text as="div" my={1}>
      <Link
        href={href}
        rel={rel}
        prefetch={prefetch}
        underline
        external
        css={textColor}
      >
        {IconComp && (
          <Icon mr={2} ml={0}>
            <IconComp size="1em" />
          </Icon>
        )}
        {children}
      </Link>
    </Text>
  );
};

const Footer: React.FC<{}> = () => {
  return (
    <Layout pt={5} pl={[3, 4]} pr={[3, 4]}>
      <TwoColumnGrid>
        <FooterColumn title="About this website">
          <Text lineHeight={1.5}>
            This is my website! I&apos;m Hiranmaya Gundu, a dev exploring web,
            systems and AI trying to decide where to land. This is my personal
            blog!
          </Text>
        </FooterColumn>
        <FooterColumn last title="Social Media">
          <FooterItem
            href="https://github.com/HiranmayaGundu/hmgundu.dev"
            IconComp={GitHub}
            rel="me"
          >
            View the source on GitHub
          </FooterItem>
          <FooterItem
            href="https://twitter.com/hiranmayagundu"
            IconComp={Twitter}
            rel="me"
          >
            You can follow me on twitter, though I don&apos;t do much there
          </FooterItem>
        </FooterColumn>
      </TwoColumnGrid>
    </Layout>
  );
};

export default Footer;
