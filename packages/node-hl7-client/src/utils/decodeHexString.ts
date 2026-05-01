/**
 * Decode Hex String
 * @since 1.0.0
 * @param value
 */
export const decodeHexString = (value: string): string => {
  const result = Array.from({ length: value.length / 2 });
  for (let index = 0; index < value.length; index += 2) {
    result[index / 2] = String.fromCharCode(
      Number.parseInt(value.slice(index, index + 2), 16),
    );
  }
  return result.join("");
};
