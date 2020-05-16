// This is from https://joshwcomeau.com/gatsby/dark-mode/.
// It is a fantastic blog post on how to avoid the
// horrible flash effect when having themes in SSG.
import * as React from "react";

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

interface ColorModeProviderProps {
  children: React.ReactNode;
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({
  children,
}) => {
  const [colorMode, rawSetColorMode] = React.useState<ThemeType | undefined>(
    undefined
  );
  React.useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue: ThemeType = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    ) as ThemeType;

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    const setColorMode = (newValue: ThemeType): void => {
      const root = window.document.documentElement;
      localStorage.setItem(COLOR_MODE_KEY, newValue);
      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });
      rawSetColorMode(newValue);
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
