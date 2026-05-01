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
    if (this._name === "MSH" || this._name === "BHS" || this._name === "FHS") {
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
        for (let index = 0; index < value.length; index++) {
          this.set(`${resolvedPath}.${index + 1}`, value[index]);
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
    if (index < 1 || isNaN(index)) {
      throw new HL7FatalError(
        "Can't have an index < 1 or not be a valid number.",
      );
    }
    if (
      (this._name === "MSH" || this._name === "BHS" || this._name === "FHS") &&
      index !== 1 &&
      index !== 2
    ) {
      index = index - 1;
    }

    return this.writeAtIndex(path, value, index);
  }
}
