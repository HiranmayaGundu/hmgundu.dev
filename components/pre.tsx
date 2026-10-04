import { cn } from "@/lib/utils";

export function Pre({
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={cn(
        "block whitespace-pre rounded text-left my-4 p-2 leading-5 font-mono overflow-auto",
        className,
      )}
      {...props}
    />
  );
}

export default Pre;
