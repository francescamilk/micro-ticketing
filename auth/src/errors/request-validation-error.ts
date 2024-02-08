import { ValidationError } from 'express-validator';

// Custom subclass to include validator errs in global response
export class RequestValidationError extends Error {
    constructor(public errors: ValidationError[]) {
        super();

        // Since extending built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
}