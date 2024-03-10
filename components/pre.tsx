export function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className="block whitespace-pre rounded text-left my-4 p-2 leading-5 font-mono overflow-auto"
      {...props}
    />
  );
}

export default Pre;
