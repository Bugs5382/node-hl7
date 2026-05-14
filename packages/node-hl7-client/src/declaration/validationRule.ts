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
import type { HL7UsageCode } from "@/hl7/metadata/types";

export type ValidationRule = {
  /** An array of valid values. Requires `type` to be `'string'` (the default). */
  allowedValues?: string[];
  dependsOn?: {
    mustBeSet?: boolean;
    mustEqual?: any;
    path: string;
  };
  deprecated?: boolean;
  /** Version expression(s) this field is valid for, e.g. `">=2.3"` or `[">=2.1", "<=2.6"]`. */
  hl7Support?: string | string[];
  /** HL7 data type identifier, e.g. `"ST"`, `"NM"`, `"DTM"`, `"CWE"`. Documentation only. */
  hl7Type?: string;
  /** Exact length or min/max bounds for string values. */
  length?: { max?: number; min?: number } | number;
  /** Min/max bounds for numeric values. Requires `type: 'number'`. */
  number?: { max?: number; min?: number };
  pattern?: RegExp;
  /** If `true`, the field must be present and non-empty.
   * @default false */
  required?: boolean;
  /** Input type — controls which validations are applied.
   * @default "string" */
  type?: "date" | "number" | "string";
  /**
   * HL7 usage code for the field in the current version. When set, drives:
   * - `"R"` => required = true
   * - `"B"` => deprecated = true (warning, value still serializes)
   * - `"W"` / `"X"` => hard error if value is provided
   * - `"D"` => requires `dependsOn` to resolve
   * - `"O"` => no extra constraint
   */
  usage?: HL7UsageCode;
  /** When `deprecated` is true, name the replacement field here. */
  useField?: string;
};
