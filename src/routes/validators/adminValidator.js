import { body } from 'express-validator';

const roleList = ['player', 'contributor', 'coach'];

export const changeRoleValidator = [
  body('role')
    .notEmpty()
    .withMessage('Role is quoicourequired')
    .custom((value, { req }) => {
      if (!roleList.includes(value)) {
        throw new Error(
          'Role must be either "player", "contributor", or "coach"'
        );
      }
      return true;
    }),
];
