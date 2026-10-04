import { type LinkHTMLAttributes, type Ref } from "react";

export function Link({
  ref,
  children,
  ...props
}: LinkHTMLAttributes<HTMLAnchorElement> & {
  ref?: Ref<HTMLAnchorElement>;
}) {
  return (
    <a
      ref={ref}
      className="font-medium text-primary underline underline-offset-4"
      {...props}
    >
      {children}
    </a>
  );
}
