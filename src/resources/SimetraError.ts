export default class SimetraError extends Error {
  constructor(name: string) {
    super(name);
    Object.setPrototypeOf(this, SimetraError.prototype);
  }
}
