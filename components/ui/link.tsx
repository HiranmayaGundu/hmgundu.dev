import { LinkHTMLAttributes, forwardRef } from "react";

export const Link = forwardRef<
  HTMLAnchorElement,
  LinkHTMLAttributes<HTMLAnchorElement>
>(function Link(props, ref) {
  return (
    <a
      ref={ref}
      className="font-medium text-primary underline underline-offset-4"
      {...props}
    />
  );
});
