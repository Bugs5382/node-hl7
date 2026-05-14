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
import EventEmitter from "node:events";

import { HL7Node } from "@/builder/interface/hL7Node";
import { Delimiters } from "@/declaration/enum";
import { HL7FatalError } from "@/helpers/exception";
import { padHL7Date } from "@/utils/createHL7Date";
import { isHL7Number, isHL7String } from "@/utils/is";

import { Batch } from "../batch";
import { Message } from "../message";
import { EmptyNode } from "./emptyNode";

/**
 * Node Base
 * @since 1.0.0
 */
export class NodeBase extends EventEmitter implements HL7Node {
  static empty = new EmptyNode();
  _name: string;

  get length(): number {
    return this.children.length;
  }
  get name(): string {
    if (this._name !== undefined) {
      return this._name;
    }
    this._name = this.path.join(".");
    return this._name;
  }
  get path(): string[] {
    if (this._path !== undefined) {
      return this._path;
    }
    this._path = this.pathCore();
    return this._path;
  }
  protected parent: NodeBase | null;
  /** @internal */
  protected get children(): HL7Node[] {
    if (this._text !== "" && this._children.length === 0) {
      const parts = this._text.split(this.delimiter);
      const children = Array.from({ length: parts.length });
      for (let index = 0, l = parts.length; index < l; index++) {
        children[index] = this.createChild(parts[index], index);
      }
      this._children = children;
    }
    return this._children;
  }
  /** @internal */
  protected get delimiter(): string {
    if (this.message === undefined) {
      throw new HL7FatalError("this.message is not defined.");
    }

    if (this._delimiter === undefined) {
      throw new HL7FatalError("this.message is not defined.");
    }

    this._delimiterText = this.message.delimiters[this._delimiter];
    return this._delimiterText;
  }
  /** @internal */
  protected get message(): Batch | Message | undefined {
    if (this._message !== undefined) {
      return this._message;
    }
    this._message = this.parent === null ? (this as any) : this.parent.message;
    return this._message;
  }
  private _children: HL7Node[];

  private readonly _delimiter: Delimiters | undefined;

  private _delimiterText: string;

  private _dirty: boolean;

  private _message: Batch | Message | undefined;

  private _path: string[] | undefined;

  private _text: string;

  constructor(
    parent: NodeBase | null,
    text: string = "",
    delimiter?: Delimiters | undefined,
  ) {
    super();
    this.parent = parent;

    this._children = [];
    this._delimiter = delimiter;
    this._delimiterText = "";
    this._dirty = false;
    this._name = "";
    this._text = text;
  }

  exists(path: number | string): boolean {
    const value = this.get(path);
    if (value == undefined) {
      return false;
    }
    return !value.isEmpty();
  }

  forEach(callback: (value: HL7Node, index: number) => void): void {
    const children = this.children;
    for (let index = 0, l = children.length; index < l; index++) {
      callback(children[index], index);
    }
  }

  get(path: number | string): HL7Node {
    let returnValue: any;

    if (typeof path === "number") {
      if (path >= 0 && path < this.children.length) {
        returnValue = this.children[path];
      }
    } else if (path !== "") {
      const _path = this.preparePath(path);
      returnValue = this.read(_path);
    }

    return returnValue === undefined
      ? (NodeBase.empty as HL7Node)
      : (returnValue as HL7Node);
  }

  isEmpty(): boolean {
    return this.children.length === 0;
  }

  read(_path: string[]): HL7Node {
    throw new Error("Method not implemented.");
  }

  set(path: number | string, value?: any): HL7Node {
    if (arguments.length === 1) {
      return this.ensure(path);
    }

    if (typeof path === "string") {
      if (Array.isArray(value)) {
        for (let index = 0; index < value.length; index++) {
          this.set(`${path}.${index + 1}`, value[index]);
        }
      } else {
        const _path = this.preparePath(path);
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

  toArray(): HL7Node[] {
    return this.children;
  }

  toBoolean(): boolean {
    throw new Error("Method not implemented.");
  }

  toDate(): Date {
    throw new Error("Method not implemented.");
  }

  toFile(_name: string, _newLine?: boolean, _location?: string): void {
    throw new Error("Method not implemented.");
  }

  toFloat(): number {
    throw new Error("Method not implemented.");
  }

  toInteger(): number {
    throw new Error("Method not implemented.");
  }

  toRaw(): string {
    if (!this._dirty) {
      return this._text === undefined ? "" : this._text;
    }
    this._dirty = false;
    this._text = this.children.map((x) => x.toRaw()).join(this.delimiter);
    return this._text;
  }

  toString(): string {
    return this.toRaw();
  }

  write(path: string[], value: string): HL7Node {
    this.setDirty();
    return this.writeCore(path, value == undefined ? "" : value);
  }

  /** @internal */
  protected addChild(text: string): HL7Node {
    this.setDirty();
    const child = this.createChild(text, this.children.length);
    this.children.push(child);
    return child;
  }

  /** @internal */
  protected createChild(_text: string, _index: number): HL7Node {
    throw new Error("Method not implemented.");
  }

  /** @internal */
  protected ensure(path: number | string): HL7Node {
    const returnValue = this.get(path);
    if (returnValue !== NodeBase.empty) {
      return returnValue;
    }
    if (typeof path === "number") {
      return this.setChild(this.createChild("", path), path);
    } else if (isHL7String(path)) {
      return this.write(this.preparePath(path), "");
    }
    throw new HL7FatalError("There seems to be a problem.");
  }

  /** @internal */
  protected pathCore(): string[] {
    throw new Error("Method not implemented.");
  }

  /** @internal */
  protected preparePath(path: string): string[] {
    let parts = path.split(".");
    if (parts[0] === "") {
      parts.shift();
      parts = this.path.concat(parts);
    }

    if (!this._isSubPath(parts)) {
      throw new HL7FatalError(
        "'" +
          parts.toString() +
          "' is not a sub-path of '" +
          this.path.toString() +
          "'",
      );
    }

    return this._remainderOf(parts);
  }

  /** @internal */
  protected prepareValue(value: any): string {
    if (value == undefined) return "";

    if (typeof value === "string" && this.message !== undefined) {
      return this.message.escape(value);
    }

    if (typeof value === "number") {
      return value.toString();
    }

    if (typeof value === "boolean") {
      return value ? "Y" : "N";
    }

    if (value instanceof Date) {
      return this._formatDateTime(value);
    }

    return value.toString();
  }

  /** @internal */
  protected setChild(child: HL7Node, index: number): HL7Node {
    this.setDirty();
    const children = this.children;
    if (index < children.length) {
      children[index] = child;
      return child;
    }
    for (let index_ = children.length; index_ < index; index_++) {
      children.push(this.createChild("", index_));
    }
    children.push(child);
    return child;
  }

  /** @internal */
  protected setDirty(): void {
    if (!this._dirty) {
      this._dirty = true;
      if (this.parent !== undefined && this.parent !== null) {
        this.parent.setDirty();
      }
    }
  }

  /** @internal */
  protected writeAtIndex(
    path: string[],
    value: string,
    index: number,
    emptyValue = "",
  ): HL7Node {
    let child: HL7Node;

    if (path.length === 0) {
      child = this.createChild(value === undefined ? emptyValue : value, index);
    } else {
      child =
        index < this.children.length
          ? this.children[index]
          : this.createChild(emptyValue, index);
    }

    this.setChild(child, index);

    if (path.length > 0) {
      return child.write(path, value);
    }

    return child;
  }

  /** @internal */
  protected writeCore(_path: string[], _value: string): HL7Node {
    throw new Error("Method not implemented.");
  }

  /** @internal */
  private _formatDate(date: Date): string {
    return (
      date.getFullYear().toString() +
      padHL7Date(date.getMonth() + 1, 2) +
      padHL7Date(date.getDate(), 2)
    );
  }

  /** @internal */
  private _formatDateTime(date: Date): string {
    // check if there is a time component
    if (
      date.getHours() !== 0 ||
      date.getMinutes() !== 0 ||
      date.getSeconds() !== 0 ||
      date.getMilliseconds() !== 0
    ) {
      return (
        this._formatDate(date) +
        padHL7Date(date.getHours(), 2) +
        padHL7Date(date.getMinutes(), 2) +
        padHL7Date(date.getSeconds(), 2)
      );
    }
    return this._formatDate(date);
  }

  /** @internal */
  private _isSubPath(other: string[]): boolean {
    if (this.path.length >= other.length) {
      return false;
    }
    const path = this.path;
    for (let index = 0, l = path.length; index < l; index++) {
      if (path[index] !== other[index]) {
        return false;
      }
    }
    return true;
  }

  /** @internal */
  private _remainderOf(other: string[]): string[] {
    const path = this.path;
    return other.slice(path.length);
  }
}
