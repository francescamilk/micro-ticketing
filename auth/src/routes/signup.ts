import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Run validator middlewares before processing request
router.post('/api/v1/signup', [
        body('email')
            .isEmail()
            .withMessage('Email must have a valid format.'),
        body('password')
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage('Password must be valid (4-20 chars long).')
    ], (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send(errors.array());
        }

        const { email, password } = req.body;
        console.log('Creating user...');

        res.send({});
});

export { router as signupRouter };
