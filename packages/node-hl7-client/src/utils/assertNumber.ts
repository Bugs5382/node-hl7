/**
 * Assert Number on a Property
 * @since 1.0.0
 * @param props Property Object
 * @param name Property Name
 * @param min Min Number
 * @param max Max Number
 */
export const assertNumber = (
  properties: Record<string, number>,
  name: string,
  min: number,
  max?: number,
): void => {
  const value = properties[name];
  if (
    isNaN(value) ||
    !Number.isFinite(value) ||
    value < min ||
    (max != undefined && value > max)
  ) {
    throw new TypeError(
      max == undefined
        ? `${name} must be a number >= ${min}.`
        : `${name} must be a number (${min}, ${max}).`,
    );
  }
};
