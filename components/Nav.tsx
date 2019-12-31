import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Box, Flex } from "rebass/styled-components";
import Text from "./Text";
import Link from "./Link";
import Layout from "./Layout";

interface NavItemProps {
  href: string;
  className?: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = props => {
  const { pathname } = useRouter();
  const active: boolean = pathname.indexOf(props.href) === 0;
  return (
    <Box mr={4} className={props.className}>
      <Link href={props.href}>
        <Text
          as="h3"
          color={active ? "text" : "#666"}
          fontWeight={active ? "bold" : "normal"}
        >
          {props.title}
        </Text>
      </Link>
    </Box>
  );
};

const StyledNavItem = styled(NavItem)`
  &:last-of-type {
    margin-right: 0;
  }
`;

const Nav: React.FC<{}> = () => (
  <Flex py={2} mt={2} as="nav">
    <Layout py={1} width={1}>
      <Flex alignItems="center" justifyContent={["center", "space-between"]}>
        <StyledNavItem href="/" title="Hiranmaya" />
        <StyledNavItem href="/about" title="About" />
        <StyledNavItem href="/blog" title="Blog" />
      </Flex>
    </Layout>
  </Flex>
);

export default Nav;
