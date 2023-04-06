import express from 'express';
import db from './Database.js';
import authRouter from './routes/authRouter.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Le giga server de la mort qui tue est sur le port : ${port}`);
});
