"use client";

import * as React from "react";
import {
  arrow,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  FloatingArrow,
  FloatingPortal,
} from "@floating-ui/react";
import { Link } from "@/components/ui/link";

interface LinkTooltipProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function LinkTooltip({ href, children, ...props }: LinkTooltipProps) {
  const [open, setOpen] = React.useState(false);
  const [arrowElement, setArrowElement] = React.useState<Element | null>(null);

  const { refs, floatingStyles, context, isPositioned } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "top",
    middleware: [offset(8), flip(), shift(), arrow({ element: arrowElement })],
  });
  const { setReference, setFloating } = refs;

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <Link ref={setReference} href={href} {...getReferenceProps(props)}>
        {children}
      </Link>
      {open && (
        <FloatingPortal>
          <div
            ref={setFloating}
            style={floatingStyles}
            {...getFloatingProps({
              className: `z-9999 max-w-none whitespace-nowrap rounded-md border border-border bg-popover px-2.25 py-1.25 text-sm text-popover-foreground shadow-md transition-opacity duration-600 ${
                isPositioned ? "opacity-100" : "opacity-0"
              }`,
            })}
          >
            {href}
            <FloatingArrow
              ref={setArrowElement}
              context={context}
              className="fill-popover"
            />
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
