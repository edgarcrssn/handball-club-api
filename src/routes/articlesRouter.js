import express from 'express';
import articlesController from '../controllers/articles/articlesController.js';
import articleByIdController from '../controllers/articles/articleByIdController.js';
import addArticleController from '../controllers/articles/addArticleController.js';
import { contributorMiddleware } from '../middleware/contributorMiddleware.js';
import { addArticleValidator } from './validators/articlesValidator.js';
import { handleClassValidatorErrors } from '../middleware/handleClassValidatorErrors.js';

const articlesRouter = express.Router();

articlesRouter.get('/', articlesController);
articlesRouter.get('/:id', articleByIdController);
articlesRouter.post(
  '/add',
  contributorMiddleware,
  addArticleValidator,
  handleClassValidatorErrors,
  addArticleController
);

export default articlesRouter;
