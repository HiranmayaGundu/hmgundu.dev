import { kebabCase } from "lodash-es";

export const toCustomProperties = (
  theme: Record<string, unknown>,
  escapeKeys: Array<string> = []
): Record<string, string | number> => {
  const customProperties: Record<string, string | number> = {};

  // eslint-disable-next-line @typescript-eslint/ban-types
  const generateProperties = (object: object, keyPrefix?: string): void => {
    Object.entries(object).forEach(([key, value]) => {
      if (!escapeKeys.includes(key)) {
        let formattedKey = kebabCase(key);
        formattedKey = keyPrefix
          ? `${keyPrefix}-${formattedKey}`
          : formattedKey;
        if (Array.isArray(value)) {
          value.forEach((item, i) => {
            customProperties[`--${formattedKey}-${i}`] = item;
          });
        } else if (Object(value) === value) {
          generateProperties(value, formattedKey);
        } else {
          customProperties[`--${formattedKey}`] = value;
        }
      }
    });
  };
  generateProperties(theme);

  return customProperties;
};

export const convertThemeToUseCustomProperties = (
  theme: Record<string, unknown>,
  escapeKeys: Array<string> = []
): Record<string, any> => {
  const generateProperties = (
    // eslint-disable-next-line @typescript-eslint/ban-types
    object: object,
    keyPrefix?: string
  ): Record<string, any> => {
    const convertedTheme: Record<string, any> = {};
    Object.entries(object).forEach(([key, value]) => {
      if (!escapeKeys.includes(key)) {
        let formattedKey = kebabCase(key);
        formattedKey = keyPrefix
          ? `${keyPrefix}-${formattedKey}`
          : formattedKey;
        if (Array.isArray(value)) {
          convertedTheme[key] = [];
          value.forEach((_, i) => {
            convertedTheme[key].push(`var(--${formattedKey}-${i})`);
          });
        } else if (Object(value) === value) {
          convertedTheme[key] = generateProperties(value, formattedKey);
        } else {
          convertedTheme[key] = `var(--${formattedKey})`;
        }
      }
    });
    return convertedTheme;
  };
  return generateProperties(theme);
};

export default toCustomProperties;
