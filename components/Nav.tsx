import * as React from "react";
import { useRouter } from "next/router";
import styled, {
  css,
  FlattenSimpleInterpolation,
  keyframes,
} from "styled-components";
import { Box, Flex, FlexProps } from "rebass/styled-components";
import Text from "./Text";
import Link from "./Link";
import Layout from "./Layout";
import { ColorModeContext } from "./ColorModeContext";
import { textColor } from "./textColor";
import { useScrollPosition } from "./UseScrollHook";

interface NavItemProps {
  href: string;
  className?: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const { pathname } = useRouter();
  const active: boolean = pathname.indexOf(props.href) === 0;
  return (
    <Box mr={4} className={props.className}>
      <Link css={active ? textColor : undefined} href={props.href}>
        <Text as="h3" fontWeight="bold" fontSize={1}>
          {props.title}
        </Text>
      </Link>
    </Box>
  );
};

const opacity = keyframes`
  {
    0% {
      opacity: 0;
    }
    100 % {
      opacity 1;
    }
  }
`;

const StyledBox = styled(Box)`
  animation: 2s ${opacity} ease-out;
`;

const DarkToggle: React.FC<{}> = () => {
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);
  if (!colorMode) {
    return null;
  }
  return (
    <StyledBox>
      <Text as="label" color="text" fontSize={1}>
        <button
          onClick={(): void => {
            if (colorMode === "auto") {
              setColorMode("light");
            } else if (colorMode === "light") {
              setColorMode("dark");
            } else {
              setColorMode("auto");
            }
          }}
        >
          {colorMode}
        </button>
      </Text>
    </StyledBox>
  );
};

const StyledNavItem = styled(NavItem)`
  &:last-of-type {
    margin-right: 0;
  }
`;

interface IsScrolledProps {
  readonly isScrolled: boolean;
}

const StyledFlexWrapper = styled(Flex)<FlexProps & IsScrolledProps>`
  ${({ isScrolled }): false | FlattenSimpleInterpolation =>
    isScrolled &&
    css`
      transition: box-shadow 250ms ease-in-out;
      box-shadow: var(--color-box-shadow) 0px 1px 4px 0px;
    `}
`;

const NavWrapper: React.FC<FlexProps> = (props) => {
  const [showOnScroll, setShowOnScroll] = React.useState(false);
  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y > 0;
      setShowOnScroll(isShow);
    },
    [showOnScroll],
    undefined,
    true
  );
  return (
    <StyledFlexWrapper
      bg="var(--color-primary-background)"
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 15,
        position: "fixed",
      }}
      isScrolled={showOnScroll}
      {...props}
    />
  );
};

const Nav: React.FC<{}> = () => (
  <NavWrapper py={3} as="nav">
    <Layout py={1} width={1}>
      <Flex alignItems="center" justifyContent={["center", "space-between"]}>
        <Flex
          alignItems="center"
          justifyContent={["center", "space-between"]}
          width={3 / 4}
        >
          <StyledNavItem href="/" title="Hiranmaya Gundu" />
          <StyledNavItem href="/about" title="About" />
          <StyledNavItem href="/blog" title="Blog" />
        </Flex>
        <Flex>
          <DarkToggle />
        </Flex>
      </Flex>
    </Layout>
  </NavWrapper>
);

export default Nav;
