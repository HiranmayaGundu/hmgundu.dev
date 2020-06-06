// from https://roabramov.space/blog/hamburger-animation/
import * as React from "react";
import { useSpring, config, a } from "react-spring";

const openedTransformationConfig = {
  top: "translate(2, 7) rotate(0)",
  center: "translate(2, 19) rotate(0)",
  bottom: "translate(2, 31) rotate(0)",
};

const closedTransformationConfig = {
  top: "translate(5, 32) rotate(-45)",
  center: "translate(10, 4) rotate(45)",
  bottom: "translate(5, 32) rotate(-45)",
};

interface MenuIconProps {
  isOpened: boolean;
  height?: string;
  width?: string;
}
const MenuIcon: React.FC<MenuIconProps> = ({
  isOpened,
  height = "44",
  width = "44",
}) => {
  const { top, center, bottom } = useSpring({
    to: isOpened ? closedTransformationConfig : openedTransformationConfig,
    config: config.stiff,
  });
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 44 44"
      fill="var(--color-text)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <a.rect width="40" height="6" rx="3" transform={top} />
      <a.rect width="40" height="6" rx="3" transform={center} />
      <a.rect width="40" height="6" rx="3" transform={bottom} />
    </svg>
  );
};

export default MenuIcon;
