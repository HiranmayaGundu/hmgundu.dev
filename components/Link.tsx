import React from "react";
import { Link } from "rebass/styled-components";
import NextLink from "next/link";
import ConditionalWrap from "conditional-wrap";
import styled from "styled-components";
import type { CSSProp } from "styled-components";

export interface UniversalLinkProps {
  href: string;
  rel?: string;
  css?: CSSProp;
  prefetch?: boolean;
  underline?: boolean;
  children: React.ReactNode;
  external?: boolean;
}

const UniversalLink = (props: UniversalLinkProps): JSX.Element => {
  const external =
    props.external ||
    (props.href.indexOf("//") !== -1 &&
      props.href.indexOf("hmgundu.dev") === -1);
  const { css: _, ...other } = props;
  return (
    <ConditionalWrap
      condition={!external}
      wrap={(children: React.ReactNode): JSX.Element => (
        <NextLink href={props.href} prefetch={props.prefetch}>
          {children}
        </NextLink>
      )}
    >
      <Link
        target={external ? "_blank" : undefined}
        rel={external ? "noopener" : undefined}
        {...other}
      />
    </ConditionalWrap>
  );
};

export default styled(UniversalLink)`
  color: var(--color-link);
  text-decoration: none;

  &:hover {
    text-decoration: ${(props): false | "underline" =>
      props.underline !== false && "underline"};
  }

  ${(props): CSSProp | undefined => props.css}
`;
