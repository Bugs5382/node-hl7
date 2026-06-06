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
import fs from "node:fs";
import path from "node:path";

import { HL7Node } from "@/builder/interface/hL7Node";
import { SegmentList } from "@/builder/modules/segmentList";
import { normalizedClientFileParserOptions } from "@/builder/normalizedParser";
import { NAME_FORMAT } from "@/helpers/constants";
import { HL7FatalError, HL7ParserError } from "@/helpers/exception";
import { ClientBuilderFileOptions } from "@/modules/types";
import { createHL7Date } from "@/utils/createHL7Date";
import { split } from "@/utils/spilt";

import { Batch } from "./batch";
import { Message } from "./message";
import { RootBase } from "./modules/rootBase";
import { Segment } from "./modules/segment";

/**
 * File Batch Class
 * @remarks Create a File Batch (FHS) which will could include many BHS/BTS segments,
 * which could include many Message (MSH) segments to output the contents into a file on the OS.
 * These files could then be used to send manually or read by another system to interpret the contents.
 * This class helps
 * in generating the particulars for that file generation to make sure that it follows the correct format.
 * @since 1.0.0
 */
export class FileBatch extends RootBase {
  /** @internal **/
  _opt: ReturnType<typeof normalizedClientFileParserOptions>;
  /** @internal */
  protected _batchCount: number;
  /** @internal */
  protected _fileName: string;
  /** @internal */
  protected _lines: string[];
  /** @internal */
  protected _messagesCount: number;

  /**
   * @since 1.0.0
   * @param props Passing the options to build the file batch.
   */
  constructor(properties?: ClientBuilderFileOptions) {
    const opt = normalizedClientFileParserOptions(properties);
    super(opt);
    this._fileName = "";
    this._lines = [];
    this._opt = opt;
    this._batchCount = 0;
    this._messagesCount = 0;
    this._fileName = "";

    if (opt.text !== undefined && opt.text !== "") {
      this._lines = split(opt.text).filter((line: string) =>
        line.startsWith("MSH"),
      );
    } else {
      this.set("FHS.7", createHL7Date(new Date(), this._opt.date));
    }
  }

  /**
   * AAdd a Message or a Batch to the File
   * @remarks This adds a Message (MSH) output into the file batch.
   * If there is a Batch ("BHS") already part of this file, any new Message type will be added to the first found BHS regardless if the second Batch is added last.
   * @since 1.0.0
   * @param message The {@link Message} or {@link Batch} to add into the batch.
   */
  add(message: Batch | Message): void {
    this.setDirty();
    // if we are adding a message to a file
    if (message instanceof Message) {
      // and we already added a batch segment, we need to add it to the batch segment since we cannot add a batch and then a MSH segment.
      // That would violate HL7 specs.
      if (this._batchCount >= 1) {
        // get the first batch segment we find
        const batch = this._getFirstBatch();
        // update the count of the BTS segment by 1
        const seg = batch.getFirstSegment("BTS");
        seg.set(1, batch._messagesCount + 1);
        // add the message to the batch
        batch.add(message, batch._messagesCount + 1);
      } else {
        this._messagesCount = this._messagesCount + 1;
        this.children.push(message);
      }
    } else {
      // if there are already messages added before a batch
      if (this._messagesCount >= 1) {
        throw new HL7ParserError(
          "Unable to add a batch segment, since there is already messages added individually.",
        );
      }
      this._batchCount = this._batchCount + 1;
      this.children.push(message);
    }
  }

  /**
   * Create a file to be stored.
   * @since 1.0.0
   * @param name Name of the file.
   */
  createFile(name: string): void {
    const getFSHDate = this.get("FHS.7").toString();

    if (name === undefined) {
      throw new HL7FatalError("Missing file name.");
    }

    if (NAME_FORMAT.test(name)) {
      throw new HL7FatalError(
        "name must not contain certain characters: `!@#$%^&*()+\\-=\\[\\]{};':\"\\\\|,.<>\\/?~.",
      );
    }

    if (this._opt.location !== undefined) {
      // Use synchronous fs APIs so callers can read the file immediately
      // after createFile() returns. The async + fire-and-forget pattern that
      // lived here previously had a race where the file did not exist yet
      // when downstream code (e.g. FileBatch(fullFilePath)) tried to read it.
      if (!fs.existsSync(this._opt.location)) {
        fs.mkdirSync(this._opt.location, { recursive: true });
      }

      this._fileName = `hl7.${name}.${getFSHDate}.${this._opt.extension as string}`;

      fs.appendFileSync(
        path.join(this._opt.location, this._fileName),
        this.toString(),
      );
    }
  }

  /**
   * End Batch
   * @remarks At the conclusion of building the file batch,
   * (Usually {@link add} method will be before this) will add the File Batch Trailing Segment (FTS) to the end.
   * If a message (MSH) is added after this,
   * that message (MSH) will get added to the first BHS found if there is one, otherwise it will just be added.
   * This might be typical inside a file output process.
   * @since 1.0.0
   */
  end(): void {
    const segment = this._addSegment("FTS");
    segment.set("1", this._batchCount + this._messagesCount);
  }

  /**
   * Get File name
   * @remarks Get File name going to be created.
   * @since 1.2.0
   */
  fileName(): string {
    return this._fileName;
  }

  /**
   * Get FHS Segment at Path
   * @since 1.0.0
   * @param path Could be 'FHS.7' or 7, and it shall get the same result.
   * @example
   * ```ts
   * const fileBatch = file.get('FHS.7')
   * ```
   * or
   * ```ts
   * const fileBatch = file.get(7)
   * ```
   */
  get(path: number | string): HL7Node {
    return super.get(path);
  }

  /**
   * Get Messages within a submitted File Batch
   * @remarks This will parse the passed on "text"
   * in the contractor options and get all the messages (MSH) segments within it and return an array of them.
   * This will happen regardless of the depth of the segments.
   * @since 1.0.0
   * @example
   * ```ts
   * try {
   *  // parser the batch
   *  const parser = new FileBatch({ text: loadedMessage })
   *  // load the messages
   *  const allMessage = parser.messages()
   *  // loop messages
   *  allMessage.forEach((message: Message) => {
   *    const messageParsed = new Message({ text: message.toString() })
   *  })
   * } catch (e) {
   *   // error here
   * }
   * ```
   * @returns Returns an array of messages or a HL7ParserError will throw.
   */
  messages(): Message[] {
    if (this._lines !== undefined && this._opt.newLine !== undefined) {
      const message: Message[] = [];
      const re = new RegExp(`${this._opt.newLine}$`, "g");
      for (let index = 0; index < this._lines.length; index++) {
        message.push(new Message({ text: this._lines[index].replace(re, "") }));
      }
      return message;
    }
    throw new HL7FatalError("No messages inside file segment.");
  }

  /** @internal */
  read(path: string[]): HL7Node {
    const segmentName = path.shift() as string;
    if (path.length === 0) {
      const segments = this.children.filter(
        (x) => (x as Segment).name === segmentName,
      ) as Segment[];
      if (segments.length > 0) {
        return new SegmentList(this, segments) as HL7Node;
      }
    } else {
      if (segmentName === undefined) {
        throw new HL7ParserError("Segment name is not defined.");
      }
      const segment = this._getFirstSegment(segmentName);
      if (segment !== undefined) {
        return segment.read(path);
      }
    }
    throw new HL7FatalError("Unable to process the read function correctly.");
  }

  /**
   * Set Batch Segment at Path with a Value
   * @since 1.0.0
   * @example
   * ```ts
   * const batch = new Batch()
   * batch.set('BHS.7', '20231231')
   * ```
   * @param path Where you want to set in the segment
   * @param value The value.
   * It Can be an Array, String, or Boolean.
   * If the value is not set, you can chain this to expand the paths
   * @example
   * If the value is not used this can be employed:
   * ```ts
   * batch.set('BHS.3').set(0).set('BHS.3.1', 'abc');
   * ```
   */
  set(path: number | string, value?: any): HL7Node {
    return super.set(path, value);
  }

  /**
   * Start Batch
   * @since 1.0.0
   */
  start(): void {
    this.set("FHS.7", createHL7Date(new Date()));
  }

  /** @internal */
  protected createChild(text: string, _index: number): HL7Node {
    return new Segment(this, text.trim());
  }

  /** @internal */
  protected pathCore(): string[] {
    return [];
  }

  /** @internal */
  protected writeCore(path: string[], value: string): HL7Node {
    const segmentName = path.shift() as string;
    if (segmentName === undefined) {
      throw new HL7ParserError("Segment name is not defined.");
    }
    return this.writeAtIndex(path, value, 0, segmentName);
  }

  /** @internal **/
  private _addSegment(path: string): Segment {
    if (path === undefined) {
      throw new HL7ParserError("Missing segment path.");
    }

    const preparedPath = this.preparePath(path);
    if (preparedPath.length !== 1) {
      throw new HL7ParserError(`"Invalid segment ${path}."`);
    }

    return this.addChild(preparedPath[0]) as Segment;
  }

  /** @internal */
  private _getFirstBatch(): Batch {
    const children = this.children;
    for (let index = 0, l = children.length; index < l; index++) {
      if (children[index] instanceof Batch) {
        return children[index] as Batch;
      }
    }
    throw new HL7FatalError("Unable to process _getFirstBatch.");
  }

  /** @internal */
  private _getFirstSegment(name: string): Segment {
    const children = this.children;
    for (let index = 0, l = children.length; index < l; index++) {
      const segment = children[index] as Segment;
      if (segment.name === name) {
        return segment;
      }
    }
    throw new HL7ParserError("Unable to process _getFirstSegment.");
  }
}

export default FileBatch;
