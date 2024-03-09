import * as React from "react";
import { DividerSvg } from "./divider-svg";

const SectionDivider = (): JSX.Element => {
  return (
    <DividerSvg
      preserveAspectRatio="none"
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
      width="1440px"
      height="120px"
    >
      <path
        fill="hsl(var(--secondary-background))"
        d="M1440 21.21V120H0V21.21C120 35.07 240 42 360 42s240-6.93 360-20.79c88.328-8.794 154.574-14.333 198.738-16.618A3120.562 3120.562 0 0 1 1080 .42c120 0 240 6.93 360 20.79z"
      />
    </DividerSvg>
  );
};

export default SectionDivider;
