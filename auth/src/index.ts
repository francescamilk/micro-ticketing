import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';

const app = express();
app.use(json())
.use(currentUserRouter)
.use(signinRouter)
.use(signoutRouter)
.use(signupRouter)
.use(errorHandler);

app.listen(3000, () => {
    console.log('Listening on port 3000 ~ auth');
});