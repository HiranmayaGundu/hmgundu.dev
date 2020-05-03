// This is from https://joshwcomeau.com/gatsby/dark-mode/.
// It is a fantastic blog post on how to avoid the
// horrible flash effect when having themes in SSG.
export function setColorsByTheme() {
  const colors = "🌈";
  const colorModeKey = "🔑";
  const colorModeCssProp = "⚡️";

  // check if user has set prefers-color-scheme via OS
  const matchMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMediaQuery = matchMediaQuery.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  // default to light
  let colorMode = "light";

  const hasPersistedPreference = typeof persistedPreference === "string";

  if (persistedPreference && hasPersistedPreference) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMediaQuery ? "dark" : "light";
  }

  const root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;
    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}
