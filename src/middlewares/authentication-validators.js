const { check } = require("express-validator");
const { validationResponse } = require("./validation-result");

registrationValidator = [
  check("login")
    .isString()
    .withMessage("Login must be a string")
    .trim()
    .notEmpty()
    .withMessage("Empty String")
    .isLength({ min: 6 })
    .withMessage("Login must be more than 6 characters"),
  check("password")
    .isString()
    .withMessage("Password must be a string")
    .trim()
    .notEmpty()
    .withMessage("Empty String")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g)
    .withMessage(
      "Password must be more than 6 characters and one and more number"
    ),

  validationResponse,
];

loginValidator = [
  check("login")
    .isString()
    .withMessage("Login must be a string")
    .trim()
    .notEmpty()
    .withMessage("Empty String"),
  check("password")
    .isString()
    .withMessage("Password must be a string")
    .trim()
    .notEmpty()
    .withMessage("Empty String"),

  validationResponse,
];

module.exports = {
  registrationValidator,
  loginValidator,
};
