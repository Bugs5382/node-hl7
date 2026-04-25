export type ValidationRule = {
  /** An array of valid values. Requires `type` to be `'string'` (the default). */
  allowedValues?: string[];
  dependsOn?: {
    path: string;
    mustBeSet?: boolean;
    mustEqual?: any;
  };
  deprecated?: boolean;
  /** Version expression(s) this field is valid for, e.g. `">=2.3"` or `[">=2.1", "<=2.6"]`. */
  hl7Support?: string | string[];
  /** HL7 data type identifier, e.g. `"ST"`, `"NM"`, `"DTM"`, `"CWE"`. Documentation only. */
  hl7Type?: string;
  /** Exact length or min/max bounds for string values. */
  length?: number | { min?: number; max?: number };
  /** Min/max bounds for numeric values. Requires `type: 'number'`. */
  number?: { min?: number; max?: number };
  pattern?: RegExp;
  /** If `true`, the field must be present and non-empty.
   * @default false */
  required?: boolean;
  /** Input type — controls which validations are applied.
   * @default "string" */
  type?: "string" | "number" | "date";
  /** When `deprecated` is true, name the replacement field here. */
  useField?: string;
};
