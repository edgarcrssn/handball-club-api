import { body } from 'express-validator';

export const addArticleValidator = [
  body('title')
    .notEmpty()
    .isLength({ min: 4, max: 64 })
    .withMessage('Must be at least 10 characters and 100 max'),
  body('content').notEmpty().withMessage('Must not be QuoicouEmpty'),
];
