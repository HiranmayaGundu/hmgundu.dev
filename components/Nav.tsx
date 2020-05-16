import React, { useContext } from "react";
import { useRouter } from "next/router";
import styled, { ThemeContext } from "styled-components";
import { Box, Flex, FlexProps } from "rebass/styled-components";
import Text from "./Text";
import Link from "./Link";
import Layout from "./Layout";
import { ColorModeContext } from "./ColorModeContext";

interface NavItemProps {
  href: string;
  className?: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const { pathname } = useRouter();
  const themeContext = useContext(ThemeContext);
  const active: boolean = pathname.indexOf(props.href) === 0;
  return (
    <Box mr={4} className={props.className}>
      <Link href={props.href}>
        <Text
          as="h3"
          color={active ? "text" : themeContext.colors.headerLink}
          fontWeight={themeContext.fontWeights.bold}
          fontSize={themeContext.fontSizes[1]}
        >
          {props.title}
        </Text>
      </Link>
    </Box>
  );
};

const DarkToggle: React.FC<{}> = () => {
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);
  if (!colorMode) {
    return null;
  }
  return (
    <Box>
      <input
        type="checkbox"
        checked={colorMode === "dark"}
        onChange={(ev) => {
          setColorMode(ev.target.checked ? "dark" : "light");
        }}
      />
      <Text as="label" color="text" fontSize={1}>
        {colorMode}
      </Text>
    </Box>
  );
};

const StyledNavItem = styled(NavItem)`
  &:last-of-type {
    margin-right: 0;
  }
`;

const NavWrapper: React.FC<FlexProps> = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 15;
  background-color: var(--color-primary-background);
  box-shadow: var(--color-box-shadow) 0px 1px 4px 0px;
`;

const Nav: React.FC<{}> = () => (
  <NavWrapper py={3} as="nav">
    <Layout py={1} width={1}>
      <Flex alignItems="center" justifyContent={["center", "space-between"]}>
        <StyledNavItem href="/" title="Hiranmaya Gundu" />
        <StyledNavItem href="/about" title="About" />
        <StyledNavItem href="/blog" title="Blog" />
        <DarkToggle />
      </Flex>
    </Layout>
  </NavWrapper>
);

export default Nav;
