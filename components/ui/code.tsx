export function Code(props: React.HTMLAttributes<HTMLPreElement>) {
  // Inline-code chip. Colors track the shiki dual themes used for fenced
  // blocks (see rehype-shiki `themes` in next.config.mjs) via the
  // --inline-code-bg/fg tokens, which flip with the site theme.
  // Inside fenced blocks the chip is neutralized by the `.shiki code`
  // override in app/globals.css.
  return (
    <code
      className="rounded text-left my-4 p-1 leading-normal font-mono box-border bg-(--inline-code-bg) text-(--inline-code-fg)"
      {...props}
    />
  );
}

export default Code;
