/* eslint-disable mdx/no-unused-expressions */
// This is from https://joshwcomeau.com/gatsby/dark-mode/.
// It is a fantastic blog post on how to avoid the
// horrible flash effect when having themes in SSG.
import * as React from "react";
import { ChildrenOnlyProps } from "./Constants";

import { COLORS, COLOR_MODE_KEY } from "./Constants";

export type ThemeType = "light" | "dark";

export type ColorModeStringType = ThemeType | "auto";

interface ColorModeType {
  colorMode: ColorModeStringType;
  actualColor: ThemeType;
  setColorMode: (newValue: ColorModeStringType) => void;
}
export const ColorModeContext = React.createContext<ColorModeType>({
  colorMode: "auto",
  actualColor: "light",
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
  const [colorMode, rawSetColorMode] = React.useState<ColorModeStringType>(
    "auto"
  );
  const [actualColor, setActualColor] = React.useState<ThemeType>("light");

  const mqlHandler = (e: MediaQueryListEvent): void => {
    const root = window.document.documentElement;
    if (e.matches) {
      changeColorMode(root, "dark");
      setActualColor("dark");
    } else {
      changeColorMode(root, "light");
      setActualColor("light");
    }
  };

  const mediaQueryHandler = React.useRef<(e: MediaQueryListEvent) => void>(
    mqlHandler
  );

  const mqlList = React.useRef<MediaQueryList | undefined>();

  React.useEffect(() => {
    const persistedValue: ThemeType | null = localStorage.getItem(
      COLOR_MODE_KEY
    ) as ThemeType | null;
    if (typeof persistedValue !== "string") {
      mqlList.current = window.matchMedia("(prefers-color-scheme: dark)");
      mqlList.current.addEventListener("change", mediaQueryHandler.current);
    } else {
      rawSetColorMode(persistedValue);
      setActualColor(persistedValue);
    }
  }, []);

  const contextValue = React.useMemo(() => {
    const setColorMode = (newValue: ColorModeStringType): void => {
      const root = window.document.documentElement;
      if (newValue !== "auto") {
        localStorage.setItem(COLOR_MODE_KEY, newValue);
        changeColorMode(root, newValue);
        mqlList.current?.removeEventListener(
          "change",
          mediaQueryHandler.current
        );
        setActualColor(newValue);
      } else {
        localStorage.removeItem(COLOR_MODE_KEY);
        mqlList.current = window.matchMedia("(prefers-color-scheme: dark)");
        mqlList.current.addEventListener("change", mediaQueryHandler.current);
        if (mqlList.current.matches) {
          changeColorMode(root, "dark");
          setActualColor("dark");
        } else {
          changeColorMode(root, "light");
          setActualColor("light");
        }
      }
      rawSetColorMode(newValue);
    };
    return {
      colorMode,
      actualColor,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode, actualColor]);

  return (
    <ColorModeContext.Provider value={contextValue}>
      {children}
    </ColorModeContext.Provider>
  );
};
