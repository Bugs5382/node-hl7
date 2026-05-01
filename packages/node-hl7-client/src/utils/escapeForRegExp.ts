/**
 * Escape for RegEx Expressing
 * @since 1.0.0
 * @param value
 */
export const escapeForRegExp = (value: string): string => {
  return value.replaceAll(/[-/\\^$*+?.()|[\]{}]/g, String.raw`\$&`);
};
