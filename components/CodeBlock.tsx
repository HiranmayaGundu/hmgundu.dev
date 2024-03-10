import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import Prism from "prism-react-renderer/prism";
import theme from "prism-react-renderer/themes/nightOwl";
import Pre from "./Pre";
import { TextProps } from "rebass/styled-components";
import Text from "./Text";
import { CSSProp } from "styled-components";

// @ts-expect-error need to check how to add prism to global
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-java");
require("prismjs/components/prism-bash");

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

const CodeBlock = ({ children, className }: CodeBlockProps): JSX.Element => {
  const language = className?.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      code={children as string}
      language={language as Language}
      theme={theme}
      Prism={Prism}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }): React.ReactNode => (
        <div>
          <Pre className={className} style={{ ...style, padding: "20px" }}>
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </code>
          </Pre>
        </div>
      )}
    </Highlight>
  );
};

const InlineCode = (props: TextProps & { css?: CSSProp }): JSX.Element => (
  <Text
    fontFamily="monospace"
    fontWeight="light"
    fontSize={[0, 1]}
    bg="var(--color-grey)"
    color="text"
    as="code"
    pl={2}
    pr={2}
    {...props}
    sx={{
      borderRadius: 4,
    }}
  />
);

const Code = ({
  className,
  children,
  ...props
}: {
  className: string;
  children: React.ReactNode;
  props: unknown;
}): JSX.Element => {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <CodeBlock className={match[1]}>{children}</CodeBlock>
  ) : (
    <InlineCode className={className} {...props}>
      {children}
    </InlineCode>
  );
};

export { CodeBlock, InlineCode, Code };
