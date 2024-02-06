import express from 'express';

const router = express.Router();

router.get('/api/v1/signout', (_req, res) => {
    res.send('Hello from /api/v1/signout !')
});

export { router as signoutRouter };