/* eslint-disable mdx/no-unused-expressions */
// This is from https://joshwcomeau.com/gatsby/dark-mode/.
// It is a fantastic blog post on how to avoid the
// horrible flash effect when having themes in SSG.
import * as React from "react";
import { ChildrenOnlyProps } from "./Constants";

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "./Constants";

export type ThemeType = "light" | "dark";

interface ColorModeType {
  colorMode: ThemeType | undefined;
  setColorMode: (newValue: ThemeType) => void;
}
export const ColorModeContext = React.createContext<ColorModeType>({
  colorMode: undefined,
  setColorMode: () => {
    return;
  },
});

const changeColorMode = (root: HTMLElement, newValue: ThemeType): void => {
  Object.entries(COLORS).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;
    root.style.setProperty(cssVarName, colorByTheme[newValue]);
  });
};

export const ColorModeProvider: React.FC<ChildrenOnlyProps> = ({
  children,
}) => {
  const [colorMode, rawSetColorMode] = React.useState<ThemeType | undefined>(
    undefined
  );

  const mqlHandler = (e: MediaQueryListEvent): void => {
    const root = window.document.documentElement;
    if (e.matches) {
      changeColorMode(root, "dark");
      rawSetColorMode("dark");
    } else {
      changeColorMode(root, "light");
      rawSetColorMode("light");
    }
  };

  const mediaQueryHandler = React.useRef<(e: MediaQueryListEvent) => void>(
    mqlHandler
  );

  const mqlList = React.useRef<MediaQueryList | undefined>();

  React.useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue: ThemeType = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    ) as ThemeType;
    const persistedValue = localStorage.getItem(COLOR_MODE_KEY);
    if (typeof persistedValue !== "string") {
      mqlList.current = window.matchMedia("(prefers-color-scheme: dark)");
      mqlList.current.addListener(mediaQueryHandler.current);
    }

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    const setColorMode = (newValue: ThemeType): void => {
      const root = window.document.documentElement;
      localStorage.setItem(COLOR_MODE_KEY, newValue);
      changeColorMode(root, newValue);
      rawSetColorMode(newValue);
      mqlList.current?.removeListener(mediaQueryHandler.current);
    };
    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
    </ColorModeContext.Provider>
  );
};
