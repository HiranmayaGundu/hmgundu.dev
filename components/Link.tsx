import React from "react";
import { Link } from "rebass/styled-components";
import NextLink from "next/link";
import ConditionalWrap from "conditional-wrap";
import styled, { FlattenSimpleInterpolation } from "styled-components";

export interface UniversalLinkProps {
  href: string;
  rel?: string;
  css?: FlattenSimpleInterpolation;
  prefetch?: boolean;
  underline?: boolean;
  children: React.ReactNode;
  external?: boolean;
}

const UniversalLink = ({ css, ...rest }: UniversalLinkProps) => {
  const external =
    rest.external ||
    (rest.href.indexOf("//") !== -1 && rest.href.indexOf("hmgundu.dev") === -1);
  return (
    <ConditionalWrap
      condition={!external}
      wrap={(children: React.ReactNode): JSX.Element => (
        <NextLink href={rest.href} prefetch={rest.prefetch}>
          {children}
        </NextLink>
      )}
    >
      <Link
        target={external ? "_blank" : undefined}
        rel={external ? "noopener" : undefined}
        css={css?.toString() ?? ""}
        {...rest}
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

  ${(props): FlattenSimpleInterpolation | undefined => props.css}
`;
