import { body } from 'express-validator';
import { roles } from '../../constants/roles.js';

const rolesList = [roles.PLAYER, roles.CONTRIBUTOR, roles.COACH];

export const changeRoleValidator = [
  body('role')
    .notEmpty()
    .withMessage('Role is QuoicouRequired')
    .custom((value, { req }) => {
      if (!rolesList.includes(value)) {
        throw new Error(
          `Role must be either ${rolesList
            .map((role) => `"${role}"`)
            .join(' or ')}`
        );
      }
      return true;
    }),
];
