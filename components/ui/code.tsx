export function Code(props: React.HTMLAttributes<HTMLPreElement>) {
  // Inline-code chip. Colors intentionally match the night-owl theme used
  // for fenced blocks (see rehype-shiki `theme` in next.config.mjs):
  // shiki night-owl background #011627, foreground #d6deeb.
  // Inside fenced blocks this background is neutralized by the
  // `.shiki code` override in app/globals.css.
  return (
    <code
      className="rounded text-left my-4 p-1 leading-normal font-mono box-border bg-[#011627] text-[#d6deeb]"
      {...props}
    />
  );
}

export default Code;
