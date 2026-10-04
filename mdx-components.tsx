import type { MDXComponents } from "mdx/types";
import { Link } from "@/components/ui/link";
import { LinkTooltip } from "@/components/link-tooltip";
import { Separator } from "@/components/ui/separator";
import Pre from "@/components/pre";
import Code from "./components/ui/code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, ...props }) => (
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-2xl sm:text-3xl font-bold leading-tight" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3 className="text-xl sm:text-2xl font-bold leading-tight" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4 className="text-xl font-bold leading-tight" {...props}>
        {children}
      </h4>
    ),
    p: (props) => (
      <p className="text-lg font-medium leading-normal" {...props} />
    ),
    a: ({ href, children, ...rest }) => {
      if (href && /^https?:\/\//.test(href)) {
        return (
          <LinkTooltip href={href} {...rest}>
            {children}
          </LinkTooltip>
        );
      }
      return (
        <Link href={href} {...rest}>
          {children}
        </Link>
      );
    },
    ul: (props) => <ul className="list-disc list-outside pl-4" {...props} />,
    ol: (props) => <ol className="list-decimal list-outside pl-4" {...props} />,
    li: (props) => (
      <li className="text-lg font-medium leading-normal" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="mt-6 border-l-2 pl-6" {...props} />
    ),
    pre: (props) => <Pre {...props} />,
    code: (props) => <Code {...props} />,
    hr: (props) => <Separator className="my-4" {...props} />,
    ...components,
  };
}
