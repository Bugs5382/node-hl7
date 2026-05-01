import { HL7Node } from "@/builder/interface/hL7Node";
import { Delimiters } from "@/declaration/enum";
import { HL7FatalError } from "@/helpers/exception";

import { Component } from "./component";
import { NodeBase } from "./nodeBase";
import { ValueNode } from "./valueNode";

/** @internal */
export class FieldRepetition extends ValueNode {
  /** @internal */
  constructor(parent: NodeBase, key: string, text: string) {
    super(parent, key, text, Delimiters.Component);
  }

  /** @internal */
  read(path: string[]): HL7Node {
    const component =
      this.children[Number.parseInt(path.shift() as string) - 1];
    return path.length > 0 ? component.read(path) : component;
  }

  /** @internal */
  protected createChild(text: string, index: number): HL7Node {
    return new Component(this, (index + 1).toString(), text);
  }

  /** @internal */
  protected pathCore(): string[] {
    if (this.parent == undefined) {
      throw new HL7FatalError("this.parent must not be null.");
    }
    return this.parent.path;
  }

  /** @internal */
  protected writeCore(path: string[], value: string): HL7Node {
    return this.writeAtIndex(
      path,
      value,
      Number.parseInt(path.shift() as string) - 1,
    );
  }
}
