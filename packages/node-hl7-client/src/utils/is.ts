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
import { split } from "@/utils/spilt";

/**
 * Check to see if the message starts with the Batch (BHS) header segment.
 * @since 1.0.0
 * @param message
 */
export const isBatch = (message: string): boolean => {
  const lines =
    split(message).filter((line) => line.startsWith("MSH")).length > 1 || false;
  if (lines) {
    return true;
  } else if (message.startsWith("MSH") && !lines) {
    return false;
  }
  return message.startsWith("BHS");
};

/**
 * Check to see if the message starts with a File Batch (FHS) header segment.
 * @param message
 */
export const isFile = (message: string): boolean => {
  return message.startsWith("FHS");
};

/**
 * Is Number
 * @remarks Custom for this package.
 * @since 1.0.0
 * @param value
 */
export const isHL7Number = (value: number | string): boolean => {
  value = typeof value === "string" ? Number.parseInt(value) : value;
  return !isNaN(value) || !Number.isFinite(value);
};

/**
 * Is String
 * @remarks Custom for this package.
 * @since 1.0.0
 * @param value
 */
export const isHL7String = (value: any): boolean => typeof value === "string";
