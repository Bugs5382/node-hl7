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
 * Calculate exponential backoff/retry delay.
 * Where attempts >= 1, exp > 1
 * @example expBackoff(1000, 30000, attempts)
 *   ---------------------------------
 *    attempts | possible delay
 *   ----------+----------------------
 *        1    | 1000 to 2000
 *        2    | 1000 to 4000
 *        3    | 1000 to 8000
 *        4    | 1000 to 16000
 *        5    | 1000 to 30000
 *   ---------------------------------
 * Attempts required before max delay is possible = Math.ceil(Math.log(high/step) / Math.log(exp))
 * @since 1.0.0
 * @param step
 * @param high
 * @param attempts
 * @param exp
 */
export const expBackoff = (
  step: number,
  high: number,
  attempts: number,
  exp = 2,
): number => {
  const slots = Math.ceil(Math.min(high / step, Math.pow(exp, attempts)));
  const max = Math.min(slots * step, high);
  return Math.floor(Math.random() * (max - step) + step);
};
