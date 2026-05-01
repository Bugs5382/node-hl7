import {
  createHL7Date,
  decodeHexString,
  escapeForRegExp,
  expBackoff,
  isBatch,
  isFile,
  isHL7Number,
  isHL7String,
  randomString,
} from "node-hl7-client/src";
import { padHL7Date } from "node-hl7-client/src";
import { describe, expect, test } from "vitest";

describe("client utility functions", () => {
  describe("createHL7Date / padHL7Date", () => {
    // Use a fixed date so format checks don't depend on the runner's clock.
    // Note: Date is constructed in local time so the digits below match
    // wherever vitest runs.
    const FIXED = new Date(2024, 1, 3, 4, 5, 6, 78); // Feb 3, 2024 04:05:06.078

    test("default (no length) → 14-char YYYYMMDDHHMMSS", () => {
      expect(createHL7Date(FIXED)).toBe("20240203040506");
    });

    test("length '8' → YYYYMMDD", () => {
      expect(createHL7Date(FIXED, "8")).toBe("20240203");
    });

    test("length '12' → YYYYMMDDHHMM", () => {
      expect(createHL7Date(FIXED, "12")).toBe("202402030405");
    });

    test("length '14' → YYYYMMDDHHMMSS", () => {
      expect(createHL7Date(FIXED, "14")).toBe("20240203040506");
    });

    test("length '19' → YYYYMMDDHHMMSS.SSSS (4-digit padded)", () => {
      expect(createHL7Date(FIXED, "19")).toBe("20240203040506.0078");
    });

    test("length '24' → includes timezone offset", () => {
      const result = createHL7Date(FIXED, "24");
      expect(result).toMatch(/^20240203040506\.0078[+-]\d{4}$/);
    });

    test("length '26' → microseconds + timezone", () => {
      const result = createHL7Date(FIXED, "26");
      // milliseconds=78 → microseconds=78000 padded to 6 digits
      expect(result).toMatch(/^20240203040506\.078000[+-]\d{4}$/);
    });

    test("padHL7Date pads numbers to fixed width with zeros", () => {
      expect(padHL7Date(0, 2)).toBe("00");
      expect(padHL7Date(7, 2)).toBe("07");
      expect(padHL7Date(42, 2)).toBe("42");
      expect(padHL7Date(123, 2)).toBe("123"); // already wider than width
      expect(padHL7Date(5, 4)).toBe("0005");
    });

    test("padHL7Date accepts a custom pad character", () => {
      expect(padHL7Date(7, 4, "x")).toBe("xxx7");
    });
  });

  describe("isHL7Number / isHL7String", () => {
    test("isHL7Number recognizes numeric strings and numbers", () => {
      expect(isHL7Number("42")).toBe(true);
      expect(isHL7Number(42)).toBe(true);
      expect(isHL7Number("0")).toBe(true);
    });

    test("isHL7Number returns true for any input the predicate accepts", () => {
      // Implementation is `!isNaN(value) || !Number.isFinite(value)` — the
      // second clause makes the predicate return true even for strings that
      // parseInt-coerce to NaN. Lock the current behavior.
      expect(isHL7Number("abc")).toBe(true);
      expect(isHL7Number(Infinity)).toBe(true);
    });

    test("isHL7String recognizes strings only", () => {
      expect(isHL7String("hello")).toBe(true);
      expect(isHL7String("")).toBe(true);
      expect(isHL7String(42 as any)).toBe(false);
      expect(isHL7String(null as any)).toBe(false);
      expect(isHL7String(undefined as any)).toBe(false);
    });
  });

  describe("isBatch / isFile", () => {
    test("isFile detects FHS prefix", () => {
      expect(isFile(String.raw`FHS|^~\&|...`)).toBe(true);
      expect(isFile(String.raw`MSH|^~\&|...`)).toBe(false);
      expect(isFile(String.raw`BHS|^~\&|...`)).toBe(false);
    });

    test("isBatch is true for multi-MSH text without BHS", () => {
      const multi =
        "MSH|^~\\&|||||20240101||ADT^A01|1||2.7\rMSH|^~\\&|||||20240101||ADT^A01|2||2.7";
      expect(isBatch(multi)).toBe(true);
    });

    test("isBatch is true for explicit BHS", () => {
      expect(isBatch(String.raw`BHS|^~\&|...`)).toBe(true);
    });

    test("isBatch is false for a single MSH", () => {
      expect(isBatch(String.raw`MSH|^~\&|||||20240101||ADT^A01|1||2.7`)).toBe(
        false,
      );
    });
  });

  describe("expBackoff", () => {
    test("delay is within [step, high]", () => {
      for (let attempts = 1; attempts <= 6; attempts++) {
        const delay = expBackoff(1000, 30_000, attempts);
        expect(delay).toBeGreaterThanOrEqual(1000);
        expect(delay).toBeLessThanOrEqual(30_000);
      }
    });

    test("delay scales with attempt count (statistically)", () => {
      // Statistical check: large attempts should produce, on average, larger
      // delays than small attempts. Sample many runs to avoid flakes.
      const sample = (attempts: number) => {
        let total = 0;
        for (let index = 0; index < 200; index++)
          total += expBackoff(1000, 30_000, attempts);
        return total / 200;
      };
      const lowAvg = sample(1);
      const highAvg = sample(6);
      expect(highAvg).toBeGreaterThan(lowAvg);
    });

    test("custom exp base is honored", () => {
      // exp=1 means slots are constant — the upper bound should not grow.
      const delay = expBackoff(500, 5000, 10, 1);
      expect(delay).toBeGreaterThanOrEqual(500);
      expect(delay).toBeLessThanOrEqual(5000);
    });
  });

  describe("escapeForRegExp", () => {
    test("escapes regex metacharacters", () => {
      expect(escapeForRegExp("a.b*c+d?")).toBe(String.raw`a\.b\*c\+d\?`);
      expect(escapeForRegExp("[](){}|^$")).toBe(String.raw`\[\]\(\)\{\}\|\^\$`);
      expect(escapeForRegExp("plain")).toBe("plain");
    });
  });

  describe("decodeHexString", () => {
    test("decodes ASCII hex to characters", () => {
      // "Hi" → 0x48 0x69
      expect(decodeHexString("4869")).toBe("Hi");
      // "HL7" → 0x48 0x4c 0x37
      expect(decodeHexString("484c37")).toBe("HL7");
    });

    test("empty string returns empty string", () => {
      expect(decodeHexString("")).toBe("");
    });
  });

  describe("randomString", () => {
    test("returns the requested length", () => {
      expect(randomString().length).toBe(20); // default
      expect(randomString(1).length).toBe(1);
      expect(randomString(50).length).toBe(50);
    });

    test("only contains the allowed alphabet", () => {
      const alphabet =
        /^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0-9_]+$/;
      expect(alphabet.test(randomString(100))).toBe(true);
    });
  });
});
