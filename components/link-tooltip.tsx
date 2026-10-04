"use client";

import * as React from "react";
import Tippy from "@tippyjs/react";

interface LinkTooltipProps {
  href: string;
  children: React.ReactNode;
}

/**
 * A link that reveals its destination URL on hover.
 */
export function LinkTooltip({ href, children }: LinkTooltipProps) {
  const [reference, setReference] = React.useState<Element | null>(null);

  return (
    <>
      <span ref={setReference}>{children}</span>
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
