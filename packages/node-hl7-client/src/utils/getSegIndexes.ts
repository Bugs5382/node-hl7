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
  for (let i = 0; i < names.length; i++) {
    const regex = new RegExp(`^(${names[i]})\\|`, "gm");
    let m;
    while ((m = regex.exec(data)) != null) {
      list.push(m.index.toString());
    }
  }
  return list;
};
