/*
MIT License

Copyright (c) 2026 Shane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
/**
 * Node Base
 * @since 1.0.0
 */
export interface HL7Node {
  [Symbol.iterator]: () => Iterator<HL7Node>;
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
