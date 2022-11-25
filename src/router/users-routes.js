const Router = require("express").Router;
const UserController = require("../controllers/user-controller");
const {
  registrationValidator,
  loginValidator,
} = require("../middlewares/authentication-validators");

const router = new Router();

router.post(
  "/registration",
  registrationValidator,
  UserController.registration
);
router.post(
  "/login", 
  loginValidator, 
  UserController.login
);
router.get("/logout", UserController.logout);
router.get("/refresh", UserController.refresh);

module.exports = router;
