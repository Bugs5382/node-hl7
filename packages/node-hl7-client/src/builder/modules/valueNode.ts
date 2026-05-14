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
import { Delimiters } from "@/declaration/enum";
import { HL7FatalError } from "@/helpers/exception";

import { NodeBase } from "./nodeBase";

/** @internal */
export class ValueNode extends NodeBase {
  /** @internal */
  protected key: string;

  /** @internal */
  constructor(
    parent: NodeBase,
    key: string,
    text: string,
    delimiter?: Delimiters | undefined,
  ) {
    super(parent, text, delimiter);
    this.key = key;
  }

  /** @internal */
  toBoolean(): boolean {
    switch (this.toString()) {
      case "N": {
        return false;
      }
      case "Y": {
        return true;
      }
    }
    throw new HL7FatalError("Not a valid value for boolean value.");
  }

  /** @internal */
  toDate(): Date {
    const text = this.toString();

    const year = Number.parseInt(text.slice(0, 4));
    const month = Number.parseInt(text.slice(4, 6)) - 1;
    const day = Number.parseInt(text.slice(6, 8));
    const hour = Number.parseInt(text.slice(8, 10) || "0");
    const minute = Number.parseInt(text.slice(10, 12) || "0");
    const second = Number.parseInt(text.slice(12, 14) || "0");

    const baseDate = new Date(Date.UTC(year, month, day, hour, minute, second));

    const tzOffsetMatch = text.match(/([+-])(\d{2})(\d{2})$/);

    if (tzOffsetMatch) {
      const sign = tzOffsetMatch[1] === "+" ? -1 : 1; // inverse because offset is from UTC
      const tzHour = Number.parseInt(tzOffsetMatch[2]);
      const tzMin = Number.parseInt(tzOffsetMatch[3]);
      const offsetMillis = sign * ((tzHour * 60 + tzMin) * 60 * 1000);
      return new Date(baseDate.getTime() + offsetMillis);
    }

    return new Date(year, month, day, hour, minute, second);
  }

  /** @internal */
  toFloat(): number {
    return Number.parseFloat(this.toString());
  }

  /** @internal */
  toInteger(): number {
    return Number.parseInt(this.toString());
  }

  /** @internal */
  toString(): string {
    const children = this.children;
    return children.length === 0 ? this.toRaw() : children[0].toString();
  }

  /** @internal */
  protected pathCore(): string[] {
    if (this.parent === null) {
      throw new HL7FatalError("Somehow, this.parent is null.");
    }
    return [...this.parent.path, this.key];
  }
}
