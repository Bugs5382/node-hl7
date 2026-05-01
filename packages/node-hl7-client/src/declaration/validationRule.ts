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
