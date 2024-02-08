import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (_req, res) => {
    res.send('Hello from /api/v1/signin !');
});

export { router as signinRouter };