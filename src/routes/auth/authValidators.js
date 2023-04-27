import { body } from 'express-validator';

export const signupValidator = [
  body('firstName')
    .trim()
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage('first name must be at least 2 characters long'),
  body('lastName')
    .trim()
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage('last name must be at least 2 characters long'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('please provide a valid email address'),
  body('password')
    .trim()
    .notEmpty()
    .isLength({ min: 3, max: 20 })
    .withMessage('password must be at least 8 characters long')
    .matches(/[A-Z]/)
    .withMessage('password must contain at least one uppercase letter')
    .matches(/[a-z]/)
    .withMessage('password must contain at least one lowercase letter')
    .matches(/\d/)
    .withMessage('password must contain at least one digit'),
];

export const loginValidator = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('please provide a valid email address'),
  body('password').trim().notEmpty().withMessage('password must not be empty'),
];
