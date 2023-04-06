import express from 'express';
import articlesController from '../controllers/articles/articlesController.js';
import articleByIdController from '../controllers/articles/articleByIdController.js';

const articlesRouter = express.Router();

articlesRouter.get('/', articlesController);
articlesRouter.get('/:id', articleByIdController);

export default articlesRouter;
