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
import { HL7Node } from "@/builder/interface/hL7Node";

/**
 * Empty Node
 * @since 1.0.0
 */
export class EmptyNode implements HL7Node {
  get length(): number {
    return 0;
  }

  get name(): string {
    throw new Error("Method not implemented");
  }

  get path(): string[] {
    throw new Error("Method not implemented");
  }

  [Symbol.iterator](): Iterator<HL7Node> {
    return [][Symbol.iterator]();
  }

  exists(_path: number | string): boolean {
    return false;
  }

  forEach(_callback: (value: HL7Node, index: number) => void): void {
    throw new Error("Method not implemented");
  }

  get(_path: number | string): HL7Node {
    return this;
  }

  isEmpty(): boolean {
    return true;
  }

  read(_path: string[]): HL7Node {
    throw new Error("Method not implemented");
  }

  set(_path: number | string, _value?: any): HL7Node {
    return this;
  }

  toArray(): HL7Node[] {
    return [];
  }

  toBoolean(): boolean {
    throw new Error("Method not implemented");
  }

  toDate(): Date {
    throw new Error("Method not implemented");
  }

  toFile(_name: string, _newLine?: boolean, _location?: string): void {
    throw new Error("Method not implemented.");
  }

  toFloat(): number {
    throw new Error("Method not implemented");
  }

  toInteger(): number {
    throw new Error("Method not implemented");
  }

  toRaw(): string {
    throw new Error("Method not implemented");
  }

  toString(): string {
    return "";
  }

  write(_path: string[], _value: string): HL7Node {
    return this;
  }
}
