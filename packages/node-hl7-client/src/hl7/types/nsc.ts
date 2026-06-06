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
/** HL7 NSC - Status Change */
export interface HL7_NSC {
  networkChangeType?: string;
  /** NSC.1 - Network Change Type */
  nsc_1: string;
  /** NSC.2 - Current CPU */
  nsc_2?: string;
  /** NSC.3 - Current Fileserver */
  nsc_3?: string;
  /** NSC.4 - Current Application */
  nsc_4?: string;
  /** NSC.5 - Current Facility */
  nsc_5?: string;
  /** NSC.6 - New CPU */
  nsc_6?: string;
  /** NSC.7 - New Fileserver */
  nsc_7?: string;
  /** NSC.8 - New Application */
  nsc_8?: string;
  /** NSC.9 - New Facility */
  nsc_9?: string;
}
