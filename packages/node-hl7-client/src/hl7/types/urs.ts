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
/** HL7 URS - Unsolicited Selection */
export interface HL7_URS {
  ruWhatUserQualifier?: string;
  ruWhereSubjectDefinition?: string;
  /** URS.1 - R/U Where Subject Definition */
  urs_1: string;
  /** URS.2 - R/U When Data Start Date/Time */
  urs_2?: Date | string;
  /** URS.3 - R/U When Data End Date/Time */
  urs_3?: Date | string;
  /** URS.4 - R/U What User Qualifier */
  urs_4?: string;
  /** URS.5 - R/U Other Results Subject Definition */
  urs_5?: string;
  /** URS.6 - R/U Which Date/Time Qualifier */
  urs_6?: string;
}
