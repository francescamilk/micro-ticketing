import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../classes/errors/request-validation-error';
import { User, buildUser } from '../models/user';

const router = express.Router();

router.post('/api/users/signup', [
        body('email')
            .isEmail()
            .withMessage('Email must have be valid.'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be 4-20 chars long.')
    ], async (req: Request, res: Response) => {
        const validationErrs = validationResult(req);
        if (!validationErrs.isEmpty()) {
            throw new RequestValidationError(validationErrs.array());
        }

        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('Email already in use.');
            res.send('TEMP - Email already in use.');
        }   

        const user = buildUser({ email, password });
        await user.save();

        res.status(201).send(user);
});

export { router as signupRouter };
