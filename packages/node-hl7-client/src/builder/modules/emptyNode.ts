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
