/**
 * @since 2.0.0
 */
export interface Deferred<T = any> {
  promise: Promise<T>;
  reject: (reason?: any) => void;
  resolve: (value: PromiseLike<T> | T) => void;
}
