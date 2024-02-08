import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
    statusCode = 400;

    constructor(private errors: ValidationError[]) {
        // For log purposes
        super('Invalid user signup paramters');
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serialisedErrors() {
        return this.errors.map((err) => {
            return { message: err.msg, type: err.type }
        });
    }
}