import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';

const router = express.Router();

// Run validator middlewares before processing request
router.post('/api/users/signup', [
        body('email')
            .isEmail()
            .withMessage('Email must have be valid.'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be 4-20 chars long.')
    ], (req: Request, res: Response) => {
        const validationErrs = validationResult(req);
        if (!validationErrs.isEmpty()) {
            throw new RequestValidationError(validationErrs.array());
        }

        const { email, password } = req.body;
        console.log('Creating user...');

        res.send('User created successfully!');
});

export { router as signupRouter };
