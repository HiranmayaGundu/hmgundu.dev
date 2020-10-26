import { Twitter, GitHub } from "react-feather";
import { Flex, Box } from "rebass/styled-components";
import { ReactNode, ElementType } from "react";
import Text from "./Text";
import Link from "./Link";
import Layout from "./Layout";
import Icon from "./Icon";
import { TwoColumnGrid } from "./TwoColumnGrid";
import { textColor } from "./textColor";

interface FooterColumnProps {
  title: string;
  width?: number;
  last?: boolean;
  children: ReactNode;
}

interface FooterItemProps {
  IconComp?: ElementType;
  children: ReactNode;
  href: string;
  rel?: string;
  prefetch?: boolean;
}
const FooterColumn = (props: FooterColumnProps) => {
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

const FooterItem = ({
  IconComp,
  href,
  rel,
  children,
  prefetch,
}: FooterItemProps) => {
  return (
    <Text as="div" my={[3, 1]}>
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

const Footer = () => {
  return (
    <Flex
      py={5}
      mt={5}
      as="footer"
      bg="var(--color-secondary-background)"
      px={[3, 4]}
    >
      <Layout width={[1, 0.5]}>
        <TwoColumnGrid>
          <FooterColumn title="About this website">
            <Text lineHeight={1.5}>
              I&apos;m Hiranmaya Gundu, a dev exploring web and systems
              programming. This is my personal blog!
            </Text>
          </FooterColumn>
          <FooterColumn last title="Social Media">
            <FooterItem
              href="https://github.com/HiranmayaGundu/hmgundu.dev"
              IconComp={GitHub}
              rel="me noopener"
            >
              View the source on GitHub
            </FooterItem>
            <FooterItem
              href="https://twitter.com/hiranmayagundu"
              IconComp={Twitter}
              rel="me noopener"
            >
              You can follow me on twitter
            </FooterItem>
          </FooterColumn>
        </TwoColumnGrid>
        <Box mb="4">
          <Link href="https://monolisa.dev/" underline external css={textColor}>
            <Text lineHeight={1.5}>
              This website uses MonoLisa an awesome monospace font. Get it here.
            </Text>
          </Link>
        </Box>
      </Layout>
    </Flex>
  );
};

export default Footer;
