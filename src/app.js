import express from 'express';
import db from './Database.js';
import authRouter from './routes/authRouter.js';
import adminRouter from './routes/adminRouter.js';
import { adminMiddleware } from './middleware/adminMiddleware.js';
import articlesRouter from './routes/articlesRouter.js';
import matchsRouter from './routes/matchsRouter.js';
import { apiKeyMiddleware } from './middleware/apiKeyMiddleware.js';
import { corsOptions } from './middleware/corsMiddleware.js';
import cors from 'cors';

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
app.use('/matchs', matchsRouter);

app.listen(port, () => {
  console.log(
    `Le quoicouserver est sur le quoicouport : ${port}. QUOICOUBEH QUOICOUBEH !!! 😘🥶`
  );
});
