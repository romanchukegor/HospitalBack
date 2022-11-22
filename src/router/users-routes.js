const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const {
  registrationValidator,
  loginValidator,
} = require("../middlewares/validators");

const router = new Router();

router.post(
  "/registration",
  registrationValidator,
  userController.registration
);
router.post("/login", loginValidator, userController.login);
router.get("/logout", userController.logout);
router.get("/refresh", userController.refresh);

module.exports = router;
