import express from 'express';
import db from './Database.js';
import authRouter from './routes/authRouter.js';
import adminRouter from './routes/adminRouter.js';
import { adminMiddleware } from './middleware/adminMiddleware.js';
import articlesRouter from './routes/articlesRouter.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/auth', authRouter);
app.use('/admin', adminMiddleware, adminRouter);
app.use('/articles', articlesRouter);

app.listen(port, () => {
  console.log(
    `Le quoicouserver est sur le quoicouport : ${port}. QUOICOUBEH QUOICOUBEH !!! 😘🥶`
  );
});
