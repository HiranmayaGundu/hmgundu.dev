/* eslint-disable mdx/no-unused-expressions */
// This is from use-scroll-hook on github and dev.to
// redid in typescript to learn

import * as React from "react";

const isBrowser = typeof window !== "undefined";

export interface Position {
  x: number;
  y: number;
}

const useIsomorphicLayoutEffect = isBrowser
  ? React.useLayoutEffect
  : React.useEffect;

const getScrollPosition = ({
  element,
  useWindow,
}: {
  element?: React.MutableRefObject<HTMLElement | null>;
  useWindow?: boolean;
}): Position => {
  if (!isBrowser) {
    return { x: 0, y: 0 };
  }

  const target = element?.current ? element.current : document.body;
  const position = target?.getBoundingClientRect();
  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
};

type EffectCallback = ({
  prevPos,
  currPos,
}: {
  prevPos: Position;
  currPos: Position;
}) => void;

export const useScrollPosition = (
  effect: EffectCallback,
  deps?: React.DependencyList,
  element?: React.MutableRefObject<HTMLElement | null>,
  useWindow?: boolean,
  wait?: number
): void => {
  const position = React.useRef<Position>(getScrollPosition({ useWindow }));
  let throttleTimeout: number | null = null;

  const callBack = (): void => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleScroll = (): void => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    const cleanup = (): void => {
      window.removeEventListener("scroll", handleScroll);
      throttleTimeout && clearTimeout(throttleTimeout);
    };

    return cleanup;
  }, deps);
};
