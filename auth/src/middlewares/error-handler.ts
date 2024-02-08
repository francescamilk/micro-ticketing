import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';

const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (err instanceof RequestValidationError) {
        return res.status(err.statusCode)
        .send({ errors: err.serialisedErrors() });
    }

    res.status(400).send({ 
        errors: [ { message:`Something went wrong. ${err.message}` } ]         
    });
};

export { errorHandler as errorHandler };
