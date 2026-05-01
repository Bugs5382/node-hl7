import { getSegIndexes } from "@/utils/getSegIndexes";

/**
 * Split the message.
 * @remarks Split the message into its parts.
 * @since 1.0.0
 * @param data
 * @param segments
 */
export const split = (data: string, segments: string[] = []): string[] => {
  const getSegIndex = [
    ...getSegIndexes(["FHS", "BHS", "MSH", "BTS", "FTS"], data),
  ];
  getSegIndex.sort((a, b) => Number.parseInt(a) - Number.parseInt(b));
  for (let index = 0; index < getSegIndex.length; index++) {
    const start = Number.parseInt(getSegIndex[index]);
    let end = Number.parseInt(getSegIndex[index + 1]);
    if (index + 1 === getSegIndex.length) {
      end = data.length;
    }
    segments.push(data.slice(start, end));
  }
  return segments;
};
