const { check } = require("express-validator");
const { validate } = require("./validation-result");

createAppointmentValidator = [
  check("name")
    .isString()
    .withMessage("Name must be a string")
    .trim()
    .notEmpty()
    .withMessage("Empty name"),
  check("doctor")
    .isString()
    .withMessage("Doctor must be a string")
    .trim()
    .notEmpty()
    .withMessage("Empty doctor's name"),
  check("date").isDate().withMessage("Wrong date"),
  check("complaint")
    .isString()
    .withMessage("Complaint must be a string")
    .trim()
    .notEmpty()
    .withMessage("Empty complaint"),

  validate,
];

module.exports = {
  createAppointmentValidator,
};
