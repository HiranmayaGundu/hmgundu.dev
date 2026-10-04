export function Code(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <code
      className="rounded text-left my-4 p-1 leading-normal font-mono box-border bg-(--inline-code-bg) text-(--inline-code-fg)"
      {...props}
    />
  );
}

export default Code;
