export function Code(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <code
      className="rounded text-md text-left my-4 p-1 leading-normal font-mono box-border bg-background"
      {...props}
    />
  );
}

export default Code;
