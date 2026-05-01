import EventEmitter from "node:events";

/** @internal */
export const sleep = async (ms: number): Promise<unknown> => {
  return await new Promise((resolve) => setTimeout(resolve, ms));
};

/** @internal */
export const expectEvent = async <T = any>(
  emitter: EventEmitter,
  name: string | symbol,
): Promise<T> => {
  return await new Promise<T>((resolve) => {
    emitter.once(name, resolve);
  });
};

/** @internal */
export interface Deferred<T = any> {
  promise: Promise<T>;
  reject: (reason?: any) => void;
  resolve: (value: PromiseLike<T> | T) => void;
}

/** @internal */
export const createDeferred = <T = any>(noUncaught?: boolean): Deferred<T> => {
  const dfd: any = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  /* istanbul ignore next */
  if (noUncaught === false) {
    dfd.promise.catch(() => {});
  }
  return dfd;
};

/** @internal */
export const generateLargeBase64String = (sizeInKb: number = 200) => {
  // Size in bytes (200KB = 200 * 1024 bytes)
  const size = sizeInKb * 1024;

  // Generate string of 'a' characters
  let largeString = "";
  for (let index = 0; index < size; index++) {
    largeString += "a";
  }

  return Buffer.from(largeString).toString("base64");
};
