import type { MDXComponents } from "mdx/types";
import { Link } from "./components/ui/link";
import { Separator } from "./components/ui/separator";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-3xl font-bold leading-tight" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl font-bold leading-tight" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl font-bold leading-tight" {...props} />
    ),
    h4: (props) => (
      <h4 className="text-lg font-bold leading-tight" {...props} />
    ),
    p: (props) => (
      <p className="text-lg font-medium leading-normal" {...props} />
    ),
    a: (props) => <Link {...props} />,
    ul: (props) => <ul className="list-disc list-outside pl-4" {...props} />,
    ol: (props) => <ol className="list-decimal list-outside pl-4" {...props} />,
    li: (props) => (
      <li className="text-lg font-medium leading-normal" {...props} />
    ),
    blockquote: (props) => (
      <blockquote className="mt-6 border-l-2 pl-6" {...props} />
    ),
    hr: (props) => <Separator className="my-4" {...props} />,
    ...components,
  };
}
