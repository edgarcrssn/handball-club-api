import express from 'express';
// import clientsRouter from './routes/clientsRouter.js';
// import hotelRouter from './routes/hotelRouter.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use('/clients', clientsRouter);
// app.use('/hotel', hotelRouter);

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
