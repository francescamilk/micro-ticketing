export abstract class CustomError extends Error {
    abstract statusCode: number;
    
    constructor(message: string) {
        // For log purposes
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serialisedErrors(): { message: string; type?: string }[];
}