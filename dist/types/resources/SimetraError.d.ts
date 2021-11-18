export default class SimetraError extends Error {
    request: unknown | undefined;
    data: unknown;
    constructor(name: string, data?: unknown | undefined, request?: unknown | undefined);
}
