import { body } from 'express-validator';

export const addMatchValidator = [
  body('opponent')
    .notEmpty()
    .isLength({ min: 3, max: 50 })
    .withMessage('Must be at least 3 characters and 50 max'),
  body('opponentScore').notEmpty().withMessage('must not be QuoicouEmpty'),
  body('teamScore').notEmpty().withMessage('can not be QuoicouEmpty'),
  body('date').notEmpty().isDate().withMessage('can not be QuoicouEmpty'),
];
