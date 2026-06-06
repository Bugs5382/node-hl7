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
/** HL7 QRF - Original Style Query Filter */
export interface HL7_QRF {
  otherQrySubjectFilter?: string;
  /** QRF.1 - Where Subject Filter */
  qrf_1: string;
  /** QRF.2 - When Data Start Date/Time */
  qrf_2?: Date | string;
  /** QRF.3 - When Data End Date/Time */
  qrf_3?: Date | string;
  /** QRF.4 - What User Qualifier */
  qrf_4?: string;
  /** QRF.5 - Other QRY Subject Filter */
  qrf_5?: string;
  whatUserQualifier?: string;
  whenDataEndDateTime?: Date | string;
  whenDataStartDateTime?: Date | string;
  whereSubjectFilter?: string;
}
