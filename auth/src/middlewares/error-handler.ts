import { Request, Response, NextFunction } from 'express';

// Standardise the error/messages structure
const errorHandler = (
    err: Error, 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    console.log('Something went wrong: ', err.message);
    res.status(400).send({ 
        message:`Something went wrong: ${err.message}` 
    });
};

export { errorHandler as errorHandler };
