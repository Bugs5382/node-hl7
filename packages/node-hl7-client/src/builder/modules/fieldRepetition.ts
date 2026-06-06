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
