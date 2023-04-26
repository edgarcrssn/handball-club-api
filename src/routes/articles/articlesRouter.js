import express from 'express';

import getAllArticlesWithAuthorController from './controllers/getAllArticlesWithAuthorController.js';
import getArticleByIdWithAuthorController from './controllers/getArticleByIdWithAuthorController.js';
import addArticleController from './controllers/addArticleController.js';

import { contributorMiddleware } from '../../middleware/contributorMiddleware.js';
import { classValidatorMiddleware } from '../../middleware/classValidatorMiddleware.js';

import { addArticleValidator } from './articlesValidators.js';

const articlesRouter = express.Router();

articlesRouter.get('/', getAllArticlesWithAuthorController);
articlesRouter.get('/:id', getArticleByIdWithAuthorController);
articlesRouter.post(
  '/',
  contributorMiddleware,
  addArticleValidator,
  classValidatorMiddleware,
  addArticleController
);

export default articlesRouter;
