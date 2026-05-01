/**
 * Get Segment Indexes
 * @remarks Helper for {@link split}
 * @since 1.0.0
 * @param names
 * @param data
 * @param list
 */
export const getSegIndexes = (
  names: string[],
  data: string,
  list: string[] = [],
): string[] => {
  for (const name of names) {
    const regex = new RegExp(String.raw`^(${name})\|`, "gm");
    let m;
    while ((m = regex.exec(data)) != undefined) {
      list.push(m.index.toString());
    }
  }
  return list;
};
