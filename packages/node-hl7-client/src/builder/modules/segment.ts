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
import { Delimiters } from "@/declaration/enum";
import { HL7FatalError } from "@/helpers/exception";
import { isHL7Number, isHL7String } from "@/utils/is";

import { Field } from "./field";
import { NodeBase } from "./nodeBase";
import { SubComponent } from "./subComponent";

/**
 * Segment
 * @since 1.0.0
 */
export class Segment extends NodeBase {
  /** @internal */
  private readonly _segmentName: string;

  /** @internal */
  constructor(parent: NodeBase, text: string) {
    super(parent, text, Delimiters.Field);
    if (!isHL7String(text) || text.length === 0) {
      throw new HL7FatalError("Segment must have a name.");
    }
    this._segmentName = text.slice(0, 3);
    this._name = this._segmentName;
  }

  /** @internal */
  read(path: string[]): HL7Node {
    let index = Number.parseInt(path.shift() as string);
    if (index < 1) {
      throw new HL7FatalError("Index must be 1 or greater.");
    }
    if (["BHS", "FHS", "MSH"].includes(this._name)) {
      if (this.message !== undefined && index === 1) {
        return new SubComponent(
          this,
          "1",
          this.message.delimiters[Delimiters.Field],
        );
      } else {
        index = index - 1;
      }
    }

    const field = this.children[index];
    return field !== undefined && path.length > 0 ? field.read(path) : field;
  }

  /** @internal */
  set(path: number | string, value?: any): HL7Node {
    if (arguments.length === 1) {
      return this.ensure(path);
    }

    if (typeof path === "string") {
      const resolvedPath = /^\d+(\.\d+)*$/.test(path)
        ? `${this._segmentName}.${path}`
        : path;
      if (Array.isArray(value)) {
        for (const [index, item] of value.entries()) {
          this.set(`${resolvedPath}.${index + 1}`, item);
        }
      } else {
        const _path = this.preparePath(resolvedPath);
        this.write(_path, this.prepareValue(value));
      }

      return this;
    } else if (isHL7Number(path)) {
      if (Array.isArray(value)) {
        const child = this.ensure(path);
        for (let index = 0, l = value.length; index < l; index++) {
          child.set(index, value[index]);
        }
        return this;
      } else {
        this.setChild(this.createChild(this.prepareValue(value), path), path);
      }

      return this;
    }

    throw new HL7FatalError("Path must be a string or number.");
  }

  /** @internal */
  protected createChild(text: string, index: number): HL7Node {
    return new Field(this, index.toString(), text);
  }

  /** @internal */
  protected pathCore(): string[] {
    return [this._segmentName];
  }

  /** @internal */
  protected writeCore(path: string[], value: string): HL7Node {
    let index = Number.parseInt(path.shift() as string);
    if (index < 1 || Number.isNaN(index)) {
      throw new HL7FatalError(
        "Can't have an index < 1 or not be a valid number.",
      );
    }
    if (
      ["BHS", "FHS", "MSH"].includes(this._name) &&
      index !== 1 &&
      index !== 2
    ) {
      index = index - 1;
    }

    return this.writeAtIndex(path, value, index);
  }
}
