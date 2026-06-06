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
/** HL7 2.7 IPC - Imaging Procedure Control */
export interface HL7_2_7_IPC {
  /** IPC.1 - Accession Identifier (required) */
  ipc_1: string;
  /** IPC.2 - Requested Procedure ID (required) */
  ipc_2: string;
  /** IPC.3 - Study Instance UID (required) */
  ipc_3: string;
  /** IPC.4 - Scheduled Procedure Step ID (required) */
  ipc_4: string;
  /** IPC.5 - Modality */
  ipc_5?: string;
  /** IPC.6 - Protocol Code */
  ipc_6?: string;
  /** IPC.7 - Scheduled Station Name */
  ipc_7?: string;
  /** IPC.8 - Scheduled Procedure Step Location */
  ipc_8?: string;
}
