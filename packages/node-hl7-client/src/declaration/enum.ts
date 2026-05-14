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
/**
 * Type of Segments Values
 * @remarks Used during the class creation to give each type its own index value.
 * This is done during the constructor phase of the classes.
 * @since 1.0.0
 */
export enum Delimiters {
  /** Usually each line of the overall HL7 Message. */
  Segment,
  /** The field of each segment. Usually separated with a | */
  Field,
  /** Usually within each Field, seperated by ^ */
  Component,
  /** Usually within each Component, seperated by & */
  Repetition,
  /** The escape string used within the code. */
  Escape,
  /** Usually within each Field, seperated by ~ */
  SubComponent,
}

/**
 * State of the Connected to the Server
 * @remarks These are the states that are used to track the connecting to the server side and also during the auto-reconnect phase.
 * @since 1.0.0
 */
export enum ReadyState {
  /** The client is trying to connect to the server. */
  CONNECTING,
  /** The client is connected to the server.  */
  CONNECTED,
  /** The client is open, but not yet trying to connect to the server.  */
  OPEN,
  /** The client is closing the connection by force or by timeout */
  CLOSING,
  /** The client connection is closed.  */
  CLOSED,
}
