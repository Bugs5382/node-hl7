import {
  Batch,
  createHL7Date,
  EmptyNode,
  FileBatch,
  HL7FatalError,
  HL7Node,
  Message,
} from "node-hl7-client/src";
import { HL7ValidationError } from "node-hl7-client/src";
import { HL7_2_1 } from "node-hl7-client/src";
import { HL7_2_2 } from "node-hl7-client/src";
import { HL7_2_3 } from "node-hl7-client/src";
import { HL7_2_3_1 } from "node-hl7-client/src";
import { HL7_2_4 } from "node-hl7-client/src";
import { HL7_2_5 } from "node-hl7-client/src";
import { HL7_2_5_1 } from "node-hl7-client/src";
import { HL7_2_6 } from "node-hl7-client/src";
import { HL7_2_7 } from "node-hl7-client/src";
import { HL7_2_7_1 } from "node-hl7-client/src";
import { HL7_2_8 } from "node-hl7-client/src";
import { randomUUID } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { beforeAll, beforeEach, describe, expect, test } from "vitest";

import { MSH_HEADER } from "./__data__/constants";
import { sleep } from "./__utils__";

describe("node hl7 client - builder tests", () => {
  describe("build message basics", () => {
    let message: Message;
    const randomControlID = randomUUID();

    beforeEach(async () => {
      message = new Message({
        /**
         * @ts-expect-error not filling this out for unit testing
         */
        messageHeader: {
          msh_10: randomControlID,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        },
      });
    });

    test("Message constructor produces a valid 2.7 MSH header", async () => {
      expect(message.toString()).toContain(String.raw`MSH|^~\&`);
      expect(message.toString()).toContain(
        `|ADT^A01^ADT_A01|${randomControlID}||2.7`,
      );
    });

    test("buildMSH rejects a second MSH header", async () => {
      const builder = new HL7_2_1();
      builder.buildMSH({ msh_10: "12345", msh_11: "T", msh_9: "ACK" });
      try {
        builder.buildMSH({ msh_10: "12345", msh_11: "T", msh_9: "ACK" });
      } catch (error) {
        expect(error).toEqual(
          new HL7FatalError(
            "You can only have one MSH Header per HL7 Message.",
          ),
        );
      }
    });

    test("ADD segment cannot follow MSH/BHS/FHS", async () => {
      const builder = new HL7_2_1();
      builder.buildMSH({ msh_10: "12345", msh_11: "T", msh_9: "ACK" });
      try {
        builder.buildADD({
          add_1: "Fail cause you can't have this after MSH",
        });
      } catch (error) {
        expect(error).toEqual(
          new HL7ValidationError(
            "This segment must not follow a MSH, BHS, or FHS",
          ),
        );
      }
    });

    test("each Message construction generates a unique control id", async () => {
      const newMessage = () => {
        return new Message({
          messageHeader: {
            msh_11: "P",
            msh_9_1: "ADT",
            msh_9_2: "A01",
          },
        });
      };

      // this is the original message creation at line 17
      expect(message.toString()).toContain(String.raw`MSH|^~\&`);
      expect(message.toString()).toContain(
        `|ADT^A01^ADT_A01|${randomControlID}||2.7`,
      );

      // this is creating a new message using a function that returns the message object
      const newResult = newMessage();
      expect(newResult.toString()).not.toContain(randomControlID);

      const newRandomControlID = newResult.get("MSH.10").toString();

      // again, this is creating a new message using a function that returns the message object
      const newResultTwo = newMessage();
      expect(newResultTwo.toString()).not.toContain(newRandomControlID);
    });

    test("MSH fields read back as set by the constructor", async () => {
      expect(message.toString().slice(0, 8)).toBe(String.raw`MSH|^~\&`);
      expect(message.get("MSH.3").exists("")).toBe(false);
      expect(message.get("MSH.9.1").toString()).toBe("ADT");
      expect(message.get("MSH.9.2").toString()).toBe("A01");
      expect(message.get("MSH.9.3").toString()).toBe("ADT_A01");
      expect(message.get("MSH.10").toString()).toBe(randomControlID);
      expect(message.get("MSH.12").toString()).toBe("2.7");
    });

    test("MSH.3 through MSH.6 can be set after construction", async () => {
      message.set("MSH.3", "SendingApp");
      message.set("MSH.4", "SendingFacility");
      message.set("MSH.5", "ReceivingApp");
      message.set("MSH.6", "ReceivingFacility");

      expect(message.get("MSH.3").toString()).toBe("SendingApp");
      expect(message.get("MSH.4").toString()).toBe("SendingFacility");
      expect(message.get("MSH.5").toString()).toBe("ReceivingApp");
      expect(message.get("MSH.6").toString()).toBe("ReceivingFacility");
    });

    test("MSH.3.1 set is readable as MSH.3", async () => {
      message.set("MSH.3.1", "SendingApp");
      expect(message.get("MSH.3").toString()).toBe("SendingApp");
    });

    test("MSH.3 set is readable as MSH.3.1", async () => {
      message.set("MSH.3", "SendingApp");
      expect(message.get("MSH.3.1").toString()).toBe("SendingApp");
    });
  });

  describe("builder message - all versions", () => {
    const useThisDate = new Date();
    describe("2.1", async () => {
      let baseResult_HL7_2_1: string, message_HL7_2_1: HL7_2_1;

      beforeEach(async () => {
        // create new Hl7 2.1
        message_HL7_2_1 = new HL7_2_1();

        // build the MSH Header
        message_HL7_2_1.buildMSH({
          msh_10: "12345",
          msh_11: "T",
          msh_7: useThisDate,
          msh_9: "ACK",
        });

        // this is the base result
        baseResult_HL7_2_1 = String.raw`MSH|^~\&|||||${createHL7Date(useThisDate)}||ACK|12345|T|2.1`;
      });
      test("buildMSH produces the 2.1 base wire format", async () => {
        // build MSH Header
        expect(message_HL7_2_1.toString()).toBe(baseResult_HL7_2_1);
      });

      test("buildEVN appends an EVN segment", async () => {
        message_HL7_2_1.buildEVN({
          evn_1: "A01",
          evn_2: useThisDate,
        });
        expect(message_HL7_2_1.toString()).toBe(
          baseResult_HL7_2_1 + `\rEVN|A01|${createHL7Date(useThisDate)}||`,
        );
      });

      test("buildFT1 appends a Financial Transaction segment", async () => {
        message_HL7_2_1.buildFT1({
          ft1_4: useThisDate,
          ft1_6: "ADD",
          ft1_7: "HELLO",
        });
        expect(message_HL7_2_1.toString()).toBe(
          baseResult_HL7_2_1 +
            `\rFT1||||${createHL7Date(useThisDate, "8")}||ADD|HELLO|||||||||||||||`,
        );
      });

      test("buildNCK appends a System Clock segment with timestamp", async () => {
        message_HL7_2_1.buildNCK();
        const result = message_HL7_2_1.toString();
        expect(result).toContain(baseResult_HL7_2_1);
        expect(result).toMatch(/\rNCK\|\d{14,19}/);
      });
    });

    describe("2.2", async () => {
      let builder: HL7_2_2;
      const useThisDate = new Date();

      beforeEach(async () => {
        builder = new HL7_2_2();
      });

      test("buildMSH produces a 2.2 base header", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11: "T",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain(String.raw`MSH|^~\&`);
        expect(result).toContain(`|ADT^A01|CONTROL_ID|T|2.2`);
      });

      test("buildMSH carries optional sending/receiving fields", async () => {
        builder.buildMSH({
          msh_10: "MSG001",
          msh_11: "P",
          msh_3: "SENDAPP",
          msh_4: "SENDFAC",
          msh_5: "RECVAPP",
          msh_6: "RECVFAC",
          msh_7: useThisDate,
          msh_9_1: "ORM",
          msh_9_2: "O01",
        });
        const result = builder.toString();
        expect(result).toContain("|SENDAPP|SENDFAC|RECVAPP|RECVFAC|");
        expect(result).toContain("|ORM^O01|MSG001|P|2.2");
      });

      test("checkMSH accepts a valid 2.2 header", async () => {
        expect(
          builder.checkMSH({
            msh_10: "MSG001",
            msh_11: "P",
            msh_9_1: "ADT",
            msh_9_2: "A01",
          }),
        ).toBe(true);
      });

      test("checkMSH rejects msh_9_1 with length other than 3", async () => {
        expect(() =>
          builder.checkMSH({ msh_9_1: "ADTY", msh_9_2: "A01" }),
        ).toThrow("MSH.9.1 must be 3 characters in length.");
      });

      test("checkMSH rejects msh_9_2 with length other than 3", async () => {
        expect(() =>
          builder.checkMSH({ msh_9_1: "ADT", msh_9_2: "A01Y" }),
        ).toThrow("MSH.9.2 must be 3 characters in length.");
      });

      test("checkMSH rejects msh_10 longer than 20 chars (2.2 limit)", async () => {
        expect(() =>
          builder.checkMSH({
            msh_10: "A".repeat(21),
            msh_9_1: "ADT",
            msh_9_2: "A01",
          }),
        ).toThrow("MSH.10 must be greater than 0 and less than 20 characters.");
      });

      test("buildMSH rejects missing msh_11 (required in 2.2)", async () => {
        expect(() =>
          builder.buildMSH({
            msh_10: "MSG001",
            msh_9_1: "ADT",
            msh_9_2: "A01",
          }),
        ).toThrow();
      });
    });

    describe("2.3", async () => {
      let builder: HL7_2_3;
      const useThisDate = new Date();

      beforeEach(async () => {
        builder = new HL7_2_3();
      });

      test("buildMSH produces a 2.3 base header", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "T",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain(String.raw`MSH|^~\&`);
        expect(result).toContain(`|ADT^A01|CONTROL_ID|T|2.3`);
      });

      test("buildMSH carries msh_11_2 processing mode", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_11_2: "I",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain("|P^I|2.3");
      });

      test("buildMSH carries msh_15 and msh_16 ack types", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_15: "AL",
          msh_16: "NE",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain("|AL|NE|");
        expect(result).toContain("|2.3");
      });

      test("checkMSH accepts a valid 2.3 header", async () => {
        expect(
          builder.checkMSH({ msh_11_1: "T", msh_9_1: "ADT", msh_9_2: "A01" }),
        ).toBe(true);
      });

      test("checkMSH rejects msh_11_1 longer than 1 char", async () => {
        expect(() =>
          builder.checkMSH({
            // @ts-expect-error msh_11_1 has to be 1 character long
            msh_11_1: "PT",
            msh_9_1: "ADT",
            msh_9_2: "A01",
          }),
        ).toThrow("MSH.11.1 has to be 1 character long.");
      });

      test("checkMSH rejects empty-string msh_11_2", async () => {
        expect(() =>
          builder.checkMSH({
            msh_11_1: "T",
            msh_11_2: "",
            msh_9_1: "ADT",
            msh_9_2: "A01",
          }),
        ).toThrow(
          "MSH.11.2 can either be undefined/blank and 1 character long.",
        );
      });

      test("checkMSH accepts debug processing id (D)", async () => {
        expect(
          builder.checkMSH({ msh_11_1: "D", msh_9_1: "ADT", msh_9_2: "A01" }),
        ).toBe(true);
      });
    });

    describe("2.3.1", async () => {
      let builder: HL7_2_3_1;
      const useThisDate = new Date();

      beforeEach(async () => {
        builder = new HL7_2_3_1();
      });

      test("buildMSH produces a 2.3.1 base header", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain(String.raw`MSH|^~\&`);
        expect(result).toContain(`|ADT^A01|CONTROL_ID|P|2.3.1`);
      });

      test("buildMSH carries msh_19 principal language", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_19: "ENG",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain("|ENG");
        expect(result).toContain("|2.3.1");
      });

      test("checkMSH accepts a valid 2.3.1 header", async () => {
        expect(
          builder.checkMSH({ msh_11_1: "P", msh_9_1: "ADT", msh_9_2: "A01" }),
        ).toBe(true);
      });
    });

    describe("2.4", async () => {
      let builder: HL7_2_4;
      const useThisDate = new Date();

      beforeEach(async () => {
        builder = new HL7_2_4();
      });

      test("buildMSH auto-generates msh_9_3 from event", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "T",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain(String.raw`MSH|^~\&`);
        expect(result).toContain(`|ADT^A01^ADT_A01|CONTROL_ID|T|2.4`);
      });

      test("buildMSH carries explicit msh_9_3", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
          msh_9_3: "ADT_A01",
        });
        const result = builder.toString();
        expect(result).toContain("|ADT^A01^ADT_A01|");
      });

      test("buildMSH carries msh_11_2 T (added in 2.4)", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          // @ts-expect-error msh_11_2 has to be "T"
          msh_11_2: "T",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain("|P^T|2.4");
      });

      test("checkMSH accepts a 2.4 header with msh_9_3", async () => {
        expect(
          builder.checkMSH({
            msh_11_1: "T",
            msh_9_1: "ADT",
            msh_9_2: "A01",
            msh_9_3: "ADT_A01",
          }),
        ).toBe(true);
      });

      test("checkMSH rejects msh_9_3 shorter than 3 chars", async () => {
        expect(() =>
          builder.checkMSH({
            msh_11_1: "T",
            msh_9_1: "ADT",
            msh_9_2: "A01",
            msh_9_3: "AD",
          }),
        ).toThrow("MSH.9.3 must be 3 to 10 characters in length if specified.");
      });

      test("checkMSH rejects msh_9_3 longer than 10 chars", async () => {
        expect(() =>
          builder.checkMSH({
            msh_11_1: "T",
            msh_9_1: "ADT",
            msh_9_2: "A01",
            msh_9_3: "ADT_A01_ABCDE",
          }),
        ).toThrow("MSH.9.3 must be 3 to 10 characters in length if specified.");
      });
    });

    describe("2.5", async () => {
      let builder: HL7_2_5;
      const useThisDate = new Date();

      beforeEach(async () => {
        builder = new HL7_2_5();
      });

      test("buildMSH produces a 2.5 base header", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "T",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain(String.raw`MSH|^~\&`);
        expect(result).toContain(`|ADT^A01^ADT_A01|CONTROL_ID|T|2.5`);
      });

      test("buildMSH carries 2.5 sending application and facility", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_3: "LABSYS",
          msh_4: "LABFAC",
          msh_7: useThisDate,
          msh_9_1: "ORU",
          msh_9_2: "R01",
        });
        const result = builder.toString();
        expect(result).toContain("|LABSYS|LABFAC|");
        expect(result).toContain("|ORU^R01^ORU_R01|CONTROL_ID|P|2.5");
      });

      test("checkMSH accepts a valid 2.5 header", async () => {
        expect(
          builder.checkMSH({ msh_11_1: "P", msh_9_1: "ORU", msh_9_2: "R01" }),
        ).toBe(true);
      });
    });

    describe("2.5.1", async () => {
      let builder: HL7_2_5_1;
      const useThisDate = new Date();

      beforeEach(async () => {
        builder = new HL7_2_5_1();
      });

      test("buildMSH produces a 2.5.1 base header", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A04",
        });
        const result = builder.toString();
        expect(result).toContain(String.raw`MSH|^~\&`);
        expect(result).toContain(`|ADT^A04^ADT_A04|CONTROL_ID|P|2.5.1`);
      });

      test("buildMSH carries 2.5.1 sending application and facility", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_3: "EMISYS",
          msh_4: "EMIFAC",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A04",
        });
        const result = builder.toString();
        expect(result).toContain("|EMISYS|EMIFAC|");
        expect(result).toContain("|2.5.1");
      });

      test("checkMSH accepts a valid 2.5.1 header", async () => {
        expect(
          builder.checkMSH({ msh_11_1: "P", msh_9_1: "ADT", msh_9_2: "A04" }),
        ).toBe(true);
      });
    });

    describe("2.6", async () => {
      let builder: HL7_2_6;
      const useThisDate = new Date();

      beforeEach(async () => {
        builder = new HL7_2_6();
      });

      test("buildMSH produces a 2.6 base header", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "D",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain(String.raw`MSH|^~\&`);
        expect(result).toContain(`|ADT^A01^ADT_A01|CONTROL_ID|D|2.6`);
      });

      test("buildMSH carries 2.6 sending and receiving application", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_3: "SRCSYS",
          msh_5: "TGTSYS",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain("|SRCSYS||TGTSYS|");
        expect(result).toContain("|2.6");
      });

      test("checkMSH accepts a valid 2.6 header", async () => {
        expect(
          builder.checkMSH({ msh_11_1: "D", msh_9_1: "ADT", msh_9_2: "A01" }),
        ).toBe(true);
      });
    });

    describe("2.7", async () => {
      let builder: HL7_2_7;
      const useThisDate = new Date();

      beforeEach(async () => {
        builder = new HL7_2_7();
      });

      test("buildMSH produces a 2.7 base header", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain(String.raw`MSH|^~\&`);
        expect(result).toContain(`|ADT^A01^ADT_A01|CONTROL_ID|P|2.7`);
      });

      test("buildMSH carries 2.7 sending application (up to 227 chars)", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_3: "LABSYSTEM",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain("|LABSYSTEM||||");
        expect(result).toContain("|2.7");
      });

      test("buildMSH carries msh_11_2 archive processing mode", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_11_2: "A",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain("|P^A|2.7");
      });

      test("checkMSH accepts a valid 2.7 header", async () => {
        expect(
          builder.checkMSH({
            msh_11_1: "P",
            msh_9_1: "ADT",
            msh_9_2: "A01",
            msh_9_3: "ADT_A01",
          }),
        ).toBe(true);
      });

      test("checkMSH rejects msh_10 longer than 199 chars (2.7 limit)", async () => {
        expect(() =>
          builder.checkMSH({
            msh_10: "A".repeat(200),
            msh_11_1: "P",
            msh_9_1: "ADT",
            msh_9_2: "A01",
          }),
        ).toThrow(
          "MSH.10 must be greater than 0 and less than 199 characters.",
        );
      });
    });

    describe("2.7.1", async () => {
      let builder: HL7_2_7_1;
      const useThisDate = new Date();

      beforeEach(async () => {
        builder = new HL7_2_7_1();
      });

      test("buildMSH produces a 2.7.1 base header", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_7: useThisDate,
          msh_9_1: "ORM",
          msh_9_2: "O01",
        });
        const result = builder.toString();
        expect(result).toContain(String.raw`MSH|^~\&`);
        expect(result).toContain(`|ORM^O01^ORM_O01|CONTROL_ID|P|2.7.1`);
      });

      test("buildMSH carries msh_11_2 restore processing mode", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_11_2: "R",
          msh_7: useThisDate,
          msh_9_1: "ORM",
          msh_9_2: "O01",
        });
        const result = builder.toString();
        expect(result).toContain("|P^R|2.7.1");
      });

      test("checkMSH accepts a valid 2.7.1 header", async () => {
        expect(
          builder.checkMSH({ msh_11_1: "P", msh_9_1: "ORM", msh_9_2: "O01" }),
        ).toBe(true);
      });
    });

    describe("2.8", async () => {
      let builder: HL7_2_8;
      const useThisDate = new Date();

      beforeEach(async () => {
        builder = new HL7_2_8();
      });

      test("buildMSH produces a 2.8 base header", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_7: useThisDate,
          msh_9_1: "ADT",
          msh_9_2: "A01",
        });
        const result = builder.toString();
        expect(result).toContain(String.raw`MSH|^~\&`);
        expect(result).toContain(`|ADT^A01^ADT_A01|CONTROL_ID|P|2.8`);
      });

      test("buildMSH carries explicit msh_9_3 message structure", async () => {
        builder.buildMSH({
          msh_10: "CONTROL_ID",
          msh_11_1: "P",
          msh_7: useThisDate,
          msh_9_1: "ORU",
          msh_9_2: "R01",
          msh_9_3: "ORU_R01",
        });
        const result = builder.toString();
        expect(result).toContain("|ORU^R01^ORU_R01|");
        expect(result).toContain("|2.8");
      });

      test("checkMSH accepts a valid 2.8 header", async () => {
        expect(
          builder.checkMSH({ msh_11_1: "P", msh_9_1: "ADT", msh_9_2: "A01" }),
        ).toBe(true);
      });

      test("checkMSH rejects msh_9_1 with length other than 3", async () => {
        expect(() =>
          builder.checkMSH({ msh_11_1: "P", msh_9_1: "ADTY", msh_9_2: "A01" }),
        ).toThrow("MSH.9.1 must be 3 characters in length.");
      });

      test("checkMSH inherits 2.7 msh_10 199-char limit", async () => {
        expect(() =>
          builder.checkMSH({
            msh_10: "A".repeat(200),
            msh_11_1: "P",
            msh_9_1: "ADT",
            msh_9_2: "A01",
          }),
        ).toThrow(
          "MSH.10 must be greater than 0 and less than 199 characters.",
        );
      });
    });
  });

  describe("complex builder message", () => {
    let message: Message;

    beforeEach(async () => {
      message = new Message({
        messageHeader: {
          msh_10: "12345",
          msh_11_1: "D",
          msh_9_1: "ADT",
          msh_9_2: "A01",
        },
      });
      message.set("MSH.7", "20081231");
    });

    test("Message constructor produces an exact 2.7 wire format", async () => {
      expect(message.toString()).toBe(
        String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|12345|D|2.7`,
      );
    });

    test("set accepts a number value", async () => {
      message.set("EVN.2", 1);
      expect(message.toString()).toContain("EVN||1");
    });

    test("set accepts a Date without time", () => {
      message.set("PV1.1", new Date(2012, 9, 31));
      expect(message.toString()).toContain("PV1|20121031");
    });

    test("set accepts a Date with time", () => {
      message.set("PV1.1", new Date(2012, 9, 31, 22, 51, 13));
      expect(message.toString()).toContain("PV1|20121031225113");
    });

    test("set accepts a float value", () => {
      message.set("PV1.1", 1.2);
      expect(message.toString()).toContain("PV1|1.2");
    });

    test("set accepts a boolean value (Y/N)", () => {
      message.set("PV1.1", true);
      expect(message.toString()).toContain("PV1|Y");
      message.set("PV1.1", false);
      expect(message.toString()).toContain("PV1|N");
    });

    test("set writes the specified field", () => {
      message.set("PID.4", "1273462894723");
      expect(message.toString()).toContain("PID||||1273462894723");
    });

    test("set writes multiple fields on the same segment", () => {
      message.set("PID.4", "1273462894723");
      message.set("PID.10", "TEST");
      expect(message.toString()).toContain("PID||||1273462894723||||||TEST");
    });

    test("set writes the specified component", () => {
      message.set("PV1.7.2", "Jones");
      expect(message.toString()).toContain("PV1|||||||^Jones");
    });

    test("set writes multiple components on the same field", () => {
      message.set("PV1.7.2", "Jones");
      message.set("PV1.7.3", "John");
      expect(message.toString()).toContain("PV1|||||||^Jones^John");
    });

    test("set writes repeating field instances", async () => {
      message.set("PID.3").set(0).set("PID.3.1", "abc");
      message.set("PID.3").set(0).set("PID.3.5", "MRN");
      message.set("PID.3").set(1).set("PID.3.1", 123);
      message.set("PID.3").set(1).set("PID.3.5", "ID");
      expect(message.toString()).toContain("PID|||abc^^^^MRN~123^^^^ID");
    });

    test("component setters chain by name path", async () => {
      message
        .set("PV1.7")
        .set(0)
        .set("PV1.7.2", "Jones")
        .set("PV1.7.3", "John");
      message.set("PV1.7").set(1).set("PV1.7.2", "Smith").set("PV1.7.3", "Bob");
      expect(message.toString()).toContain("PV1|||||||^Jones^John~^Smith^Bob");
    });

    test("component setters chain by numeric index", async () => {
      message.set("PV1.7").set(0).set(1, "Jones").set(2, "John");
      message.set("PV1.7").set(1).set(1, "Smith").set(2, "Bob");
      expect(message.toString()).toContain("PV1|||||||^Jones^John~^Smith^Bob");
    });

    test("set writes field components by number", async () => {
      message.set("PV1.7").set(0).set(1, "Jones").set(2, "John");
      expect(message.toString()).toContain("PV1|||||||^Jones^John");
    });

    test("set writes field components from a number + array", async () => {
      message
        .set("PV1.7")
        .set(0, ["", "Jones", "John"])
        .set(1, ["", "Smith", "Bob"]);
      expect(message.toString()).toContain("PV1|||||||^Jones^John~^Smith^Bob");
    });

    test("addSegment EVN sets field via full dotted path", async () => {
      const segment = message.addSegment("EVN");
      segment.set("EVN.2.1", "20081231");
      expect(message.toString()).toBe(
        "MSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345|D|2.7\rEVN||20081231",
      );
    });

    test("addSegment EVN sets field via number.subcomponent path", async () => {
      const segment = message.addSegment("EVN");
      segment.set("2.1", "20081231");
      expect(message.toString()).toBe(
        "MSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345|D|2.7\rEVN||20081231",
      );
    });

    test("addSegment EVN sets field via single-number string path", async () => {
      const segment = message.addSegment("EVN");
      segment.set("2", "20081231");
      expect(message.toString()).toBe(
        "MSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345|D|2.7\rEVN||20081231",
      );
    });

    test("addSegment EVN sets field via numeric index", async () => {
      const segment = message.addSegment("EVN");
      segment.set(2, "20081231");
      expect(message.toString()).toBe(
        "MSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345|D|2.7\rEVN||20081231",
      );
    });
  });

  describe("basic batch basics", () => {
    let batch: Batch;

    beforeEach(async () => {
      batch = new Batch();
      batch.start();
    });

    test("Batch start/end produces BHS and BTS|0", async () => {
      batch.end();
      expect(batch.toString()).toContain(String.raw`BHS|^~\&`);
      expect(batch.toString()).toContain("BTS|0");
    });

    test("BHS.7 set is reflected in toString output", async () => {
      batch.set("BHS.7", "20081231");
      batch.end();
      expect(batch.get("BHS.7").toString()).toBe("20081231");
      expect(batch.toString()).toBe("BHS|^~\\&|||||20081231\rBTS|0");
    });

    test("BHS.3 through BHS.6 can be set after start", async () => {
      batch.set("BHS.7", "20081231");
      batch.set("BHS.3", "SendingApp");
      batch.set("BHS.4", "SendingFacility");
      batch.set("BHS.5", "ReceivingApp");
      batch.set("BHS.6", "ReceivingFacility");
      batch.end();

      expect(batch.get("BHS.3").toString()).toBe("SendingApp");
      expect(batch.get("BHS.4").toString()).toBe("SendingFacility");
      expect(batch.get("BHS.5").toString()).toBe("ReceivingApp");
      expect(batch.get("BHS.6").toString()).toBe("ReceivingFacility");
      expect(batch.toString()).toBe(
        "BHS|^~\\&|SendingApp|SendingFacility|ReceivingApp|ReceivingFacility|20081231\rBTS|0",
      );
    });
  });

  describe("complex builder batch", () => {
    let batch: Batch;
    let message: Message;
    const date = createHL7Date(new Date(), "8");

    beforeEach(async () => {
      batch = new Batch();
      batch.start();
      batch.set("BHS.7", date);
    });

    test("Batch.add accepts a single Message", async () => {
      message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID",
        },
      });
      message.set("MSH.7", date);

      batch.add(message);
      batch.end();
      expect(batch.toString()).toBe(
        [
          String.raw`BHS|^~\&|||||${date}`,
          String.raw`MSH|^~\&|||||${date}||ADT^A01^ADT_A01|CONTROL_ID|D|2.7`,
          "BTS|1",
        ].join("\r"),
      );
    });

    test("BTS counter reflects 10 added messages", async () => {
      message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID",
        },
      });
      message.set("MSH.7", date);

      for (let index = 0; index < 10; index++) {
        batch.add(message);
      }
      batch.end();
      expect(batch.toString()).toContain("BTS|10");
    });

    test("Batch preserves additional segments inside the Message", async () => {
      message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID",
        },
      });
      message.set("MSH.7", "20231208");

      const segment = message.addSegment("EVN");
      segment.set(2, "20081231");

      batch.add(message);
      batch.end();
      expect(batch.toString()).toBe(
        `BHS|^~\\&|||||${date}\rMSH|^~\\&|||||20231208||ADT^A01^ADT_A01|CONTROL_ID|D|2.7\rEVN||20081231\rBTS|1`,
      );
    });

    test("Batch preserves multiple repeating EVN segments", async () => {
      message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID",
        },
      });
      message.set("MSH.7", "20231208");

      let segment = message.addSegment("EVN");
      segment.set(2, "20081231");

      segment = message.addSegment("EVN");
      segment.set(2, "20081231");

      batch.add(message);
      batch.end();
      expect(batch.toString()).toBe(
        `BHS|^~\\&|||||${date}\rMSH|^~\\&|||||20231208||ADT^A01^ADT_A01|CONTROL_ID|D|2.7\rEVN||20081231\rEVN||20081231\rBTS|1`,
      );
    });
  });

  describe("basic file basics", () => {
    let file: FileBatch;

    beforeEach(async () => {
      file = new FileBatch();
      file.start();
      file.set("FHS.7", "20081231");
    });

    test("FileBatch start/end wraps a Message in FHS/FTS", async () => {
      let message: Message;

      message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID",
        },
      });
      message.set("MSH.7", "20081231");

      // add this message to the file
      file.add(message);

      // end making a file batch
      file.end();

      // unit checking
      expect(file.toString()).toBe(
        [
          String.raw`FHS|^~\&|||||20081231`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID|D|2.7`,
          "FTS|1",
        ].join("\r"),
      );
    });

    test("FileBatch handles 10 messages with unique control ids", async () => {
      let message: Message;

      for (let index = 0; index < 10; index++) {
        message = new Message({
          messageHeader: {
            ...MSH_HEADER,
            msh_10: `CONTROL_ID${index + 1}`,
          },
        });
        message.set("MSH.7", "20081231");

        // add this message to the file
        file.add(message);
      }

      // end making a file batch
      file.end();

      // unit checking
      expect(file.toString()).toBe(
        [
          String.raw`FHS|^~\&|||||20081231`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID1|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID2|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID3|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID4|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID5|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID6|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID7|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID8|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID9|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID10|D|2.7`,
          "FTS|10",
        ].join("\r"),
      );
    });

    test("FileBatch.add accepts a Batch", async () => {
      // basic batch
      const batch = new Batch();
      batch.start();
      batch.set("BHS.7", "20081231");
      batch.end();

      // add this message to the file
      file.add(batch);

      // end making a file batch for output
      file.end();

      // unit checking
      expect(file.toString()).toBe(
        [
          String.raw`FHS|^~\&|||||20081231`,
          String.raw`BHS|^~\&|||||20081231`,
          "BTS|0",
          "FTS|1",
        ].join("\r"),
      );
    });

    test("FileBatch wraps a Batch that contains one Message", async () => {
      const batch = new Batch();
      batch.start();
      batch.set("BHS.7", "20081231");

      const message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID",
        },
      });
      message.set("MSH.7", "20081231");

      // add message to the batch
      batch.add(message);

      // batch ended
      batch.end();

      // add this message to the file
      file.add(batch);

      // end making a file batch
      file.end();

      // unit checking
      expect(file.toString()).toBe(
        [
          String.raw`FHS|^~\&|||||20081231`,
          String.raw`BHS|^~\&|||||20081231`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID|D|2.7`,
          "BTS|1",
          "FTS|1",
        ].join("\r"),
      );
    });

    test("FileBatch.add routes new Messages into the open Batch", async () => {
      const batch = new Batch();
      batch.start();
      batch.set("BHS.7", "20081231");

      let message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID1",
        },
      });
      message.set("MSH.7", "20081231");

      // add message to the batch
      batch.add(message);

      // batch ended
      batch.end();

      // add this message to the file
      file.add(batch);

      // create a new message
      message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID2",
        },
      });
      message.set("MSH.7", "20081231");

      // add this message to the file, but it will get added to the batch segment since there is a batch segment,
      // and you can't add a msh outside the BHS if it exists already
      file.add(message);

      message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID3",
        },
      });
      message.set("MSH.7", "20081231");

      // add this message to the file, but it will get added to the batch segment since there is a batch segment,
      // and you can't add a msh outside the BHS if it exists already
      file.add(message);

      // end making a file batch
      file.end();

      // unit checking
      expect(file.toString()).toBe(
        [
          String.raw`FHS|^~\&|||||20081231`,
          String.raw`BHS|^~\&|||||20081231`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID1|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID2|D|2.7`,
          String.raw`MSH|^~\&|||||20081231||ADT^A01^ADT_A01|CONTROL_ID3|D|2.7`,
          "BTS|3",
          "FTS|1",
        ].join("\r"),
      );
    });

    test("FileBatch.add accepts two consecutive Batches", async () => {
      let batch = new Batch();
      batch.start();
      batch.set("BHS.7", "20081231");
      batch.end();

      // add this message to the file
      file.add(batch);

      batch = new Batch();
      batch.start();
      batch.set("BHS.7", "20081231");
      batch.end();

      file.add(batch);

      // end making a file batch
      file.end();

      // unit checking
      expect(file.toString()).toBe(
        [
          String.raw`FHS|^~\&|||||20081231`,
          String.raw`BHS|^~\&|||||20081231`,
          "BTS|0",
          String.raw`BHS|^~\&|||||20081231`,
          "BTS|0",
          "FTS|2",
        ].join("\r"),
      );
    });
  });

  describe("complex file generation", () => {
    beforeAll(async () => {
      fs.readdir("temp/", (error, files) => {
        if (error != undefined) return;
        for (const file of files) {
          fs.unlink(path.join("temp/", file), (error) => {
            if (error != undefined) throw error;
          });
        }
      });

      await sleep(5);
    });

    test("FileBatch.createFile writes the framed bytes to disk", async () => {
      const file = new FileBatch({ location: "temp/" });
      file.start();
      file.set("FHS.7", "20081231");
      file.end();
      file.createFile("HELLO");
    });

    test("Message.toFile writes the message to disk", async () => {
      const message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID",
        },
      });
      message.set("MSH.7", "20081231");
      message.toFile("ADT", true, "temp/");
    });

    test("Batch.toFile writes the batch to disk", async () => {
      const batch = new Batch();
      batch.start();
      batch.set("BHS.7", "20081231");
      batch.end();
      batch.toFile("ADTs", true, "temp/");
    });
  });

  describe("non standard tests", () => {
    test("exists returns true for present paths", () => {
      const message = new Message({ text: "MSH|^~\\&|value\rPV1|" });
      expect(message.exists("MSH.3")).toBe(true);
      expect(message.exists("PV1")).toBe(true);
    });

    test("exists returns false for missing paths", () => {
      const message = new Message({ text: String.raw`MSH|^~\&|value` });
      expect(message.exists("MSH.4")).toBe(false);
      expect(message.exists("PV1")).toBe(false);
    });

    test("get returns EmptyNode for out-of-range indexes", () => {
      const message = new Message({ text: String.raw`MSH|^~\&|` });
      expect(message.get(10)).toBeInstanceOf(EmptyNode);
      expect(message.get("PV1").get(10)).toBeInstanceOf(EmptyNode);
    });

    test("hex escape sequences decode to raw characters", () => {
      const field = new Message({ text: "MSH|^~\\&|\\X0D\\" }).get("MSH.3");
      expect(field.toString()).toBe("\r");
    });

    test("unknown escape sequences are passed through verbatim", () => {
      expect(
        new Message({ text: "MSH|^~\\&|\\a\\" }).get("MSH.3").toString(),
      ).toBe("\\a\\");
    });

    test("repeated EVN segments are iterable via forEach", async () => {
      const message = new Message({
        messageHeader: {
          ...MSH_HEADER,
          msh_10: "CONTROL_ID",
        },
      });

      let segment = message.addSegment("EVN");
      segment.set(2, "20081231");

      segment = message.addSegment("EVN");
      segment.set(2, "20081231");

      let count: number = 0;
      message.get("EVN").forEach((segment: HL7Node): void => {
        expect(segment.name).toBe("EVN");
        count++;
      });

      expect(count).toBe(2);
    });
  });

  describe("file tests", () => {
    const hl7_string: string =
      "MSH|^~\\&|||||20081231||ADT^A01^ADT_A01|12345||2.7\rEVN||20081231";
    const hl7_batch: string =
      "BHS|^~\\&|||||20231208\rMSH|^~\\&|||||20231208||ADT^A01^ADT_A01|CONTROL_ID||2.7\rEVN||20081231\rEVN||20081231\rBTS|1";

    beforeAll(async () => {
      fs.readdir("temp/", (error, files) => {
        if (error != undefined) return;
        for (const file of files) {
          fs.unlink(path.join("temp/", file), (error) => {
            if (error != undefined) throw error;
          });
        }
      });

      await sleep(2);

      const message = new Message({ text: hl7_string });
      message.toFile("readTestMSH", true, "temp/");

      const batch = new Batch({ text: hl7_batch });
      batch.toFile("readTestBHS", true, "temp/");

      await sleep(2);
    });

    beforeEach(async () => {
      await sleep(1);
    });

    test("FileBatch reads from a fullFilePath", async () => {
      const fileBatch_one = new FileBatch({
        fullFilePath: path.join("temp/", "hl7.readTestMSH.20081231.hl7"),
      });
      expect(fileBatch_one._opt.text).toContain(hl7_string);

      const fileBatch_two = new FileBatch({
        fullFilePath: path.join("temp/", "hl7.readTestBHS.20231208.hl7"),
      });
      expect(fileBatch_two._opt.text).toContain(hl7_batch);
    });

    test("FileBatch reads from a fileBuffer", async () => {
      const fileBatch_one = new FileBatch({
        fileBuffer: fs.readFileSync(
          path.join("temp/", "hl7.readTestMSH.20081231.hl7"),
        ),
      });
      expect(fileBatch_one._opt.text).toContain(hl7_string);

      const fileBatch_two = new FileBatch({
        fileBuffer: fs.readFileSync(
          path.join("temp/", "hl7.readTestBHS.20231208.hl7"),
        ),
      });
      expect(fileBatch_two._opt.text).toContain(hl7_batch);
    });

    test("FileBatch.messages yields one Message with one EVN", async () => {
      const fileBatch = new FileBatch({
        fullFilePath: path.join("temp/", "hl7.readTestMSH.20081231.hl7"),
      });
      expect(fileBatch._opt.text).toContain(hl7_string);

      const messages = fileBatch.messages();
      expect(messages.length).toBe(1);

      messages.forEach((message: Message): void => {
        let count: number = 0;
        message.get("EVN").forEach((segment: HL7Node): void => {
          expect(segment.name).toBe("EVN");
          count++;
        });
        expect(count).toBe(1);
      });
    });

    test("FileBatch with BHS yields one Message with two EVN segments", async () => {
      const fileBatch = new FileBatch({
        fullFilePath: path.join("temp/", "hl7.readTestBHS.20231208.hl7"),
      });
      expect(fileBatch._opt.text).toContain(hl7_batch);

      const messages = fileBatch.messages();
      expect(messages.length).toBe(1);

      messages.forEach((message: Message): void => {
        let count: number = 0;
        message.get("EVN").forEach((segment: HL7Node): void => {
          expect(segment.name).toBe("EVN");
          count++;
        });
        expect(count).toBe(2);
      });
    });
  });
});
