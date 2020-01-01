import { Twitter, GitHub } from "react-feather";
import { Flex } from "rebass/styled-components";
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
    <Text as="div" my={1} color="#F2DFDF">
      <Link href={href} rel={rel} prefetch={prefetch} underline>
        {IconComp && <IconComp />}
        {children}
      </Link>
    </Text>
  );
};

const Footer: React.FC<{}> = () => (
  <Flex py={5} mt={5} as="footer">
    <Layout width={[1, 0.5]}>
      <Flex flexDirection={["column", "row"]}>
        <FooterColumn title="About this website">
          <Text color="#F2DFDF" lineHeight={1.5}>
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
