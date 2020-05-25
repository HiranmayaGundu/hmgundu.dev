import * as React from "react";
import { ColorModeContext } from "./ColorModeContext";
import Tippy from "@tippyjs/react";

interface LinkTooltipProps {
  href: string;
  children: React.ReactNode;
}
// eslint-disable-next-line react/display-name
const LinkTooltip = React.forwardRef(
  (props: LinkTooltipProps, ref: React.Ref<HTMLElement>) => {
    const { colorMode } = React.useContext(ColorModeContext);
    return (
      <Tippy
        duration={600}
        theme={colorMode}
        arrow={true}
        interactive={true}
        content={props.href}
      >
        <span ref={ref}>{props.children}</span>
      </Tippy>
    );
  }
);

export default LinkTooltip;
