import * as React from "react";
import { DividerSvg } from "./divider-svg";

const SecondarySectionDivider = (): JSX.Element => {
  return (
    <DividerSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="var(--color-secondary-background)"
        d="M0 0l14.1 37.3C28.2 75 56 149 85 176c27.9 27 56 5 84-21.3 28.6-26.7 57-58.7 85-53.4 28.4 5.7 57 47.7 85 64 28.1 15.7 56 5.7 85-21.3 27.8-27 56-69 84-53.3 28.5 16.3 57 90.3 85 96 28.2 5.3 56-58.7 85-85.4 27.9-26.3 56-16.3 84 5.4 28.6 21.3 57 53.3 85 58.6 28.3 5.7 57-16.3 85-42.6C960 96 988 64 1016 80c28.7 16 57 80 85 80 28.4 0 57-64 85-90.7 28.1-26.3 56-16.3 85 16 27.8 31.7 56 85.7 84 74.7 28.5-11 57-85 71-122.7L1440 0H0z"
      ></path>
    </DividerSvg>
  );
};

export default SecondarySectionDivider;
