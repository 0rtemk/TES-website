import { body } from 'express-validator'

export const registerValidation = [
    body('login', 'Неверный формат логина').isLength({min: 5}),
    body('password', 'Неверный формат пароля').isLength({min: 5}),
    body('date_birth', 'Неверный формат даты').isDate(),
    body('email', 'Неверный формат почты').isEmail(),
    body('phone', 'Неверный формат номера').isLength({max: 13}),

];
