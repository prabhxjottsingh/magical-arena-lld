export class BadRequestError extends Error {
    constructor(message: string = "Invalid Inputs") {
        super(message);
        this.name = 'BadRequestError';
    }
}