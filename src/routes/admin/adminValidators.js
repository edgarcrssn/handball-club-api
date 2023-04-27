import { body } from 'express-validator';
import { roles } from '../../constants/roles.js';

const rolesList = [roles.PLAYER, roles.CONTRIBUTOR, roles.COACH];

export const changeRoleValidator = [
  body('role')
    .notEmpty()
    .withMessage('role is required')
    .custom((value, { req }) => {
      if (!rolesList.includes(value)) {
        throw new Error(
          `role must be either ${rolesList
            .map((role) => `"${role}"`)
            .join(' or ')}`
        );
      }
      return true;
    }),
];
