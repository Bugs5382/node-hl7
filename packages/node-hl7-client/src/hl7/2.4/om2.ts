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
/** HL7 2.4 OM2 - Numeric Observations */
export interface HL7_2_4_OM2 {
  /** OM2.1 - Sequence Number (required) */
  om2_1: number | string;
  /** OM2.10 - Minimum Meaningful Increments */
  om2_10?: string;
  /** OM2.2 - Units of Measure */
  om2_2?: string;
  /** OM2.3 - Range of Decimal Precision */
  om2_3?: string;
  /** OM2.4 - Corresponding SI Units of Measure */
  om2_4?: string;
  /** OM2.5 - SI Conversion Factor */
  om2_5?: string;
  /** OM2.6 - Reference (Normal) Range for Ordinal/Continuous Observations */
  om2_6?: string;
  /** OM2.7 - Critical Range for Ordinal/Continuous Obs */
  om2_7?: string;
  /** OM2.8 - Absolute Range for Ordinal/Continuous Obs */
  om2_8?: string;
  /** OM2.9 - Delta Check Criteria */
  om2_9?: string;
}
