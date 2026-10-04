"use client";

import * as React from "react";
import Tippy from "@tippyjs/react";
import { Link } from "@/components/ui/link";

interface LinkTooltipProps {
  href: string;
  children: React.ReactNode;
}

/**
 * Port of components/Tooltip.tsx from main, which wrapped a link in Tippy to
 * reveal its destination on hover.
 *
 * Differences from the original:
 *  - main used Tippy's built-in light/dark themes driven by a ColorModeContext.
 *    This site uses next-themes, so the theme comes from the `.dark` class and
 *    the `--popover` tokens instead. That keeps the tooltip in sync with the
 *    rest of the design system without threading theme state through JS.
 *  - Tippy is attached via its `reference` prop instead of wrapping the link
 *    as a child. The child pattern makes @tippyjs/react clone the element
 *    and read `element.ref`, which React 19 forbids (dev warning
 *    "Accessing element.ref was removed in React 19"). A callback ref into
 *    state gives Tippy the DOM node without ever touching element.ref.
 *  - The link sits inside a plain <span>. tippy.js warns that interactive
 *    tooltips appended to <body> may not be keyboard-accessible unless the
 *    reference has a parent wrapper giving the popper an adjacent DOM
 *    position. The span is inline and changes no layout.
 */
export function LinkTooltip({ href, children }: LinkTooltipProps) {
  const [reference, setReference] = React.useState<Element | null>(null);

  return (
    <>
      <span>
        <Link ref={setReference} href={href}>
          {children}
        </Link>
      </span>
      <Tippy
        reference={reference}
        content={href}
        arrow={true}
        interactive={true}
        duration={600}
        maxWidth="none"
        theme="link"
      />
    </>
  );
}
