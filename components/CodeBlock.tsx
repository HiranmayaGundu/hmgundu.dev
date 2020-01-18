import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import Pre from "./Pre";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

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
        <Pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

const InlineCode: React.FC<CodeBlockProps> = ({ children, className }) => {
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
        <code className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
};

export { CodeBlock, InlineCode };
