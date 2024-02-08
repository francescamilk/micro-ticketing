import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';

// Standardise error/messages structure
// {
//     errors: {
//         message: string, field?: string
//     }[]
// }
const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (err instanceof RequestValidationError) {
        // Format incoming err custom subclass
        // RequestValidationError.errors: ValidationError[]
        const formattedErrs = err.errors.map((error) => {
            return { message: error.msg, type: error.type }
        });
        return res.status(400).send({ errors: formattedErrs })
    }

    // Generic response
    res.status(400).send({ 
        errors: [ { message:`Something went wrong: ${err.message}` } ]         
    });
};

export { errorHandler as errorHandler };
