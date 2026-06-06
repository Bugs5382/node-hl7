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
export interface HL7_MSH {
  /** Processing ID
   * @since 1.0.0 */
  msh_11: "P" | "T";
  /** Sending Application
   * @since 4.0.0 */
  msh_3?: string;
  /** Sending Facility
   * @since 4.0.0 */
  msh_4?: string;
  /** Receiving Application
   * @since 4.0.0 */
  msh_5?: string;
  /** Receiving Facility
   * @since 4.0.0 */
  msh_6?: string;
  /** Date of Message
   * @remarks Equivalent to 'timeStamp'
   * @defailt Current Date/Time
   * @since 4.0.0 */
  msh_7?: Date;
  /** Security
   * @remarks Optional, String Data
   * @since 4.0.0 */
  msh_8?: string;
  /** Processing ID
   * @since 4.0.0 */
  processingId: "P" | "T";
  /** Receiving Application
   * @since 4.0.0 */
  receivingApplication?: string;
  /** Receiving Facility
   * @since 4.0.0 */
  receivingFacility?: string;
  /** Security
   * @remarks Optional, String Data
   * @since 4.0.0 */
  security?: string;
  /** Sending Application
   * @since 4.0.0 */
  sendingApplication?: string;
  /** Sending Application
   * @since 4.0.0 */
  sendingFacility?: string;
  /** Date of Message
   * @remarks Equivalent to MSH.7
   * @defailt Current Date/Time
   * @since 4.0.0 */
  timeStamp?: Date;
}
