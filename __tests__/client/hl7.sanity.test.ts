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
import {
  Batch,
  FileBatch,
  HL7FatalError,
  isBatch,
  isFile,
  Message,
} from "node-hl7-client/src";
import { describe, expect, test } from "vitest";

import { MSH_HEADER } from "./__data__/constants";

describe("node hl7 client - sanity tests", () => {
  describe("Message", () => {
    test("rejects construction with no arguments", async () => {
      try {
        new Message();
      } catch (error) {
        expect(error).toEqual(
          new HL7FatalError(
            "mshHeader must be set if no HL7 message is being passed.",
          ),
        );
      }
    });

    test("rejects empty text payload", async () => {
      try {
        new Message({ text: "" });
      } catch (error) {
        expect(error).toEqual(
          new HL7FatalError(
            "mshHeader must be set if no HL7 message is being passed.",
          ),
        );
      }
    });

    test("rejects text that does not start with MSH", async () => {
      try {
        new Message({ text: "PV1|||||||^Jones\r" });
      } catch (error) {
        expect(error).toEqual(
          new Error("text must begin with the MSH segment."),
        );
      }
    });

    test("rejects empty msh_9_1", async () => {
      try {
        new Message({
          // @ts-expect-error msh 9.1 is empty
          messageHeader: {
            msh_9_1: "",
          },
        });
      } catch (error) {
        expect(error).toEqual(new Error("MSH.9.1 & MSH 9.2 must be defined."));
      }
    });

    test("rejects empty msh_9_2", async () => {
      try {
        new Message({
          /**
           * @ts-expect-error 9.2 should be not empty
           */
          messageHeader: {
            msh_9_1: "ADT",
            msh_9_2: "",
          },
        });
      } catch (error) {
        expect(error).toEqual(
          new Error("MSH.9.2 must be 3 characters in length."),
        );
      }
    });

    test("rejects msh_9_1 with length other than 3", async () => {
      try {
        new Message({
          /**
           * @ts-expect-error not filling this out for unit testing
           */
          messageHeader: {
            msh_10: "123456",
            msh_9_1: "ADTY",
            msh_9_2: "A01",
          },
        });
      } catch (error) {
        expect(error).toEqual(
          new Error("MSH.9.1 must be 3 characters in length."),
        );
      }
    });

    test("rejects msh_9_2 with length other than 3", async () => {
      try {
        new Message({
          /**
           * @ts-expect-error not filling this out for unit testing
           */
          messageHeader: {
            msh_10: "123456",
            msh_9_1: "ADT",
            msh_9_2: "A01Y",
          },
        });
      } catch (error) {
        expect(error).toEqual(
          new Error("MSH.9.2 must be 3 characters in length."),
        );
      }
    });

    test("rejects msh_9_3 shorter than 3 chars", async () => {
      try {
        new Message({
          /**
           * @ts-expect-error not filling this out for unit testing
           */
          messageHeader: {
            msh_10: "12345",
            msh_9_1: "ADT",
            msh_9_2: "A01",
            msh_9_3: "AC",
          },
        });
      } catch (error) {
        expect(error).toEqual(
          new Error(
            "MSH.9.3 must be 3 to 10 characters in length if specified.",
          ),
        );
      }
    });

    test("rejects msh_9_3 longer than 10 chars", async () => {
      try {
        new Message({
          /**
           * @ts-expect-error not filling this out for unit testing
           */
          messageHeader: {
            msh_10: "12345",
            msh_9_1: "ADT",
            msh_9_2: "A01",
            msh_9_3: "ADT_A01_ABCDE",
          },
        });
      } catch (error) {
        expect(error).toEqual(
          new Error(
            "MSH.9.3 must be 3 to 10 characters in length if specified.",
          ),
        );
      }
    });

    test("rejects msh_10 longer than 199 chars", async () => {
      try {
        new Message({
          /**
           * @ts-expect-error not filling this out for unit testing
           */
          messageHeader: {
            msh_10:
              "AaasdfjlsdjflskdfsdflkjjsdlkflkasdflsjdflkjasdlfjsldkjlskjdfksajflksjdfAaasdfjlsdjflskdfsdflkjjsdlkflkasdflsjdflkjasdlfjsldkjlskjdfksajflksjdfAaasdfjlsdjflskdfsdflkjjsdlkflkasdflsjdflkjasdlfjsldkjlskjdfksajflksjdf",
            msh_9_1: "ADT",
            msh_9_2: "A01",
          },
        });
      } catch (error) {
        expect(error).toEqual(
          new Error(
            "MSH.10 must be greater than 0 and less than 199 characters.",
          ),
        );
      }
    });

    test("rejects empty msh_10", async () => {
      try {
        new Message({
          /**
           * @ts-expect-error not filling this out for unit testing
           */
          messageHeader: {
            msh_10: "",
            msh_9_1: "ADT",
            msh_9_2: "A01",
          },
        });
      } catch (error) {
        expect(error).toEqual(
          new Error(
            "MSH.10 must be greater than 0 and less than 199 characters.",
          ),
        );
      }
    });
  });

  describe("Batch", () => {
    test("rejects a single MSH payload as batch input", async () => {
      try {
        new Batch({
          text: "MSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345||2.7\rEVN||20081231",
        });
      } catch (error) {
        expect(error).toEqual(
          new HL7FatalError(
            "Unable to process a single MSH as a batch. Use Message.",
          ),
        );
      }
    });

    test("isBatch is false for a single Message", async () => {
      const message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID",
        },
      });
      expect(isBatch(message.toString())).toBe(false);
    });

    test("isFile is false for a Batch toString output", async () => {
      const batch = new Batch();
      batch.start();
      batch.end();
      expect(isFile(batch.toString())).toBe(false);
    });

    test("isBatch is true for a Batch toString output", async () => {
      const batch = new Batch();
      batch.start();
      batch.end();
      expect(isBatch(batch.toString())).toBe(true);
    });
  });

  describe("FileBatch", () => {
    test("isFile is false for a single Message", async () => {
      const message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID",
        },
      });
      expect(isFile(message.toString())).toBe(false);
    });

    test("isFile is true for a FileBatch toString output", async () => {
      const file = new FileBatch();
      file.start();
      file.end();
      expect(isFile(file.toString())).toBe(true);
    });
  });

  describe("parse message, batch, and file", () => {
    const hl7_string: string =
      "MSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345||2.7\rEVN||20081231";
    const hl7_batch_msh_string: string =
      "MSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345||2.7\rEVN||20081231\rMSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345||2.7\rEVN||20081231";
    const hl7_non_standard: string =
      "MSH:-+?*:field2:field3component1-field3component2:field4repeat1+field4repeat2:field5subcomponent1*field5subcomponent2:field6?R?";
    const hl7_batch: string =
      "BHS|^~\\&|||||20231208\rMSH|^~\\&|||||20231208||ADT^A01^ADT_A01|CONTROL_ID||2.7\rEVN||20081231\rEVN||20081231\rBTS|1";
    const hl7_batch_non_standard: string =
      "BHS:-+?*:::::20231208\rMSH|^~\\&|||||20231208||ADT^A01^ADT_A01|CONTROL_ID||2.7\rEVN||20081231\rEVN||20081231\rBTS|1";
    const hl7_line_breaks: string =
      "MSH|^~\\&|device||Host||20240101000000+0000||OUL^R22^OUL_R22|2|P|2.5.1|||NE|AL||UNICODE UTF-8|||LAB-01^IHE\r";
    const hl7_timezone: string = String.raw`MSH|^~\\&|device||Host||19981004010159+0100||OUL^R22^OUL_R22|2|P|2.5.1|||NE|AL||UNICODE UTF-8|||LAB-01^IHE\r`;

    test("MSH.7 timezone offset is parsed to UTC", async () => {
      const message = new Message({ text: hl7_timezone });
      expect(message.get("MSH.7").toDate()).toEqual(
        new Date(`1998-10-04T00:01:59.000Z`),
      );
    });

    test("trailing CR line break is normalized", async () => {
      const message = new Message({ text: hl7_line_breaks });
      expect(message.get("MSH.12").toString()).toBe("2.5.1");
    });

    test("MSH fields and EVN segment count parse correctly", async () => {
      const message = new Message({ text: hl7_string });

      expect(message.toString().slice(0, 8)).toBe(String.raw`MSH|^~\&`);
      expect(message.get("MSH.3").exists("")).toBe(false);
      expect(message.get("MSH.9.1").toString()).toBe("ADT");
      expect(message.get("MSH.9.2").toString()).toBe("A01");
      expect(message.get("MSH.9.3").toString()).toBe("ADT_A01");
      expect(message.get("MSH.10").toString()).toBe("12345");
      expect(message.get("MSH.11.1").toString()).toBe("");
      expect(message.get("MSH.12").toString()).toBe("2.7");
      expect(message.get("EVN.2").toString()).toBe("20081231");

      let count: number = 0;
      for (const segment of message.get("EVN")) {
        expect(segment.name).toBe("EVN");
        count++;
      }

      expect(count).toBe(1);
    });

    test("non-standard MSH delimiters are honored on parse", async () => {
      const message = new Message({ text: hl7_non_standard });

      expect(message.get("MSH.3").toString()).toBe("field2");
      expect(message.get("MSH.4.2").toString()).toBe("field3component2");
      expect(message.get("MSH.5").get(0).toString()).toBe("field4repeat1");
      expect(message.get("MSH.5").get(1).toString()).toBe("field4repeat2");
      expect(message.get("MSH.6.1.1").toString()).toBe("field5subcomponent1");
      expect(message.get("MSH.6.1.2").toString()).toBe("field5subcomponent2");
      expect(message.get("MSH.7").toString()).toBe("field6+");
    });

    test("Batch parses BHS header from text input", async () => {
      const batch = new Batch({ text: hl7_batch });

      expect(batch.toString().slice(0, 8)).toBe(String.raw`BHS|^~\&`);
    });

    test("non-standard BHS delimiters are honored on parse", async () => {
      const batch = new Batch({ text: hl7_batch_non_standard });

      expect(batch.toString().slice(0, 8)).toBe("BHS:-+?*");
    });

    test("BHS yields one Message containing two EVN segments", async () => {
      const batch = new Batch({ text: hl7_batch });
      const messages = batch.messages();
      expect(messages.length).toBe(1);

      messages.forEach((message: Message): void => {
        let count: number = 0;
        for (const segment of message.get("EVN")) {
          expect(segment.name).toBe("EVN");
          count++;
        }
        expect(count).toBe(2);
      });
    });

    test("Message rejects multi-MSH input and points to Batch", async () => {
      try {
        new Message({ text: hl7_batch_msh_string });
      } catch (error) {
        expect(error).toEqual(
          new HL7FatalError("Multiple MSH segments found. Use Batch."),
        );
      }
    });

    test("multiple MSH without BHS still parse as a Batch", async () => {
      const batch = new Batch({ text: hl7_batch_msh_string });

      const messages = batch.messages();
      expect(messages.length).toBe(2);

      messages.forEach((message: Message): void => {
        let count: number = 0;
        for (const segment of message.get("EVN")) {
          expect(segment.name).toBe("EVN");
          count++;
        }
        expect(count).toBe(1);
      });
    });

    test("segment name in field value does not trigger a new segment", async () => {
      // EVN.1 contains "MSH|fake" — old regex would falsely match this as a second MSH segment
      const message = new Message({
        text: "MSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345||2.7\rEVN|MSH|fake|20081231",
      });

      expect(message.get("EVN.1").toString()).toBe("MSH");
      expect(message.get("EVN.2").toString()).toBe("fake");
      expect(message.get("EVN.3").toString()).toBe("20081231");

      let evnCount = 0;
      message.get("EVN").forEach(() => evnCount++);
      expect(evnCount).toBe(1);
    });

    test("FileBatch normalizes LF line endings to CR", async () => {
      const lf_content =
        "MSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345||2.7\nEVN||20081231";
      const fileBatch = new FileBatch({ fileBuffer: Buffer.from(lf_content) });

      const raw = fileBatch.toString();
      expect(raw).not.toContain(String.raw`\r`);
      expect(raw).toContain("\r");
    });
  });
});
