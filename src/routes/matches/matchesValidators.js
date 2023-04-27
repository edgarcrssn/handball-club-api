import { body } from 'express-validator';

export const addMatchValidator = [
  body('opponent')
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 50 })
    .withMessage('must be a string with at least 3 characters and 50 max'),
  body('opponentScore').optional().isNumeric().withMessage('must be a numeric'),
  body('teamScore').optional().isNumeric().withMessage('must be a numeric'),
  body('date')
    .notEmpty()
    .withMessage('can not be empty')
    .isDate()
    .withMessage('should be a date'),
];

export const editMatchValidator = [
  body('opponentScore').isNumeric().withMessage('must be a numeric'),
  body('teamScore').isNumeric().withMessage('must be a numeric'),
];
