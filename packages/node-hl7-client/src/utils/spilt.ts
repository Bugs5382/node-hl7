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
import { getSegIndexes } from "@/utils/getSegIndexes";

/**
 * Split the message.
 * @remarks Split the message into its parts.
 * @since 1.0.0
 * @param data
 * @param segments
 */
export const split = (data: string, segments: string[] = []): string[] => {
  const getSegIndex = [
    ...getSegIndexes(["FHS", "BHS", "MSH", "BTS", "FTS"], data),
  ];
  getSegIndex.sort((a, b) => Number.parseInt(a) - Number.parseInt(b));
  for (let index = 0; index < getSegIndex.length; index++) {
    const start = Number.parseInt(getSegIndex[index]);
    let end = Number.parseInt(getSegIndex[index + 1]);
    if (index + 1 === getSegIndex.length) {
      end = data.length;
    }
    segments.push(data.slice(start, end));
  }
  return segments;
};
