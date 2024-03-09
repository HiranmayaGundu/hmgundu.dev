import { LinkHTMLAttributes } from "react";

export function Link(props: LinkHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className="font-medium text-primary underline underline-offset-4"
      {...props}
    />
  );
}
