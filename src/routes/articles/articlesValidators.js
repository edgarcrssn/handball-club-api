import { body } from 'express-validator';

export const addArticleValidator = [
  body('title')
    .notEmpty()
    .isLength({ min: 4, max: 64 })
    .withMessage('must be at least 4 characters and 64 max'),
  body('content').notEmpty().withMessage('must not be empty'),
];
