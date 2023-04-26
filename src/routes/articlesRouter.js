import express from 'express';
import articlesController from '../controllers/articles/articlesController.js';
import articleByIdController from '../controllers/articles/articleByIdController.js';
import addArticleController from '../controllers/articles/addArticleController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const articlesRouter = express.Router();

articlesRouter.get('/', articlesController);
articlesRouter.get('/:id', articleByIdController);
articlesRouter.post('/add', authMiddleware, addArticleController);

export default articlesRouter;
