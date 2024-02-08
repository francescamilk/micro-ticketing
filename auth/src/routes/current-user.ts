import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (_req, res) => {
    res.send('Hello from /api/v1/currentuser !');
});

export { router as currentUserRouter };