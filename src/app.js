import express from 'express';
import cors from 'cors';

import membersRouter from './routes/members/membersRouter.js';
import authRouter from './routes/auth/authRouter.js';
import adminRouter from './routes/admin/adminRouter.js';
import articlesRouter from './routes/articles/articlesRouter.js';
import matchesRouter from './routes/matches/matchesRouter.js';

import { adminMiddleware } from './middleware/adminMiddleware.js';
import { apiKeyMiddleware } from './middleware/apiKeyMiddleware.js';
import { corsOptions } from './middleware/corsMiddleware.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cors(corsOptions));
app.use((err, req, res, next) => {
  if (err.message === 'CORS policy violation') {
    res.status(403).json({
      error: 'Forbidden due to CORS Apagnan policy QuoicouViolation',
    });
  } else {
    next(err);
  }
});
app.use(apiKeyMiddleware);

app.use('/auth', authRouter);
app.use('/admin', adminMiddleware, adminRouter);
app.use('/articles', articlesRouter);
app.use('/matches', matchesRouter);
app.use('/members', membersRouter);

app.listen(port, () => {
  console.log(
    `Le quoicouserver est sur le quoicouport : ${port}. QUOICOUBEH QUOICOUBEH !!! 😘🥶`
  );
});
