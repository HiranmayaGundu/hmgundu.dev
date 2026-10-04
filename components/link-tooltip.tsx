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
 * Two differences from the original:
 *  - main used Tippy's built-in light/dark themes driven by a ColorModeContext.
 *    This site uses next-themes, so the theme comes from the `.dark` class and
 *    the `--popover` tokens instead. That keeps the tooltip in sync with the
 *    rest of the design system without threading theme state through JS.
 *  - main wrapped children in a <span> because its Link could not hold a ref.
 *    ui/link now forwards its ref, so the link itself is the hover target and
 *    the tooltip covers exactly the link's hit area.
 */
export function LinkTooltip({ href, children }: LinkTooltipProps) {
  return (
    <Tippy
      content={href}
      arrow={true}
      interactive={true}
      duration={600}
      maxWidth="none"
      theme="link"
    >
      <Link href={href}>{children}</Link>
    </Tippy>
  );
}
