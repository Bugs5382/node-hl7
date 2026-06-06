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

import { NodeBase } from "./nodeBase";
import { Segment } from "./segment";

/**
 * Segment List
 * @since 1.0.0
 */
export class SegmentList extends NodeBase {
  /** @internal */
  get name(): string {
    return this._segments[0].name;
  }

  /** @internal */
  protected get children(): HL7Node[] {
    return this._segments;
  }

  /** @internal */
  private readonly _segments: Segment[];

  /** @internal */
  constructor(parent: NodeBase, segments: Segment[]) {
    super(parent);
    this._segments = segments;
  }

  /** @internal */
  read(path: string[]): HL7Node {
    return this._segments[0].read(path);
  }

  /**
   * Iterate over each segment in the list. Lets callers do
   * `for (const seg of message.get("EVN")) { ... }` even when there is
   * just one matching segment.
   * @since 4.0.0
   */
  [Symbol.iterator](): Iterator<Segment> {
    return this._segments[Symbol.iterator]();
  }

  /** @internal */
  toString(): string {
    return this._segments[0].toString();
  }

  /** @internal */
  protected pathCore(): string[] {
    return this._segments[0].path;
  }

  /** @internal */
  protected writeCore(path: string[], value: string): HL7Node {
    return this._segments[0].write(path, value);
  }
}
