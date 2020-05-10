const LIGHT_THEME_COLORS = {
  blueLight: "#CFD8EA", // light blue
  blueDark: "#C4D0E3", // slightly darker than above
  text: "#363C45", // white
  altText: "#A62156", // pinkish color
  altColor: "#F6C751", // yellowish color
  iconBackground: "#55586B",
  iconTShirtMainShade: "#F6BC52",
  iconTShirtSecondaryShade: "#F9AF37"
};

const DARK_THEME_COLORS = {
  blueLight: "#25313D", // light dark blue
  blueDark: "#252E36", // dark dark blue
  text: "#E6EDF4", // whitish blue
  altText: "#D1C4AA", // brownish color
  altColor: "#584D32", // dark brownish color
  iconBackground: "#FBBB51",
  iconTShirtMainShade: "#B63431",
  iconTShirtSecondaryShade: "#803232"
};

export const COLORS = {
  text: {
    light: LIGHT_THEME_COLORS.text,
    dark: DARK_THEME_COLORS.text
  },
  link: {
    light: LIGHT_THEME_COLORS.altText,
    dark: DARK_THEME_COLORS.altText
  },
  "heading-text": {
    light: LIGHT_THEME_COLORS.altText,
    dark: DARK_THEME_COLORS.altColor
  },
  "heading-background": {
    light: LIGHT_THEME_COLORS.altColor,
    dark: DARK_THEME_COLORS.altText
  },
  "primary-background": {
    light: LIGHT_THEME_COLORS.blueLight,
    dark: DARK_THEME_COLORS.blueDark
  },
  "secondary-background": {
    light: LIGHT_THEME_COLORS.blueDark,
    dark: DARK_THEME_COLORS.blueLight
  },
  "primary-light": {
    light: LIGHT_THEME_COLORS.blueLight, // Want primary colors to be accessible for the shirt color
    dark: LIGHT_THEME_COLORS.blueLight
  },
  "primary-dark": {
    light: DARK_THEME_COLORS.blueDark,
    dark: DARK_THEME_COLORS.blueDark
  },
  "icon-background": {
    light: LIGHT_THEME_COLORS.iconBackground,
    dark: DARK_THEME_COLORS.iconBackground
  },
  "icon-shirt-main": {
    light: LIGHT_THEME_COLORS.iconTShirtMainShade,
    dark: DARK_THEME_COLORS.iconTShirtMainShade
  },
  "icon-shirt-secondary": {
    light: LIGHT_THEME_COLORS.iconTShirtSecondaryShade,
    dark: DARK_THEME_COLORS.iconTShirtSecondaryShade
  }
};

export const COLOR_MODE_KEY = "color-mode";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
