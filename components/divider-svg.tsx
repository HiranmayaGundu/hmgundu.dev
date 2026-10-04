import { SVGProps } from "react";

export function DividerSvg({ children, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="block left-0 right-0 w-full bg-transparent pointer-events-none select-none overflow-hidden align-middle"
      {...rest}
    >
      {children}
    </svg>
  );
}
