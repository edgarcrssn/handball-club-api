import express from 'express';
import articlesController from './controllers/articlesController.js';
import articleByIdController from './controllers/articleByIdController.js';
import addArticleController from './controllers/addArticleController.js';
import { contributorMiddleware } from '../../middleware/contributorMiddleware.js';
import { addArticleValidator } from './articlesValidators.js';
import { classValidatorMiddleware } from '../../middleware/classValidatorMiddleware.js';

const articlesRouter = express.Router();

articlesRouter.get('/', articlesController);
articlesRouter.get('/:id', articleByIdController);
articlesRouter.post(
  '/add',
  contributorMiddleware,
  addArticleValidator,
  classValidatorMiddleware,
  addArticleController
);

export default articlesRouter;
