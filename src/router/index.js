const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const {
  registrationValidator,
  loginValidator,
  validate,
} = require("../validator/validator");

const router = new Router();

router.post(
  "/registration",
  registrationValidator,
  validate,
  userController.registration
);

router.post("/login", loginValidator, validate, userController.login);

router.post("/logout", userController.logout);

router.get("/refresh", userController.refresh);

module.exports = router;
