// This is from use-scroll-hook on github and dev.to
// redid in typescript to learn

import { useEffect, useLayoutEffect, useRef } from "react";

const isBrowser = typeof window !== "undefined";

export interface Position {
  x: number;
  y: number;
}

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

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
  wait?: number,
): void => {
  const position = useRef<Position>(getScrollPosition({ useWindow }));
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);

  const callBack = (): void => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout.current = null;
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleScroll = (): void => {
      if (wait) {
        if (throttleTimeout.current === null) {
          throttleTimeout.current = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    const cleanup = (): void => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };

    return cleanup;
  }, deps);
};
