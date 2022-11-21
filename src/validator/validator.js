const { check, validationResult } = require("express-validator");

exports.registrationValidator = [
  check("login")
    .notEmpty()
    .withMessage("Empty String")
    .matches(/^[a-z]+([-_]?[a-z0-9]+){0,2}$/i),

  check("password")
    .notEmpty()
    .withMessage("Empty String")
    .matches(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    ),
];

exports.loginValidator = [
  check("login").trim().notEmpty().withMessage("Empty String"),
  
  check("password").trim().notEmpty().withMessage("Empty String"),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();

  if (error.length) {
    return res.json({ error: error[0].msg });
  }

  next();
};
