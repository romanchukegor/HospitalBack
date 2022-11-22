const { check } = require("express-validator");
const {validate} = require("./validation-result")

module.exports.registrationValidator = [
  check("login")
    .notEmpty()
    .withMessage("Empty String")
    .isLength({ min: 6 })
    .withMessage("Login must be more than 6 characters"),

  check("password")
    .notEmpty()
    .withMessage("Empty String")
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    )
    .withMessage(
      "Password must be more than 6 characters and one and more number"
    ),
    
    validate
];

module.exports.loginValidator = [
  check("login")
    .trim()
    .notEmpty()
    .withMessage("Empty String"),

  check("password")
    .trim()
    .notEmpty()
    .withMessage("Empty String"),

  validate
];


