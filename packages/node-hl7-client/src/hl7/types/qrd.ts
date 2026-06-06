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
/** HL7 QRD - Original-Style Query Definition */
export interface HL7_QRD {
  deferredResponseType?: string;
  /** QRD.1 - Query Date/Time */
  qrd_1: Date | string;
  /** QRD.10 - What Department Data Code */
  qrd_10?: string;
  /** QRD.2 - Query Format Code (R=Record-oriented, T=Text, D=Display) */
  qrd_2: string;
  /** QRD.3 - Query Priority (D=Deferred, I=Immediate) */
  qrd_3: string;
  /** QRD.4 - Query ID */
  qrd_4: string;
  /** QRD.5 - Deferred Response Type */
  qrd_5?: string;
  /** QRD.6 - Deferred Response Date/Time */
  qrd_6?: Date | string;
  /** QRD.7 - Quantity Limited Request */
  qrd_7: string;
  /** QRD.8 - Who Subject Filter */
  qrd_8: string;
  /** QRD.9 - What Subject Filter */
  qrd_9: string;
  quantityLimitedRequest?: string;
  queryDateTime?: Date | string;
  queryFormatCode?: string;
  queryId?: string;
  queryPriority?: string;
  whatDepartmentDataCode?: string;
  whatSubjectFilter?: string;
  whoSubjectFilter?: string;
}
