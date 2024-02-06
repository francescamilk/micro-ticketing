import express from 'express';

const router = express.Router();

router.get('/api/v1/signup', (_req, res) => {
    res.send('Hello from /api/v1/signup !')
});

export { router as signupRouter };