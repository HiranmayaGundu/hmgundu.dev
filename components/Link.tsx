import React from "react";
import { Link } from "rebass/styled-components";
import NextLink from "next/link";
import ConditionalWrap from "conditional-wrap";
import styled from "styled-components";

interface UniversalLinkProps {
  href: string;
  rel?: string;
  css?: string;
  prefetch?: boolean;
  underline?: boolean;
  children: React.ReactNode;
  external?: boolean;
}
const UniversalLink: React.FC<UniversalLinkProps> = (props) => {
  const external =
    props.external ||
    (props.href.indexOf("//") !== -1 &&
      props.href.indexOf("hmgundu.dev") === -1);
  return (
    <ConditionalWrap
      condition={!external}
      wrap={(children: React.ReactNode) => (
        <NextLink href={props.href} prefetch={props.prefetch}>
          {children}
        </NextLink>
      )}
    >
      <Link
        target={external ? "_blank" : undefined}
        rel={external ? "noopener" : undefined}
        {...props}
      />
    </ConditionalWrap>
  );
};

export default styled(UniversalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: ${(props) => props.underline !== false && "underline"};
  }

  ${(props) => props.css}
`;
