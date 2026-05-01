/**
 * Node Base
 * @since 1.0.0
 */
export interface HL7Node {
  exists: (path: number | string) => boolean;
  forEach: (callback: (value: HL7Node, index: number) => void) => void;

  get: (path: number | string) => HL7Node;
  isEmpty: () => boolean;

  length: number;
  name: string;

  path: string[];
  read: (path: string[]) => HL7Node;
  set: (path: number | string, value?: any) => HL7Node;
  toArray: () => HL7Node[];
  toBoolean: () => boolean;
  toDate: () => Date;
  toFile: (name: string, newLine?: boolean, location?: string) => void;
  toFloat: () => number;
  toInteger: () => number;

  toRaw: () => string;
  toString: () => string;
  write: (path: string[], value: string) => HL7Node;
}
