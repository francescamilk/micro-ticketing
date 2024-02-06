import express from 'express';

const router = express.Router();

router.post('/api/v1/signin', (_req, res) => {
    res.send('Hello from /api/v1/signin !');
});

export { router as signinRouter };