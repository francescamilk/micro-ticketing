import { ValidationError } from 'express-validator';
import { CustomError } from '../types/custom-error';

export class RequestValidationError extends Error implements CustomError {
    statusCode = 400;

    constructor(private errors: ValidationError[]) {
        super();
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serialisedErrors() {
        return this.errors.map((err) => {
            return { message: err.msg, type: err.type }
        });
    }
}