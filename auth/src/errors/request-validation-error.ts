import { ValidationError } from 'express-validator';

// Custom subclass to include validator errs in global response
export class RequestValidationError extends Error {
    statusCode = 400;

    constructor(private errors: ValidationError[]) {
        super();

        // Since extending built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    // Standardise error/messages structure
    // {
    //     errors: {
    //         message: string, field?: string
    //     }[]
    // }
    serialiseErrors() {
        return this.errors.map((err) => {
            return { message: err.msg, type: err.type }
        });
    }
}