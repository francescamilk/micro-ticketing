import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../classes/errors/custom-error';

const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode)
        .send({ errors: err.serialisedErrors() });
    }
    // else Error
    res.status(400).send({ 
        errors: [ { message:`Something went wrong. ${err.message}` } ]         
    });
};

export { errorHandler as errorHandler };
