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

import { FieldRepetition } from "./fieldRepetition";
import { NodeBase } from "./nodeBase";
import { ValueNode } from "./valueNode";

/** @internal */
export class Field extends ValueNode {
  /** @internal */
  constructor(parent: NodeBase, key: string, text: string) {
    super(parent, key, text, Delimiters.Repetition);
  }

  /** @internal */
  read(path: string[]): HL7Node {
    if (this.children.length > 0) {
      return this.children[0].read(path);
    }
    return this;
  }

  /**
   * Create a field repetition field of FieldRepetition
   * @since 1.0.0
   * @see {@link FieldRepetition}
   * @param text
   * @param _index
   * @protected
   */
  protected createChild(text: string, _index: number): HL7Node {
    return new FieldRepetition(this, this.key, text);
  }

  /** @internal */
  protected writeCore(path: string[], value: string): HL7Node {
    return this._ensureChild().write(path, value);
  }

  /** @internal */
  private _ensureChild(): HL7Node {
    let child: HL7Node;
    if (this.children.length === 0) {
      child = this.createChild("", 0);
      this.setChild(child, 0);
    } else {
      child = this.children[0];
    }
    return child;
  }
}
