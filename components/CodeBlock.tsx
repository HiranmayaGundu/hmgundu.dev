import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import Pre from "./Pre";
import styled from "styled-components";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

const ExpanderDiv = styled.div`
  @media (min-width: 1024px) {
    margin-left: -80px;
    margin-right: -80px;
  }
`;

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = className?.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      code={children as string}
      language={language as Language}
      theme={theme}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps
      }): React.ReactNode => (
        <ExpanderDiv>
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
        </ExpanderDiv>
      )}
    </Highlight>
  );
};

const InlineCode = styled.code`
  background-color: #eee;
  color: #000;
  font-family: ${(props): string => props.theme.fonts.monospace.join()};
  font-size: ${(props): string => props.theme.fontSizes[0]};
`;

export { CodeBlock, InlineCode };
