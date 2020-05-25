import * as React from "react";
import { useRouter } from "next/router";
import styled, {
  css,
  FlattenSimpleInterpolation,
  keyframes,
} from "styled-components";
import { Box, Flex, FlexProps, BoxProps } from "rebass/styled-components";
import Text from "./Text";
import Link from "./Link";
import Layout from "./Layout";
import { ColorModeContext } from "./ColorModeContext";
import { textColor } from "./textColor";
import { useScrollPosition } from "./UseScrollHook";
import { Sun, Moon } from "react-feather";
import MenuIcon from "./MenuIcon";

interface NavItemProps {
  href: string;
  className?: string;
  title: string;
}

const NavItem: React.FC<NavItemProps & BoxProps> = ({
  href,
  className,
  title,
  ...rest
}) => {
  const { pathname } = useRouter();
  const active: boolean = pathname.indexOf(href) === 0;
  return (
    <Box mr={4} className={className} {...rest}>
      <Link css={active ? textColor : undefined} href={href}>
        <Text as="div" fontWeight="bold" fontSize={2}>
          {title}
        </Text>
      </Link>
    </Box>
  );
};

interface MobileNavItemProps {
  onClick: () => void;
  href: string;
  title: string;
}

const MobileNavItem: React.FC<BoxProps & MobileNavItemProps> = ({
  onClick,
  href,
  title,
  ...rest
}) => (
  <Box p={3} onClick={onClick} {...rest}>
    <Link href={href}>
      <Text color="var(--color-text)" as="div" fontSize={2} fontWeight="bold">
        {title}
      </Text>
    </Link>
  </Box>
);

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

const StyledDiv = styled.div`
  cursor: pointer;
`;

const DesktopBox: React.FC<BoxProps> = styled(Box)`
  @media screen and (max-width: 40em) {
    display: none;
  }
`;

const MobileBox: React.FC<BoxProps> = styled(Box)`
  display: none;
  @media screen and (max-width: 40em) {
    display: block;
  }
`;

const DarkToggle: React.FC<{}> = () => {
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);
  if (!colorMode) {
    return null;
  }
  return (
    <StyledBox>
      <Text as="label" color="text" fontSize={1}>
        <StyledDiv
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
          {colorMode === "auto" && (
            <>
              <Sun height="20" width="20" /> <Moon height="20" width="20" />
            </>
          )}
          {colorMode === "light" && <Sun height="20" width="20" />}
          {colorMode === "dark" && <Moon height="20" width="20" />}
        </StyledDiv>
      </Text>
    </StyledBox>
  );
};

const StyledNavItem = styled(NavItem)`
  &:last-of-type {
    margin-right: 0;
  }
`;

interface StyledFlexWrapperProps {
  readonly isScrolled: boolean;
  readonly isOpen: boolean;
}

const StyledFlexWrapper = styled(Flex)<FlexProps & StyledFlexWrapperProps>`
  ${({ isScrolled }): false | FlattenSimpleInterpolation =>
    isScrolled &&
    css`
      transition: box-shadow 250ms ease-in-out;
      box-shadow: var(--color-box-shadow) 0px 1px 4px 0px;
    `}
  ${({ isOpen }) =>
    isOpen &&
    `@media screen and (max-width: 40em) {
    height: 100%;
    width: 100%;
  }`}
`;

const NavWrapper: React.FC<FlexProps & { isOpen: boolean }> = (props) => {
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

const Nav: React.FC<{}> = () => {
  const [menu, setMenu] = React.useState(false);
  const toggler = React.useCallback(() => setMenu((menu) => !menu), [setMenu]);
  return (
    <NavWrapper py={3} as="nav" isOpen={menu}>
      <Layout py={1} width={1}>
        <Flex alignItems="center" justifyContent={["center", "space-between"]}>
          <Flex
            alignItems="center"
            justifyContent={["center", "space-between"]}
            width={3 / 4}
          >
            <StyledNavItem
              href="/"
              title="Hiranmaya Gundu"
              onClick={() =>
                setMenu((menu) => (menu === false ? false : false))
              }
            />
            <DesktopBox>
              <StyledNavItem href="/about" title="About" />
            </DesktopBox>
            <DesktopBox>
              <StyledNavItem href="/blog" title="Blog" />
            </DesktopBox>
          </Flex>
          <DesktopBox>
            <Flex>
              <DarkToggle />
            </Flex>
          </DesktopBox>
        </Flex>
        <MobileBox
          sx={{
            cursor: "pointer",
            position: "absolute",
            right: "30px",
            top: "15px",
          }}
          onClick={toggler}
        >
          <MenuIcon isOpened={menu} height="30" width="30" />
        </MobileBox>
        {menu && (
          <MobileBox>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <MobileNavItem
                  mx={4}
                  mb={4}
                  mt={5}
                  href="/about"
                  title="About"
                  onClick={toggler}
                />
                <MobileNavItem
                  m={4}
                  href="/blog"
                  title="Blog"
                  onClick={toggler}
                />
              </Flex>
              <Flex m={4}>
                <DarkToggle />
              </Flex>
            </Flex>
          </MobileBox>
        )}
      </Layout>
    </NavWrapper>
  );
};
export default Nav;
