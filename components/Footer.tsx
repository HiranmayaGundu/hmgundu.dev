import GitHub from "@material-ui/icons/GitHub";
import { css } from "styled-components";
import Twitter from "@material-ui/icons/Twitter";
import { Flex } from "rebass";
import { ReactNode, ReactType } from "react";
import Text from "./Text";
import Link from "./Link";
import Layout from "./Layout";

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

const FooterColumn: React.FC<FooterColumnProps> = props => {
  return (
    <Flex
      flexDirection="column"
      flex={1}
      mb={4}
      mr={props?.last === true ? 0 : 4}
    >
      <Text mb={3} fontWeight="bold" color="#FFF">
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
  prefetch
}) => {
  return (
    <Text as="div" my={1} color="#FFF">
      <Link href={href} rel={rel} prefetch={prefetch} underline>
        {IconComp && <IconComp />}
        {children}
      </Link>
    </Text>
  );
};

const Footer: React.FC<{}> = () => (
  <Flex
    py={5}
    mt={5}
    as="footer"
    bg="#fff"
    css={css`
      border-top: 1px solid rgba(255, 255, 255, 0.6);
    `}
  >
    <Layout width={[1, 0.5]}>
      <Flex flexDirection={["column", "row"]}>
        <FooterColumn title="About this website">
          <Text color="#FFF" lineHeight={1.5}>
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
            <br />
            View the source on GitHub
          </FooterItem>
          <FooterItem
            href="https://twitter.com/newblockk"
            IconComp={Twitter}
            rel="me"
          >
            <br />
            You can follow me on twitter, though I don&apos;t do much there
          </FooterItem>
        </FooterColumn>
      </Flex>
    </Layout>
  </Flex>
);

export default Footer;
