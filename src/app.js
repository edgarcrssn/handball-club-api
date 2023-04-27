import express from 'express';
import cors from 'cors';

import authRouter from './routes/auth/authRouter.js';
import adminRouter from './routes/admin/adminRouter.js';
import membersRouter from './routes/members/membersRouter.js';
import matchesRouter from './routes/matches/matchesRouter.js';
import articlesRouter from './routes/articles/articlesRouter.js';

import { corsMiddleware, corsOptions } from './middleware/corsMiddleware.js';
import { apiKeyMiddleware } from './middleware/apiKeyMiddleware.js';
import { adminMiddleware } from './middleware/adminMiddleware.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cors(corsOptions));
app.use(corsMiddleware);
app.use(apiKeyMiddleware);

app.use('/auth', authRouter);
app.use('/admin', adminMiddleware, adminRouter);
app.use('/members', membersRouter);
app.use('/matches', matchesRouter);
app.use('/articles', articlesRouter);

app.listen(port, () => {
  console.log(`Le quoicouserver est sur le quoicouport ${port}`);
});
