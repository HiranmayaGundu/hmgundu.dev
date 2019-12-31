import React from "react";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { Box, Flex } from "rebass";
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
  <Flex
    py={5}
    mt={5}
    as="nav"
    bg="#fff"
    css={css`
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    `}
  >
    <Layout py={1} width={1}>
      <Flex alignItems="center" justifyContent={["center", "space-between"]}>
        <StyledNavItem href="/" title="Home" />
        <StyledNavItem href="/about" title="About" />
        <StyledNavItem href="/blog" title="blog" />
      </Flex>
    </Layout>
  </Flex>
);

export default Nav;
