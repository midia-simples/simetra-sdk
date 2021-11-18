export default class SimetraError extends Error {
  public request: unknown | undefined;
  public data: unknown;

  constructor(
    name: string,
    data: unknown | undefined = undefined,
    request: unknown | undefined = undefined
  ) {
    super(name);
    this.request = request;
    this.data = data;

    Object.setPrototypeOf(this, SimetraError.prototype);
  }
}
